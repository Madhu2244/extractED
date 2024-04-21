from flask import Flask, request, jsonify
from flask_cors import CORS
from preprocessing.text_extraction import extract_text_from_presentation
from preprocessing.sentence_processing import extract_sentences_from_text
from preprocessing.graph_creation import create_graph
from summarization.header_generation import create_headers
from summarization.content_summarization import summarize_clusters
from generation.notes_creation import generate_notes_from_summaries
from generation.quiz_generation import generate_quiz
import os
import json

# Initialize Flask App
app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_quiz():
    if 'quiz' in request.files:
        quiz = request.files['quiz']
        print(quiz)
    return jsonify({'job': 'you did amazing!'}), 200

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

            return jsonify({
                'message': 'File uploaded and processed',
                'text': sentences,
                'graph_data': graph,
                'headers': headers,
                'summaries': summaries,
                'notes': notes,
                'quiz': quiz_object,
                }), 200

    return jsonify({'error': 'No file part'}), 400

# Main function to run the app
if __name__ == '__main__':
    app.run(debug=True)