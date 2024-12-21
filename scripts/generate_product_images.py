import os
from PIL import Image, ImageDraw, ImageFont
import textwrap

def create_product_image(product_name, features, output_path):
    # Create a white background image
    width = 800
    height = 600
    image = Image.new('RGB', (width, height), 'white')
    draw = ImageDraw.Draw(image)

    try:
        # Try to load a font, fallback to default if not available
        font_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
        font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Add product name
    wrapped_text = textwrap.fill(product_name, width=25)
    draw.text((width/2, 100), wrapped_text, font=font_large, fill='black', anchor="mm")

    # Add features
    y_position = 250
    for feature in features:
        wrapped_feature = textwrap.fill(feature, width=40)
        draw.text((width/2, y_position), wrapped_feature, font=font_small, fill='#4B5563', anchor="mm")
        y_position += 50

    # Add border with site's cyan accent color
    draw.rectangle([(20, 20), (width-20, height-20)], outline='#0891B2', width=4)

    # Save the image
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    image.save(output_path, 'JPEG', quality=95)

# Product data
products = [
    {
        "name": "Veken Packing Cubes With Laundry and Shoe Bag",
        "features": ["6-Piece Set", "Water-resistant Nylon", "Mesh Top Panel"],
    },
    {
        "name": "Shacke Pak 5 Set Packing Cubes",
        "features": ["5-Piece Set", "X-Design Reinforcement", "YKK Zippers"],
    },
    {
        "name": "Peak Design Packing Cubes",
        "features": ["Weatherproof Nylon", "Tear-Away Zippers", "Compression Design"],
    },
    {
        "name": "Paravel Packing Cube Quad",
        "features": ["Eco-Certified Materials", "Water-resistant", "Compression System"],
    },
    {
        "name": "Calpak Packing Cubes 5-Piece Set",
        "features": ["5-Piece Set", "Water-resistant Nylon", "Mesh Panels"],
    },
    {
        "name": "Bagsmart Compression Packing Cubes",
        "features": ["Compression System", "Ripstop Fabric", "Double Zippers"],
    },
    {
        "name": "Eagle Creek Specter Compression Cube",
        "features": ["Ultra-lightweight", "Water-repellent", "Compression Zipper"],
    },
]

# Generate images
output_dir = "/home/ubuntu/repos/tech-nest-12-12/public/images/reviews/packing-cubes/products"
for product in products:
    filename = product["name"].lower().replace(" ", "-") + ".jpg"
    output_path = os.path.join(output_dir, filename)
    create_product_image(product["name"], product["features"], output_path)
