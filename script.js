function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add a imagem light
    img.setAttribute("src", "assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Fábio Maciel, de terno preto, com fundo roxo"
    )
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Fábio Maciel, de terno preto, com fundo amarelo"
    )
  }
}
