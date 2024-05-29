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

function checarTelaQuatro() {
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const regTelefone = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/;

    let email = document.getElementById("input-email").value;
    let telefone = document.getElementById("input-telefone").value;

    return regEmail.test(email) && regTelefone.test(telefone);
}

function senhaEhForte(senha) {
    console.log("Farei depois");
    return true;
}

function checarTelaCinco() {
    let senha = document.getElementById("input-senha").value;
    let senhaConfirmada = document.getElementById("input-senha_confirmada").value;


    return senha != "" && senha == senhaConfirmada;
}

function gerarErro() { console.log("GERANDO ERRO") }

function passarPagina() { //função para passar de página 
    window.location.href.includes("cadastroUm.html") && checarTelaUm() ? window.location.href = "cadastroDois.html" : gerarErro();
    window.location.href.includes("cadastroDois.html") && checarTelaDois() ? window.location.href = "cadastroTres.html" : gerarErro();

    window.location.href.includes("cadastroQuatro.html") && checarTelaQuatro() ? window.location.href = "cadastroCinco.html" : gerarErro();
    window.location.href.includes("cadastroCinco.html") && checarTelaCinco() ? window.location.href = "cadastroConfirmado.html" : gerarErro();
    window.location.href.includes("cadastroConfirmado.html") ? window.location.href = "login.html" : gerarErro();
}