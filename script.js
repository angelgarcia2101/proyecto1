var button;
console.warn('button', button)

console.log("document", document)
function cambiar_Color(){
    button = document.querySelector(".button-change-color");
    console.log("button", button)
    button.addEventListener("click", function(){
        console.log("me Hicieron click")
        var texto = document.querySelector(".texto-principal");
        console.log("texto", texto.style.color);
        texto.style.color = "purple";
        console.log("tamaletra", texto.style)
        texto.style.fontSize = "20px"
    })
}
cambiar_Color();