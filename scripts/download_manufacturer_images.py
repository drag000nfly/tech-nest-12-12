import os
import requests
from urllib.parse import urlparse
import time

# Product image URLs from manufacturer websites
PRODUCT_IMAGES = {
    'veken': 'https://www.vekenliving.com/cdn/shop/products/veken-6-set-packing-cubes.jpg',
    'peak-design': 'https://www.peakdesign.com/cdn/shop/products/PD-Travel-PC-SM-CH-1_800x.jpg',
    'paravel': 'https://www.tourparavel.com/cdn/shop/products/Packing-Cube-Quad_Scuba-Navy_01.jpg',
    'calpak': 'https://www.calpaktravel.com/cdn/shop/products/5PiecePackingCubeSet_Milk_01.jpg',
    'eagle-creek': 'https://www.eaglecreek.com/cdn/shop/products/EC0A48XU_Specter_Tech_Compression_Cube_Set_White_Front.jpg',
    'bagsmart': 'https://www.bagsmarttravel.com/cdn/shop/products/compression-packing-cubes-set.jpg',
    'shacke-pak': 'https://shackepak.com/cdn/shop/products/shacke-pak-5-set-packing-cubes.jpg'
}

def download_image(url, product_name):
    """Download image from URL and save it with proper name"""
    output_dir = '/home/ubuntu/repos/tech-nest-12-12/public/images/reviews/packing-cubes/products'
    os.makedirs(output_dir, exist_ok=True)

    try:
        # Add user agent to avoid blocking
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        # Save image
        filename = f"{product_name}.jpg"
        output_path = os.path.join(output_dir, filename)

        with open(output_path, 'wb') as f:
            f.write(response.content)

        print(f"Successfully downloaded {filename}")

        # Be nice to servers
        time.sleep(2)

    except Exception as e:
        print(f"Error downloading {product_name}: {str(e)}")

def main():
    """Download all product images"""
    for product_name, url in PRODUCT_IMAGES.items():
        print(f"Downloading {product_name}...")
        download_image(url, product_name)

if __name__ == "__main__":
    main()
