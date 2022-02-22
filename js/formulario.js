const formulario = document.querySelector("form");

console.log(formulario)

function formularioEnviado(res) {
  if (res.ok) {
    formulario.innerHTML = "<p class='font-2-l' style='grid-collumn: 1/-1; padding: 1rem; border-radius:4px; background: #f7f7f7;'><span style='color: #317a00'>Mensavem enviada</span>, em breve entraremos em contato </p>";
  } else {
    formulario.innerHTML = "<p class='font-2-l' style='grid-collumn: 1/-1; padding: 1rem; border-radius:4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net </p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  
  const botao = document.querySelector("form button");

  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);
  
  fetch("./enviar.php", {
    method: "POST",
    body: data
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario)