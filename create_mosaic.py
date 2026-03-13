from PIL import Image
import os
import random

def create_mosaic():
    output_path = 'c:/Users/lucio/BRECHOWEBSITE/assets/images/hero/hero.jpg'
    source_dir = 'c:/Users/lucio/BRECHOWEBSITE/assets/images/galeria'
    
    # Get all jpgs
    images = [f for f in os.listdir(source_dir) if f.endswith('.jpg')]
    if len(images) < 4:
        print("Not enough images for mosaic.")
        return
        
    # shuffle and pick 9 images
    random.shuffle(images)
    selected = images[:9]
    
    # Target size for the hero image
    w, h = 1920, 1080
    bg = Image.new('RGB', (w, h), (250, 249, 247)) # var(--cor-fundo)
    
    # We will create a 3x3 grid
    cell_w = w // 3
    cell_h = h // 3
    
    idx = 0
    for i in range(3):
        for j in range(3):
            if idx >= len(selected):
                break
            img_path = os.path.join(source_dir, selected[idx])
            try:
                img = Image.open(img_path)
                
                # Crop to cell size
                img_ratio = img.width / img.height
                cell_ratio = cell_w / cell_h
                
                if img_ratio > cell_ratio:
                    new_w = int(img.height * cell_ratio)
                    left = (img.width - new_w) // 2
                    img = img.crop((left, 0, left + new_w, img.height))
                else:
                    new_h = int(img.width / cell_ratio)
                    top = (img.height - new_h) // 2
                    img = img.crop((0, top, img.width, top + new_h))
                    
                img = img.resize((cell_w, cell_h), Image.Resampling.LANCZOS)
                bg.paste(img, (j * cell_w, i * cell_h))
                
            except Exception as e:
                print(f"Error processing {img_path}: {e}")
            idx += 1
            
    # Apply a slight vintage color overlay to match vibe
    overlay = Image.new('RGBA', (w, h), (139, 28, 36, 40)) # soft red tint
    bg = bg.convert('RGBA')
    bg = Image.alpha_composite(bg, overlay)
    
    bg = bg.convert('RGB')
    bg.save(output_path, quality=85)
    print("Hero mosaic created successfully!")

if __name__ == '__main__':
    create_mosaic()
