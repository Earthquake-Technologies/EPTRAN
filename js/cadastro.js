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

function checarPermissoes() { // função para identificar tela para armazenar dados
    if (window.location.href.includes("cadastroUm.html")) { return checarTelaUm() };
}

function gerarErro() { console.log("GERANDO ERRO") }

function passarPagina() { //função para passar de página 
    window.location.href.includes("cadastroUm.html") && checarPermissoes() ? window.location.href = "cadastroDois.html" : gerarErro();
}