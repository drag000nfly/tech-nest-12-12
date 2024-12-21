import os
import json
import requests
import time
from typing import Dict, List, Optional
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

def search_product_images(product_name: str, timeout: int = 30) -> Dict:
    """
    Search for product images using Jina's i.jina.ai API.
    """
    headers = {
        "Authorization": f"Bearer {os.environ.get('JINA_API_KEY')}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

    session = create_session()
    try:
        print(f"Searching for images of: {product_name}")

        # Create search query focusing on product images
        search_query = f"{product_name} packing cube product photo high quality"
        print(f"Search query: {search_query}")

        response = session.post(
            "https://i.jina.ai/",
            headers=headers,
            json={
                "q": search_query,
                "options": "Default",
                "limit": 5  # Get top 5 images
            },
            timeout=timeout
        )
        response.raise_for_status()
        data = response.json()

        if data.get("data"):
            images = {}
            for idx, result in enumerate(data["data"], 1):
                if result.get("uri"):
                    image_name = f"product_image_{idx}"
                    images[image_name] = result["uri"]

            if images:
                print(f"Found {len(images)} images for {product_name}")
                return {"images": images}

        print(f"No images found for {product_name}")
        return {}
    except requests.exceptions.Timeout:
        print(f"Request timed out for {product_name}")
        return {}
    except requests.exceptions.RequestException as e:
        print(f"Error searching for {product_name}: {str(e)}")
        return {}
    finally:
        session.close()

def scrape_product_data() -> List[Dict]:
    """
    Search for product images using Jina's image search API.
    Test with one product first before processing all.
    """
    products = [
        {
            "name": "Eagle Creek Pack-It Reveal Cube Set",
            "url": "https://www.amazon.com/Eagle-Creek-Pack-Reveal-Cube/dp/B07RKQXZD9"
        }
        # PLACEHOLDER: Rest of the products list
    ]

    results = []
    for i, product in enumerate(products, 1):
        print(f"\nProcessing product {i} of {len(products)}: {product['name']}")
        data = search_product_images(product["name"])

        if data:
            results.append({
                "name": product["name"],
                "url": product["url"],
                "images": data.get("images", {})
            })
            print(f"Successfully processed {product['name']}")

            # Print found images for debugging
            if data.get("images"):
                print("Found images:")
                for img_name, img_url in data["images"].items():
                    print(f"- {img_name}: {img_url}")
            else:
                print("No images found")
        else:
            print(f"Failed to process {product['name']}")

        # Rate limiting
        if i < len(products):
            sleep_time = 0.5
            print(f"Waiting {sleep_time}s before next request...")
            time.sleep(sleep_time)

    return results

def save_results(results: List[Dict], output_file: str = "product_data.json"):
    """
    Save scraped results to a JSON file.
    """
    with open(output_file, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nScraped data saved to {output_file}")

def main():
    """
    Main function to orchestrate the scraping process.
    """
    if not os.environ.get("JINA_API_KEY"):
        print("Error: JINA_API_KEY environment variable not set")
        print("Get your Jina AI API key for free: https://jina.ai/?sui=apikey")
        return

    print("Starting product data scraping...")
    results = scrape_product_data()

    if results:
        output_file = "product_data.json"
        save_results(results, output_file)
    else:
        print("No data was scraped")

if __name__ == "__main__":
    main()
