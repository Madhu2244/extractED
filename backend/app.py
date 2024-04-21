from flask import Flask, request, jsonify
from flask_cors import CORS
from preprocessing.text_extraction import extract_text_from_presentation
from preprocessing.sentence_processing import extract_sentences_from_text
from preprocessing.graph_creation import create_graph
from summarization.header_generation import create_headers
from summarization.content_summarization import summarize_clusters
from generation.notes_creation import generate_notes_from_summaries
from generation.quiz_generation import generate_quiz
from generation.tagging import get_subject_tag, get_notes_title
import os
import json
from test_agent import simulate_handle_generate_quiz
from test_agent import *

from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains import ConversationalRetrievalChain
from langchain_openai import OpenAI
from langchain.prompts.prompt import PromptTemplate
from langchain.chains import ChatVectorDBChain
from langchain.memory import ConversationBufferMemory

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Chatbot start
# Set up OpenAI API key

loader = TextLoader("C:\\Users\\madhu\\Documents\\UCI\\lahacks_final\\backend\\output.txt")
documents = loader.load()
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
texts = text_splitter.split_documents(documents)

# Create embeddings
embeddings = OpenAIEmbeddings()

# Create the vector store
db = FAISS.from_documents(texts, embeddings)

# Initialize the memory object
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

# Initialize the chatbot
qa = ConversationalRetrievalChain.from_llm(OpenAI(temperature=0), db.as_retriever(), memory=memory)

# Chatbot end

grader = GraderAgent(name="TestGraderAgent", seed="test_grader_agent_seed")

@app.route('/chat', methods=['POST'])
def chat():
    if request.is_json:
        data = request.get_json()
        data = dict(data)
        chat = data['chat']

        result = qa.invoke({"question": chat})
        response = result["answer"]

        return jsonify({'message': response, 'test': 'test'}), 200
    return jsonify({'error': 'Request must be JSON'}), 400

@app.route('/submit', methods=['POST'])
def submit_quiz():
    if request.is_json:
        data = request.get_json()  # Get JSON data
        data = dict(data)
        #print(data)
        #print("Received notes data:", (data['quiz']['notes']))
    
        quiz_items = (data['quiz']['quiz'])

        # Extract answers, selected responses (assuming the first option as selected), and questions
        notes = (data['quiz']['notes'])
        answers = [item['correct answer'] for item in quiz_items]
        responses = [item['options'][0] for item in quiz_items]  # Simplified assumption for demonstration
        questions = [item['question'] for item in quiz_items]

        # quiz_params = QuizParams(answers=answers, responses=responses, questions = questions, notes = notes)
        # graded_results = grader.grade_quiz(quiz_params)
        # print(graded_results)
        message = asyncio.run(simulate_handle_generate_quiz(answers, responses, questions, notes))
        return jsonify({'message': message, 'test': 'test'}), 200
    return jsonify({'error': 'Request must be JSON'}), 400

# Route to handle file upload and processing
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' in request.files:
        file = request.files['file']
        if file.filename != '':
            uploads_dir = 'uploads'
            os.makedirs(uploads_dir, exist_ok=True)

            save_path = os.path.join(uploads_dir, file.filename)
            file.save(save_path)

            text = extract_text_from_presentation(save_path)
            sentences = extract_sentences_from_text(text)
            graph = create_graph(sentences)
            headers = create_headers(graph)
            summaries = summarize_clusters(headers)
            notes = generate_notes_from_summaries(summaries)
            quiz_json = json.loads(generate_quiz(headers, notes, 2))
            quiz_pretty = json.dumps(quiz_json, indent=4)
            quiz_object = json.loads(quiz_pretty)
            subject_tag = get_subject_tag(headers, summaries, sentences, notes)
            notes_title = get_notes_title(headers, summaries, sentences, notes)

            return jsonify({
                'message': 'File uploaded and processed',
                'text': sentences,
                'graph_data': graph,
                'headers': headers,
                'summaries': summaries,
                'notes': notes,
                'quiz': quiz_object,
                'subject tag': subject_tag,
                'notes_title': notes_title,
                }), 200

    return jsonify({'error': 'No file part'}), 400

# Main function to run the app
if __name__ == '__main__':
    app.run(debug=True)