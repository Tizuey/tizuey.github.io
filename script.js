/* =========================================================
   Tizuey | Link na Bio
   Duas tarefas pequenas. O site continua funcionando sem este arquivo.
   1) Mostrar a foto de perfil, se o arquivo existir.
   2) Marcar eventos que já passaram, usando data-fim="AAAA-MM-DD".
   ========================================================= */

(function () {
  "use strict";

  /* 1) Foto opcional: assets/foto-perfil.png */
  var figura = document.getElementById("foto");
  var imagem = document.getElementById("foto-img");

  if (figura && imagem) {
    var teste = new Image();
    teste.onload = function () {
      imagem.src = teste.src;
      figura.hidden = false;
    };
    // Se o arquivo não existir, nada acontece e a foto fica escondida.
    teste.src = "assets/foto-perfil.png";
  }

  /* 2) Eventos passados */
  var hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  var eventos = document.querySelectorAll(".evento[data-fim]");

  eventos.forEach(function (evento) {
    var partes = evento.getAttribute("data-fim").split("-");
    if (partes.length !== 3) return;

    // Mês começa em 0 no JavaScript, por isso o "- 1"
    var fim = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
    if (isNaN(fim.getTime())) return;

    if (fim < hoje) {
      evento.classList.add("passou");

      var aviso = document.createElement("span");
      aviso.className = "aviso-passou";
      aviso.textContent = "A data já passou";

      var categoria = evento.querySelector(".categoria");
      if (categoria) categoria.insertAdjacentElement("afterend", aviso);
    }
  });
})();
