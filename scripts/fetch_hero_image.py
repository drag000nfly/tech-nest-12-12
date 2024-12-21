import os
import json
import requests
import time
from typing import Optional, Dict
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def create_session() -> requests.Session:
    """
    Create a requests session with retry strategy.
    """
    session = requests.Session()
    retries = Retry(
        total=3,
        backoff_factor=1,
        status_forcelist=[429, 500, 502, 503, 504]
    )
    session.mount('https://', HTTPAdapter(max_retries=retries))
    return session

def search_unsplash(query: str, timeout: int = 30) -> Optional[Dict]:
    """
    Search Unsplash for images related to packing cubes using Jina's s.reader API.
    """
    headers = {
        "Authorization": f"Bearer {os.environ.get('JINA_API_KEY')}",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-With-Images-Summary": "true",
        "X-Timeout": str(timeout)
    }

    session = create_session()
    try:
        print(f"Searching Unsplash with query: {query}")
        response = session.post(
            "https://s.jina.ai/",
            headers=headers,
            json={
                "q": f"site:unsplash.com {query}",
                "options": "Default"
            },
            timeout=timeout
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.Timeout:
        print("Request timed out. Consider increasing the timeout value.")
        return None
    except requests.exceptions.RequestException as e:
        print(f"Error searching Unsplash: {str(e)}")
        return None
    finally:
        session.close()

def extract_image_url(search_result: Dict) -> Optional[str]:
    """
    Extract the first relevant image URL from search results.
    """
    if not search_result or "data" not in search_result:
        return None

    print("Processing search results...")
    for result in search_result.get("data", []):
        if "images" in result:
            for image_url in result["images"].values():
                if "unsplash.com" in image_url and any(ext in image_url.lower() for ext in ['.jpg', '.jpeg', '.png']):
                    print(f"Found suitable image: {image_url}")
                    return image_url
    print("No suitable images found in search results")
    return None

def save_hero_image_data(image_url: str, output_file: str = "hero_image_data.json"):
    """
    Save the hero image URL to a JSON file.
    """
    data = {
        "hero_image": {
            "url": image_url,
            "alt": "Best Packing Cubes for Travel - Hero Image",
            "source": "Unsplash"
        }
    }

    with open(output_file, "w") as f:
        json.dump(data, f, indent=2)
    print(f"Hero image data saved to {output_file}")

def main():
    if not os.environ.get("JINA_API_KEY"):
        print("Error: JINA_API_KEY environment variable not set")
        print("Get your Jina AI API key for free: https://jina.ai/?sui=apikey")
        return

    print("Starting hero image search...")
    search_result = search_unsplash("travel packing cubes organized luggage professional high quality")

    if search_result:
        image_url = extract_image_url(search_result)
        if image_url:
            output_file = "hero_image_data.json"
            save_hero_image_data(image_url, output_file)
        else:
            print("No suitable hero image found")
    else:
        print("Search failed")

if __name__ == "__main__":
    main()
