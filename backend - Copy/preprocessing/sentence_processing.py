import re
import nltk
from nltk.tokenize import sent_tokenize

nltk.download('punkt')

# Function to split text into sentences
def extract_sentences_from_text(texts):
    texts = re.sub(r'’', "'", texts)
    sentences = sent_tokenize(texts)
    return sentences