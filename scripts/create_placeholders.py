from PIL import Image, ImageDraw
import os

# Create directory if it doesn't exist
output_dir = os.path.join(os.path.expanduser('~'), 'repos', 'tech-nest-12-12', 'public', 'images', 'reviews', 'packing-cubes')
os.makedirs(output_dir, exist_ok=True)

# List of products
products = [
    'veken',
    'shacke-pak',
    'peak-design',
    'paravel',
    'bagsmart',
    'eagle-creek'
]

def create_placeholder(product_name, output_path):
    # Create a new image with a grey background
    width = 600
    height = 400
    color = (128, 128, 128)  # Grey
    image = Image.new('RGB', (width, height), color)

    # Get a drawing context
    draw = ImageDraw.Draw(image)

    # Draw text in the center
    text = product_name.replace('-', ' ').title()

    # Calculate text size (approximate since we're using default font)
    text_width = len(text) * 20  # Rough estimate of text width
    text_height = 40  # Rough estimate of text height

    # Calculate center position
    x = (width - text_width) // 2
    y = (height - text_height) // 2

    # Draw the text
    draw.text((x, y), text, fill='white')

    # Save the image
    image.save(output_path, 'JPEG', quality=95)
    print(f'Created placeholder for {product_name}')

# Create placeholder images for each product
for product in products:
    output_path = os.path.join(output_dir, f'{product}.jpg')
    try:
        create_placeholder(product, output_path)
    except Exception as e:
        print(f'Error creating placeholder for {product}: {str(e)}')
