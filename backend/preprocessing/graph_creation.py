from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


model = SentenceTransformer('all-MiniLM-L6-v2')

# Combine similar sentences into a graph | dict()
def create_graph(sentences):
    graph = {sentence: [] for sentence in sentences}

    embed = model.encode(sentences)
    similarity_matrix = cosine_similarity(embed)

    for i in range(len(sentences)):
        for j in range(i + 1, len(sentences)):
            if i != j and similarity_matrix[i][j] > 0.4:
                graph[sentences[i]].append(sentences[j])
                graph[sentences[j]].append(sentences[i])

    return graph
