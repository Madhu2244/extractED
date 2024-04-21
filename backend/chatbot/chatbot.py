import os
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains import ConversationalRetrievalChain
from langchain_openai import OpenAI
from langchain.prompts.prompt import PromptTemplate
from langchain.chains import ChatVectorDBChain
from langchain.memory import ConversationBufferMemory

# Set up OpenAI API key


loader = TextLoader("/Users/tbanerjee12/extractED/backend/chatbot/output.txt")
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

# Chat loop
print("Welcome to the Chatbot! Type 'quit' to exit.")
while True:
    user_input = input("User: ")
    if user_input.lower() == "quit":
        break

    # Generate response
    result = qa.invoke({"question": user_input})
    response = result["answer"]

    print(f"Chatbot: {response}")