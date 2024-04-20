from flask import Flask, request, jsonify
from flask_cors import CORS
from pptx import Presentation
import os
import nltk
from nltk.tokenize import sent_tokenize
import re
import codecs

# Initialize Flask App
app = Flask(__name__)
CORS(app)
nltk.download('punkt')


# Function to extract text
def extract_text_from_presentation(ppt_file):
    prs = Presentation(ppt_file)
    texts = ''

    for slide in prs.slides:
        for shape in slide.shapes:
            if hasattr(shape, "text"):
                texts += shape.text

    return texts

def extract_sentences_from_text(texts):
    texts = re.sub(r'’', "'", texts)
    sentences = sent_tokenize(texts)
    return sentences

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

            return jsonify({'message': 'File uploaded and processed', 'text': sentences }), 200

    return jsonify({'error': 'No file part'}), 400

# Main function to run the app
if __name__ == '__main__':
    app.run(debug=True)