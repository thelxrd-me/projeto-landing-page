var setaDireita = window.document.getElementById("seta-direira")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:45px"
}

function RolarParaEsquerda() {
    bruna.style ="display:none"
    leonardo.style ="display:flex"
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex margin-top:45px"
}