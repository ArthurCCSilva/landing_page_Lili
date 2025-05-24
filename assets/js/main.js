document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind("[data-fancybox='gallery']", {
        loop: true, // Permite navegar continuamente na galeria
        arrows: true, // Ativa setas para avançar e voltar
        buttons: ["zoom", "slideShow", "thumbs", "close"]
    });
});