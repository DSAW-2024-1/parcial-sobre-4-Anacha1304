// Obtener referencia al botón y al área oculta
let showHiddenSectionButton = document.getElementById("q");
let hiddenSection = document.getElementById("r");

// Agregar evento click al botón
showHiddenSectionButton.addEventListener("click", function() {
    // Mostrar el área oculta cambiando su clase
    hiddenSection.classList.remove("hidden");
    // Desplazar la página hasta el área mostrada
    hiddenSection.scrollIntoView({ behavior: "smooth" });
});

