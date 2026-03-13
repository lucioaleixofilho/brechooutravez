import re

with open('c:/Users/lucio/BRECHOWEBSITE/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Facade to LOCALIZAÇÃO
facade_html = '''
        <div class="fachada-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px;">
            <img src="assets/images/fachada.jpg" alt="Fachada do Brechó Outra Vez" style="width:100%; border-radius: 4px;">
            <img src="assets/images/fachada2.jpg" alt="Interior da loja - Fachada" style="width:100%; border-radius: 4px;">
        </div>
'''
if 'assets/images/fachada.jpg' not in content:
    # Append after address inside the map container or nearby
    content = content.replace('</address>', '</address>' + facade_html)

# 2. Add GMB Social Proof section before Footer
gmb_photos = [
    'https://lh3.googleusercontent.com/p/AF1QipOyQ8U0ymJ6Nq0cy0r_AA7HTpDQARD-JEzDt6PT=s1000',
    'https://lh3.googleusercontent.com/p/AF1QipPWRES6jTw_U3tcATZo-BMoy32Pc0n4fYKMtdmy=s1000',
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepwGA8Vq3nPOJJkD4FlL3_L629E8NxVv8LVkXYy8TjAXdWKYq08ewwM1011HcOhBU1JoECxg_5RGdsXf99nmZE2Gk2milU2M7mJEncWlzDcSgylHSYJri5YMSM3OwlnvR1dbOiwWp_v4fWL=s1000',
    'assets/images/galeria/galeria-1.jpg',
    'assets/images/galeria/galeria-2.jpg'
]

img_tags = ""
for url in gmb_photos:
    img_tags += f'\n          <img src="{url}" alt="Foto de cliente" style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:4px; opacity:0.9; transition: opacity 0.3s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.9">'

gmb_section = f'''
    <!-- NOSSA COMUNIDADE -->
    <section id="comunidade" class="comunidade" style="padding: 72px 24px; background: var(--cor-fundo-alt);">
      <div class="container">
        <span class="label">Nossa Comunidade</span>
        <h2 style="font-family: var(--fonte-titulo); font-size: 34px; margin-bottom: 40px;">Visto por <em>vocês</em></h2>
        <div class="gmb-photos" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">{img_tags}
        </div>
        <p style="text-align: center; margin-top: 30px; color: var(--cor-texto-leve);">Visite-nos no Savassi e faça parte dessa história.</p>
      </div>
    </section>
'''

if 'id="comunidade"' not in content:
    content = content.replace('</main>', gmb_section + '\n  </main>')

with open('c:/Users/lucio/BRECHOWEBSITE/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated index.html successfully with facade and community sections.")
