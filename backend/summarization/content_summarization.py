from langchain_openai import OpenAI
from langchain.text_splitter import CharacterTextSplitter
from langchain.docstore.document import Document
from langchain.chains.summarize import load_summarize_chain

# Function to summarize clusters of sentences associated with headers
def summarize_clusters(headers):
    llm = OpenAI(temperature=0, max_tokens=600)  
    text_splitter = CharacterTextSplitter()  
    summaries = {}  

    for header, sentences in headers.items():
        input_text = " ".join(sentences)
        
        texts = text_splitter.split_text(input_text)
        docs = [Document(page_content=t) for t in texts]  
        
        chain = load_summarize_chain(llm, chain_type="map_reduce")
        
        summary_output = chain.invoke(docs)
        clean_summary = summary_output['output_text'].replace('\n', ' ').strip()
        summaries[header] = clean_summary

    return summaries
