import json
import re

# 1. Update pecas.json
json_path = 'c:/Users/lucio/BRECHOWEBSITE/data/pecas.json'
with open(json_path, 'r', encoding='utf-8') as f:
    pecas = json.load(f)

for peca in pecas:
    if 'preco' in peca:
        del peca['preco']

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(pecas, f, indent=2, ensure_ascii=False)


# 2. Update index.html
html_path = 'c:/Users/lucio/BRECHOWEBSITE/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Header CTA
html = re.sub(
    r'<a[^>]*href="https://wa\.me/5531984032616\?text=[^>]*"[^>]*class="btn-whatsapp-nav"[^>]*>.*?WhatsApp\s*</a>',
    r'<a href="tel:+5531984032616" class="btn-whatsapp-nav" style="background:var(--cor-texto);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-right:8px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>(31) 8403-2616</a>',
    html, flags=re.DOTALL
)

# Replace Hero Texts
html = html.replace('<h1 class="hero-title">Cada peça<br>tem uma <em>história</em>.</h1>', '<h1 class="hero-title">Cada peça<br>tem uma <em>história</em>.</h1>\n        <p style="font-family:var(--fonte-titulo); font-size:22px; margin-top:-10px; margin-bottom:15px; color:var(--cor-destaque);">Desde 2007</p>')
html = re.sub(
    r'<a[^>]*href="https://wa\.me/5531984032616\?text=[^>]*"[^>]*class="btn btn-outline"[^>]*>\s*Falar pelo WhatsApp\s*</a>',
    '<a href="tel:+5531984032616" class="btn btn-outline">Ligue para nós: 8403-2616</a>',
    html, flags=re.DOTALL
)

# Replace Sobre Texts
html = html.replace('<h2 id="sobre-titulo">O brechó feminino de <em>curadoria</em> na Savassi, BH.</h2>', '<h2 id="sobre-titulo">O brechó feminino de <em>curadoria</em> na Savassi, BH. <span style="display:block; font-size:20px; color:var(--cor-destaque); margin-top:8px;">Fazendo história desde 2007</span></h2>')
html = re.sub(
    r'<a[^>]*href="https://wa\.me/5531984032616\?text=[^>]*"[^>]*class="btn btn-secondary"[^>]*>\s*Falar sobre consignação\s*</a>',
    '<a href="tel:+5531984032616" class="btn btn-secondary">Agendar consignação: 8403-2616</a>',
    html, flags=re.DOTALL
)

# Replace Galeria Texts
html = re.sub(
    r'<a[^>]*href="https://wa\.me/5531984032616\?text=[^>]*"[^>]*class="btn btn-primary"[^>]*>\s*Perguntar no WhatsApp.*?\s*</a>',
    '<a href="tel:+5531984032616" class="btn btn-primary">Ligue: (31) 8403-2616 &rarr;</a>',
    html, flags=re.DOTALL
)

# Blog texts
html = html.replace('Nosso Jornal', 'Reflexões')
html = html.replace('blog-titulo">Histórias &amp; <em>Dicas</em>', 'blog-titulo"><em>Reflexões</em> de Garimpo')

# Como Funciona Whatsapp
html = html.replace('chame no WhatsApp.', 'ligue para nós.')

# Consignacao rules
html = html.replace('nós vendemos, e repassamos 50% para você, sem complicação', 'nós vendemos, e você recebe sua parte. Aceitamos roupas femininas limpas, em bom estado, e sapatos. Agende pelo telefone')
html = html.replace('Avaliamos juntas a qualidade', 'Agende seu horário por telefone, e avaliamos juntas a qualidade')
html = html.replace('quando vende, você recebe 50% do valor', 'quando vende, você recebe sua parte acordada')
html = html.replace('repasse 50% do valor', 'repasse acordado dependendo da peça')
html = html.replace('divisão 50/50', 'divisão combinada na avaliação')
html = html.replace('Quando a peça encontra uma nova dona, você recebe 50% do valor de venda', 'Quando a peça encontra uma nova dona, você recebe o valor combinado')

html = re.sub(
    r'<th>Divisão</th>.*?<td>50% para você.*?</td>',
    '', html, flags=re.DOTALL
)

# FAQ Consignacao
html = html.replace('Não é necessário agendar. Pode vir diretamente', 'Sim, é fundamental agendar antes pelo telefone (31) 8403-2616 para combinar a avaliação, onde analisaremos as peças. Venha')

# Consignacao CTA
html = re.sub(
    r'<a[^>]*href="https://wa\.me/5531984032616\?text=[^>]*"[^>]*class="btn btn-primary"[^>]*>\s*Quero consignar.*?</a>',
    '<a href="tel:+5531984032616" class="btn btn-primary">Agendar avaliação — (31) 8403-2616</a>',
    html, flags=re.DOTALL
)

# Footer/Contact
html = html.replace('WhatsApp: (31) 8403-2616', 'Telefone: (31) 8403-2616')
html = re.sub(
    r'<a[^>]*href="https://wa\.me/5531984032616"[^>]*>\s*WhatsApp\s*</a>',
    '<a href="tel:+5531984032616">Telefone (8403-2616)</a>',
    html, flags=re.DOTALL
)

# Floating WhatsApp to Floating Phone
html = re.sub(
    r'<a[^>]*href="https://wa\.me/5531984032616\?text=[^>]*"[^>]*class="whatsapp-float"[^>]*>.*?</a>',
    '<a href="tel:+5531984032616" class="whatsapp-float" style="background:var(--cor-texto);" aria-label="Ligar para o Brechó Outra Vez"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>',
    html, flags=re.DOTALL
)

# Map Update (Av Contorno 5690 - exact)
new_iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.4859062332155!2d-43.9377402!3d-19.9458277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699bc22363ad9%3A0xe53af7304f5e2cb8!2sAv.%20do%20Contorno%2C%205690%20-%20Savassi%2C%20Belo%20Horizonte%20-%20MG%2C%2030110-036!5e0!3m2!1spt-BR!2sbr!4v1714574900000!5m2!1spt-BR!2sbr" width="100%" height="420" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização do Brechó Outra Vez — Av. do Contorno 5690, Savassi, BH" aria-label="Mapa Google com localização do Brechó Outra Vez"></iframe>'

html = re.sub(
    r'<iframe[^>]*src="https://www\.google\.com/maps/embed[^"]*"[^>]*></iframe>',
    new_iframe,
    html
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated index.html and pecas.json successfully!")

# 3. Commit and push via GitHub CLI
import subprocess

subprocess.run(['git', 'add', 'data/pecas.json', 'index.html'], check=True)
subprocess.run([
    'git', 'commit', '-m',
    'feat: remove precos, substituir WhatsApp por telefone, atualizar textos consignacao e mapa'
], check=True)
subprocess.run(['gh', 'repo', 'sync', '--branch', 'master'], check=True)
print("Committed and synced to GitHub.")
