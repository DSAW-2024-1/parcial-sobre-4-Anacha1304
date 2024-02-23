
/*let showHiddenSectionButton = document.getElementById("q");
let hiddenSection = document.getElementById("r");


showHiddenSectionButton.addEventListener("click", function() {
    hiddenSection.classList.remove("hidden");
    hiddenSection.scrollIntoView({ behavior: "smooth" });
});*/

// Función para mostrar la sección "Success-tab"
function showSuccessTab() {
    let successTab = document.getElementById("Success-tab");
    successTab.classList.remove("hidden");
}

function dhowSuccessTab() {
    let mainSection = document.getElementById("mainSection");
    let successTab = document.getElementById("Success-tab");
    
    mainSection.classList.remove("hidden");
    successTab.classList.add("hidden");
}
// Función para ocultar la sección "Success-tab"
function hideSuccessTab() {
    let successTab = document.getElementById("Success-tab");
    successTab.classList.add("hidden");
}

// Obtener referencia al botón "Success" y agregar evento click
document.getElementById("Success").addEventListener("click", showSuccessTab);

// Obtener referencia al botón "Dismiss" y agregar evento click
document.getElementById("Dismiss").addEventListener("click", hideSuccessTab);


