from flask import Flask, request, jsonify
from flask_cors import CORS
from pptx import Presentation
import os

# Initialize Flask App
app = Flask(__name__)
CORS(app)


# Function to extract text
def extract_text(ppt_file):
    prs = Presentation(ppt_file)
    texts = []

    for slide in prs.slides:
        slide_text = []
        for shape in slide.shapes:
            if hasattr(shape, "text"):
                slide_text.append(shape.text)
        texts.append(' '.join(slide_text))

    return texts

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

            text = extract_text(save_path)

            return jsonify({'message': 'File uploaded and processed', 'text': text }), 200

    return jsonify({'error': 'No file part'}), 400

# Main function to run the app
if __name__ == '__main__':
    app.run(debug=True)
