var formulario = document.querySelector("form");

formulario.addEventListener("submit", manejarDatos);

function manejarDatos(event){
    event.preventDefault();
    var form = new FormData(this);
    console.log("Nombre completo: ", form.get("name"));
    console.log("Correo electrónico: ", form.get("email"));
    console.log("Asunto: ", form.get("issue"));
    console.log("Mensaje: ", form.get("messaje"));
}