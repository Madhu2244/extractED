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

# Initialize Flask App
app = Flask(__name__)
CORS(app)


grader = GraderAgent(name="TestGraderAgent", seed="test_grader_agent_seed")

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