# Site estático — Virtus Movelaria

Este pacote contém um **site pronto** (HTML, CSS, JS) com suas imagens e identidade visual.

## Como colocar no ar (método simples — GitHub + Vercel)

1. Crie uma conta no **GitHub** (github.com) e na **Vercel** (vercel.com).  
2. No GitHub, crie um repositório vazio chamado `virtus-site`.  
3. Faça upload de **todos os arquivos desta pasta** para o repositório (inclusive a pasta `assets`). Pelo próprio site do GitHub, você pode arrastar e soltar.
4. Na Vercel, clique em **“Add New…” → “Project”** e **importe** o repositório `virtus-site`.  
5. A Vercel vai detectar que é um **site estático** e publicar automaticamente. Você receberá um link público.

## Como usar seu domínio (ex.: virtusmovelaria.com.br)

1. Na Vercel, abra o projeto → guia **Domains** → **Add** e digite seu domínio.  
2. Siga as instruções de DNS que a Vercel mostrar (no Registro.br, ajuste os servidores/DNS).  
3. Aguarde a propagação (pode levar algumas horas). Depois disso, seu domínio apontará para o site.

## Onde editar

- **index.html**: texto, links e estrutura das seções.  
- **style.css**: cores e estilos. As cores da marca já estão configuradas (`#3C3C3B` e `#D3B76B`).  
- **script.js**: lógica do formulário que abre o WhatsApp.  
- **assets/img**: logos e imagens do portfólio. Você pode substituir ou adicionar novas imagens e criar novos blocos no HTML seguindo o mesmo padrão.

## Dica
Para adicionar novas fotos ao Portfólio, duplique um bloco dentro da `<div class="grid">` no `index.html`, atualize o título, a tag e o nome do arquivo da imagem.

— Feito com carinho para Virtus Movelaria.
