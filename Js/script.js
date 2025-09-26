// Ativar links do menu

const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLinks);

// Ativar itens do orçamento com : new URLSearchParams(location.search)

const parametros = new URLSearchParams(location.search);

function ativarParamentro(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarParamentro);

// Ativar Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", "true");
  console.log(resposta);
}
function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventoPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagen(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagen);
}

galeria.forEach(eventosGaleria);

// Ativar animações se script ativo no html

if (window.SimpleAnime) {
  new SimpleAnime();
}

const link = document.querySelectorAll(".header-menu a");
const logo_marca = document.querySelector(".header-img");

function mudarCorBordaLogo(event) {
  logo_marca.style.border = "solid 1px  rgba(0, 119, 181,0.2)";
  logo_marca.style.borderRadius = "100%";
}
function retornaCorBordaLogo(event) {
  logo_marca.style.border = "solid 2px #fff";
}
logo_marca.addEventListener("mouseover", mudarCorBordaLogo);
logo_marca.addEventListener("mouseout", retornaCorBordaLogo);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
