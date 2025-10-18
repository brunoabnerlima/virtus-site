/*
 * Script principal para o site Virtus Movelaria.
 * Este arquivo contém funções para:
 *  - Enviar dados do formulário de contato via WhatsApp com mensagem pré-formatada
 *  - Criar uma galeria lightbox para o portfólio, permitindo ampliar imagens
 */

// Função que é chamada ao submeter o formulário de contato. Monta uma mensagem
// contendo os dados fornecidos pelo usuário e abre o link de WhatsApp com o
// texto pré-preenchido.
function sendWhatsApp(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const ambiente = document.getElementById('ambiente').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  // Construir mensagem. Utilize encodeURIComponent para garantir caracteres válidos
  let text = `Olá! Meu nome é ${nome}. Gostaria de solicitar um orçamento para um projeto de ${ambiente}.`;
  if (telefone) text += ` Telefone: ${telefone}.`;
  if (email) text += ` E-mail: ${email}.`;
  if (cidade) text += ` Cidade: ${cidade}.`;
  if (mensagem) text += ` Detalhes adicionais: ${mensagem}.`;
  const url = `https://wa.me/5561999582383?text=${encodeURIComponent(text)}`;

  // Abrir o WhatsApp em nova aba
  window.open(url, '_blank');
}

// Função para iniciar a galeria lightbox. Adiciona event listeners aos itens
// do portfólio e define comportamentos de abrir/fechar.
function initLightbox() {
  const items = document.querySelectorAll('.portfolio-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-content img');
  const lightboxCaption = document.querySelector('.lightbox-content .caption');
  const closeBtn = document.querySelector('.lightbox-content .close');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.getAttribute('data-caption') || '';
      lightboxImg.src = img.src;
      lightboxCaption.textContent = caption;
      lightbox.classList.add('active');
    });
  });
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
}

// Ao carregar o documento, inicializar lightbox e adicionar listener ao formulário
document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', sendWhatsApp);
  }
});