from PIL import Image, ImageDraw, ImageFont
import os

def create_calpak_image():
    # Create directory if it doesn't exist
    output_dir = os.path.join(os.path.expanduser('~'), 'repos', 'tech-nest-12-12', 'public', 'images', 'reviews', 'packing-cubes')
    os.makedirs(output_dir, exist_ok=True)

    # Create a new image with grey background
    width, height = 600, 400
    color = (128, 128, 128)
    image = Image.new("RGB", (width, height), color)

    # Add text
    draw = ImageDraw.Draw(image)
    text = "Calpak"
    text_color = (255, 255, 255)

    # Calculate text position (center)
    text_bbox = draw.textbbox((0, 0), text)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2

    # Draw the text
    draw.text((x, y), text, fill=text_color)

    # Save the image
    output_path = os.path.join(output_dir, "calpak.jpg")
    image.save(output_path, "JPEG", quality=95)
    print(f"Created {output_path}")

if __name__ == "__main__":
    create_calpak_image()
