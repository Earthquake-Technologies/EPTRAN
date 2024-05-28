/*
function checarSenhaIgual() {
    return document.getElementById('senha').value === document.getElementById('senha-confirmar');
}


function passarCadastro() {
    if(!checarSenhaIgual()) {
        return false;
    }
    // Passa para as próximas perguntas
}

*/


// TO DO:  imprementar BD

function checarTelaUm(){  //funcao para identificar valores HTML e garantir que estão preenchidos
    let nome = document.getElementById("input-nome").value;
    let idade = document.getElementById("input-idade").value;

    return idade > 0 && idade < 120 && nome != "";
}

function checarTelaDois() {
    let estado = document.getElementById("input-estado");
    estado = estado.options[estado.selectedIndex].value;
    let cidade = document.getElementById("input-cidade").value;

    return estado != "" && cidade != "";
}

function checarPermissoes() { // função para identificar tela para armazenar dados
    if (window.location.href.includes("cadastroUm.html")) { return checarTelaUm() };
    if (window.location.href.includes("cadastroDois.html")) { return checarTelaDois() };
}

function gerarErro() { console.log("GERANDO ERRO") }

function passarPagina() { //função para passar de página 
    window.location.href.includes("cadastroUm.html") && checarPermissoes() ? window.location.href = "cadastroDois.html" : gerarErro();
    window.location.href.includes("cadastroDois.html") && checarPermissoes() ? window.location.href = "cadastroTres.html" : gerarErro();
}