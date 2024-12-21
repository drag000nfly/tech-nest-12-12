import os
import requests

# Create directory if it doesn't exist
output_dir = os.path.join(os.path.expanduser('~'), 'repos', 'tech-nest-12-12', 'public', 'images', 'reviews', 'packing-cubes')
os.makedirs(output_dir, exist_ok=True)

# List of product images to download
images = [
    ('veken', 'https://m.media-amazon.com/images/I/81GaAJkuWXL._AC_SL1500_.jpg'),
    ('shacke-pak', 'https://m.media-amazon.com/images/I/71nz382C3wL._AC_SL1500_.jpg'),
    ('peak-design', 'https://m.media-amazon.com/images/I/81-qSdJdTmL._AC_SL1500_.jpg'),
    ('paravel', 'https://m.media-amazon.com/images/I/71C-I-hWgAL._AC_SL1500_.jpg'),
    ('bagsmart', 'https://m.media-amazon.com/images/I/812eAHW9-XL._AC_SL1500_.jpg'),
    ('eagle-creek', 'https://m.media-amazon.com/images/I/71oF-N-zMHL._AC_SL1500_.jpg')
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for product_name, url in images:
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()

        output_path = os.path.join(output_dir, f'{product_name}.jpg')
        with open(output_path, 'wb') as f:
            f.write(response.content)
        print(f'Successfully downloaded {product_name}.jpg')
    except Exception as e:
        print(f'Error downloading {product_name}: {str(e)}')
