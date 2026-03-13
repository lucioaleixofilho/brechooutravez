import PIL.Image as Image
import os

img_dir = 'c:/Users/lucio/BRECHOWEBSITE/assets/images/'
files = ['fachada.png', 'fachada2.png']

for f in files:
    path = os.path.join(img_dir, f)
    if os.path.exists(path):
        img = Image.open(path)
        # Convert to RGB if it has alpha channel
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        new_name = f.replace('.png', '.jpg')
        img.save(os.path.join(img_dir, new_name), 'JPEG', quality=85)
        print(f'Converted {f} to {new_name}')
        # Delete original png to keep it clean
        os.remove(path)
    else:
        print(f'File {f} not found.')
