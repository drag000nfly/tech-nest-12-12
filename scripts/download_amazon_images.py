import os
import requests
import time

# Product image URLs from Amazon
PRODUCT_IMAGES = {
    'veken': 'https://m.media-amazon.com/images/I/81ZXzBqFnwL._AC_SL1500_.jpg',
    'peak-design': 'https://m.media-amazon.com/images/I/71jxhD+na5L._AC_SL1500_.jpg',
    'paravel': 'https://m.media-amazon.com/images/I/71K7JYQHKML._AC_SL1500_.jpg',
    'calpak': 'https://m.media-amazon.com/images/I/71wR8zYPUFL._AC_SL1500_.jpg',
    'eagle-creek': 'https://m.media-amazon.com/images/I/71J9ZtS6GPL._AC_SL1500_.jpg',
    'bagsmart': 'https://m.media-amazon.com/images/I/71cxQxn0NHL._AC_SL1500_.jpg',
    'shacke-pak': 'https://m.media-amazon.com/images/I/81NBy4wJ38L._AC_SL1500_.jpg'
}

def download_image(url, product_name):
    """Download image from URL and save it with proper name"""
    output_dir = '/home/ubuntu/repos/tech-nest-12-12/public/images/reviews/packing-cubes/products'
    os.makedirs(output_dir, exist_ok=True)

    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        filename = f"{product_name}.jpg"
        output_path = os.path.join(output_dir, filename)

        with open(output_path, 'wb') as f:
            f.write(response.content)

        print(f"Successfully downloaded {filename}")
        time.sleep(1)  # Be nice to Amazon's servers

    except Exception as e:
        print(f"Error downloading {product_name}: {str(e)}")

def main():
    """Download all product images"""
    for product_name, url in PRODUCT_IMAGES.items():
        print(f"Downloading {product_name}...")
        download_image(url, product_name)

if __name__ == "__main__":
    main()
