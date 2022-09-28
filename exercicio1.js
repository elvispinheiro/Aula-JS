// questão 2 
exerc1 = document.querySelector(".square");
exerc1.style.backgroundColor = "#fdd";


// questao 3 
parag = document.querySelector("#resolution2 .square");
parag.innerHTML = "<p>texto do pararafo</p>";
parag.style.textAlign = "left";

// questao4

quadrados = document.querySelector("#resolution1, #resolution2");
quadrados.onmouseover = function(){
    quadrados.style.border = "solid", "2px", "black";
    console.log("ooo")
};

