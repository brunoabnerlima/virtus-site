function sendWhatsApp(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value);
  const phone = encodeURIComponent(form.phone.value);
  const message = encodeURIComponent(form.message.value || "");
  const url = `https://wa.me/5561999582383?text=Olá,%20sou%20${name}.%20Meu%20telefone:%20${phone}.%20${message}`;
  window.open(url, "_blank");
  return false;
}
