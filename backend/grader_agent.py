from uagents import Agent, Context, Protocol, Model
from ai_engine import UAgentResponse, UAgentResponseType
from typing import List
from typing import Dict
from uagents.setup import fund_agent_if_low
from langchain.text_splitter import CharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain_openai import OpenAI

class QuizParams(Model):
    answers: List[str]
    responses: List[str]
    questions: List[str]
    notes: Dict[str, str]

grader_proto = Protocol("Quiz Generator", version="0.1")

class GraderAgent(Agent):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.include(grader_proto)

    def grade_quiz(self, quiz_params: QuizParams):
        answers = quiz_params.answers
        responses = quiz_params.responses
        questions = quiz_params.questions
        notes = quiz_params.notes
        wrong = 0
        wrong_responses = []
        for i in range(len(answers)):
            if answers[i] != responses[i]:
                wrong += 1
                wrong_responses.append((questions[i], responses[i], answers[i]))
        #implement semantic search for missed questions --> headers
        missed_questions = [question for question, _, _ in wrong_responses]

        text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
        embeddings = OpenAIEmbeddings()
        
        headers = list(notes.keys())
        notes_texts = [notes[header] for header in headers]

        notes_docs = []
        for header, note_text in zip(headers, notes_texts):
            note_docs = text_splitter.create_documents([note_text], metadatas=[{"header": header}])
            notes_docs.extend(note_docs)

        db = FAISS.from_documents(notes_docs, embeddings)
        chain = load_qa_chain(OpenAI(), chain_type="stuff")
        
        # Map questions to headers
        question_header_map = {}
        for question in missed_questions:
            docs = db.similarity_search(question)
            header = docs[0].metadata["header"]
            question_header_map[question] = header

        
        # Count missed questions per header
        header_missed_count = {}
        for header in headers:
            count = sum(1 for q, h in question_header_map.items() if h == header)
            if count > 0:
                header_missed_count[header] = count
        
       
        score = round((len(answers) - wrong) / len(answers) * 100)
        return score, question_header_map, header_missed_count, wrong_responses

@grader_proto.on_message(model=QuizParams, replies={UAgentResponse})
async def handle_grade_quiz(ctx: Context, sender: str, req: QuizParams):
    ctx.logger.info(f"Received message from {sender}")
    score, question_header_map, header_missed_count, wrong_responses = ctx.agent.grade_quiz(req)
    review_sections = question_header_map.values()
    try:
        ctx.logger.info(f"Got message from {sender}: {req.questions}")
        ctx.logger.info(f"Got message from {sender}: {req.answers}")
        ctx.logger.info(f"Got message from {sender}: {req.responses}")
        if score == 100:
            message = "Congratulations! All your answers are correct!"
        else:
            message = f"Your score: {score}%\nWrong responses: {wrong_responses}\nSections to Review: {review_sections} "
        await ctx.send(
            sender,
            UAgentResponse(
                options=[],
                message=message,
                type=UAgentResponseType.SELECT_FROM_OPTIONS
            ),
        )
    except Exception as exc:
        ctx.logger.error(exc)
        await ctx.send(
            sender,
            UAgentResponse(
                message=str(exc),
                type=UAgentResponseType.ERROR
            )
        )

def run():
    SEED_PHRASE = "grader_agent_seed"
    print(f"Your agent's address is: {Agent(seed=SEED_PHRASE).address}")

    AGENT_MAILBOX_KEY = "a76c7f2f-4edf-41d8-affb-5b455194e53d"
    grader = GraderAgent(
        name="GraderAgent",
        seed=SEED_PHRASE,
        mailbox=f"{AGENT_MAILBOX_KEY}@https://agentverse.ai",
        port=8001,
        endpoint=["http://localhost:8001/grader"]
    )
    print(f"Agent name and address: {grader.name} at {grader.address}")
    fund_agent_if_low(grader.wallet.address())
    grader.run()

if __name__ == "__main__":
    run()