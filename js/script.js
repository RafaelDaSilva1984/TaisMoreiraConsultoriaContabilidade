const links = document.querySelectorAll(".header-menu a");
const logo_marca = document.querySelector(".header-img");

function mudarCorBordaLogo(event) {
  logo_marca.style.border = "solid 1px  rgba(0, 119, 181,0.2)";
  logo_marca.style.borderRadius = "5rem";
}
function retornaCorBordaLogo(event) {
  logo_marca.style.border = "solid 2px #fff";
}
logo_marca.addEventListener("mouseover", mudarCorBordaLogo);
logo_marca.addEventListener("mouseout", retornaCorBordaLogo);
