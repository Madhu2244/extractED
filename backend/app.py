from flask import Flask, request, jsonify
from flask_cors import CORS
from pptx import Presentation
import os
import nltk
from nltk.tokenize import sent_tokenize
import re
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# Initialize Flask App
app = Flask(__name__)
CORS(app)
nltk.download('punkt')
model = SentenceTransformer('all-MiniLM-L6-v2')



# Function to extract text
def extract_text_from_presentation(ppt_file):
    prs = Presentation(ppt_file)
    texts = ''

    for slide in prs.slides:
        for shape in slide.shapes:
            if hasattr(shape, "text"):
                texts += shape.text

    return texts

# Function to split text into sentences
def extract_sentences_from_text(texts):
    texts = re.sub(r'’', "'", texts)
    sentences = sent_tokenize(texts)
    return sentences

def create_graph(sentences):
    graph = dict()
    for sentence in sentences:
        graph[sentence] = []

    embed = model.encode(sentences)
    similarity_matrix = cosine_similarity(embed)

    for i in range(len(sentences)):
        for j in range(len(sentences)):
            if i != j and similarity_matrix[i][j] > 0.5:
                graph[sentences[i]].append(sentences[j])

    return graph

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

            return jsonify({
                'message': 'File uploaded and processed',
                'text': sentences,
                'graph_data': graph,
                }), 200

    return jsonify({'error': 'No file part'}), 400

# Main function to run the app
if __name__ == '__main__':
    app.run(debug=True)