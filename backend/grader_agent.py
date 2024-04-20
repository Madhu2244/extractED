from uagents import Agent, Context, Protocol, Model
from ai_engine import UAgentResponse, UAgentResponseType
from typing import List
from uagents.setup import fund_agent_if_low

class QuizParams(Model):
    answers: List[str]
    responses: List[str]

grader_proto = Protocol("Quiz Generator", version="0.1")

class GraderAgent(Agent):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.include(grader_proto)

    def grade_quiz(self, quiz_params: QuizParams):
        answers = quiz_params.answers
        responses = quiz_params.responses
        wrong = 0
        wrong_responses = []
        for i in range(len(answers)):
            if answers[i] != responses[i]:
                wrong += 1
                wrong_responses.append((responses[i], answers[i]))
        score = round((len(answers) - wrong) / len(answers) * 100)
        return score, wrong_responses

@grader_proto.on_message(model=QuizParams, replies={UAgentResponse})
async def handle_grade_quiz(ctx: Context, sender: str, req: QuizParams):
    ctx.logger.info(f"Received message from {sender}")
    score, wrong_responses = ctx.agent.grade_quiz(req)
    try:
        ctx.logger.info(f"Got message from {sender}: {req.answers}")
        ctx.logger.info(f"Got message from {sender}: {req.responses}")
        if score == 100:
            message = "Congratulations! All your answers are correct!"
        else:
            message = f"Your score: {score}%\nWrong responses: {wrong_responses}"
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