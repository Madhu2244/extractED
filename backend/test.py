from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def search_youtube_link(api_key, search_query):
    youtube = build('youtube', 'v3', developerKey=api_key)
    
    # Search for videos
    request = youtube.search().list(
        q=search_query,
        part='id',
        type='video',
        maxResults=1
    )

    try:
        response = request.execute()
        if 'items' in response and len(response['items']) > 0:
            video_id = response['items'][0]['id']['videoId']
            return f"https://www.youtube.com/watch?v={video_id}"
        else:
            return None
    except HttpError as e:
        print("An error occurred:", e)
        return None

if __name__ == "__main__":
    api_key = input("Enter your YouTube API key: ")
    search_text = input("Enter your YouTube search: ")
    youtube_link = search_youtube_link(api_key, search_text)
    
    if youtube_link:
        print("YouTube link found:", youtube_link)
    else:
        print("No YouTube link found for the search query.")
