var setadireita = window.document.getElementById("seta-direita")
var Bruna = window.document.getElementById("bruna")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
     Bruna.style ="display:none"
     Samantha.style ="display:flex; padding-right: 120px"
     setadireita.style ="display:none"
     setaesquerda.style ="display:flex; margin-top: 120px;"
}

function RolarParaEsquerda() {
     Samantha.style ="display:none"
     Bruna.style ="display:flex;"
     setaesquerda.style ="display:none"
     setadireita.style ="display:flex"
}