// alert("Olá, vim do js externo!");
var mensagem = document.querySelector("#mensagem");
// document.querySelector("#mensagem").innerHTML="oi";
// console.log(mensagem);
mensagem.innerHTML = "Oi";
mensagem.style.height = "200px";
mensagem.style.width = "200px";
mensagem.style.backgroundColor = "red";
mensagem.style.color = "black";
mensagem.style.fontSize = "100px";
mensagem.style.borderRadius = "200px";
mensagem.style.border = "solid", "10px", "black";
mensagem.style.margin = "20px";

var botao = document.querySelector(".btn");

botao.setAttribute("disabled", "disabled");

botao.removeAttribute("disabled");

botao.classList.add("btn-danger");

botao.classList.remove("btn-danger");

console.log(botao.classList.contains("btn-danger"));

botao.onclick = function () {
    var mensagem2 = document.querySelector("#mensagem2");
    mostrarMensagem("Você clicou no botao", mensagem2);
};

mensagem.onmouseover = function () {
    mensagem.style.backgroundColor = "blue";
    mostrarMensagem("você passou o mouse", mensagem);
};

function mostrarMensagem(textoDaMensagem = "olá", elemento){
    elemento.innerHTML = textoDaMensagem;
}





