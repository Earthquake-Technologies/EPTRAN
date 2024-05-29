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

//Funções para identificar valores HTML e garantir que estão preenchidos

function checarTelaUm(){  
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

function checarTelaTres() {
    let escola = document.getElementById("input-escola").value;
    let escolaridade = document.getElementById("input-escolaridade");
    escolaridade = escolaridade.options[escolaridade.selectedIndex].value;

    return escola != "" && escolaridade != 120;
}

// Essa função compara o valor dado pelo usuário com uma expressão regular para validar os dados
function checarTelaQuatro() {
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const regTelefone = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/;

    let email = document.getElementById("input-email").value;
    let telefone = document.getElementById("input-telefone").value;

    return regEmail.test(email) && regTelefone.test(telefone);
}

// Função auxiliar à "senhaEhForte()", serve para verificar se a senha tem todos os caracteres necessários
function segueEspecificacoes(senha) {
    const letrasMaiusculas = /[A-Z]/;
    const letrasMinusculas = /[a-z]/; 
    const numeros = /[0-9]/;
    const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    let temMaiusculas = false;
    let temMinusculas = false; 
    let temNumeros = false;
    let temCaracteresEspeciais = false;

    for (let i = 0; i < senha.length; i++) {
        if(!temMaiusculas && letrasMaiusculas.test(senha[i])) { temMaiusculas = true; }
        if(!temMinusculas && letrasMinusculas.test(senha[i])) { temMinusculas = true; }
        if(!temNumeros && numeros.test(senha[i])) { temNumeros = true; }
        if(!temCaracteresEspeciais && caracteresEspeciais.test(senha[i])) { temCaracteresEspeciais = true; }

        if(temMaiusculas && temMinusculas && temNumeros && temCaracteresEspeciais) { return true; }
        
    }

    return false;
}

// Função auxiliar à "checarTelaCinco()" para verificar a segurança da senha
function senhaEhForte(senha, senhaConfirmada) {
    if (senha != senhaConfirmada) { return false; }
    if (senha.lenght < 8) { return false; }
    if (!segueEspecificacoes(senha)) { return false; }

    return true;
}

function checarTelaCinco() {
    let senha = document.getElementById("input-senha").value;
    let senhaConfirmada = document.getElementById("input-senha_confirmada").value;

    return senhaEhForte(senha, senhaConfirmada);
}

function checarPermissoes() { // função para identificar tela para armazenar dados
    if (window.location.href.includes("cadastroUm.html")) { return checarTelaUm() };
    if (window.location.href.includes("cadastroDois.html")) { return checarTelaDois() };
    if (window.location.href.includes("cadastroTres.html")) { return checarTelaTres() };
}

function gerarErro() { console.log("GERANDO ERRO") }

function passarPagina() { //função para passar de página 
    window.location.href.includes("cadastroUm.html") && checarTelaUm() ? window.location.href = "cadastroDois.html" : gerarErro();
    window.location.href.includes("cadastroDois.html") && checarTelaDois() ? window.location.href = "cadastroTres.html" : gerarErro();
    window.location.href.includes("cadastroTres.html") && checarPermissoes() ? window.location.href = "cadastroQuatro.html" : gerarErro();
    window.location.href.includes("cadastroQuatro.html") && checarTelaQuatro() ? window.location.href = "cadastroCinco.html" : gerarErro();
    window.location.href.includes("cadastroCinco.html") && checarTelaCinco() ? window.location.href = "cadastroConfirmado.html" : gerarErro();
    window.location.href.includes("cadastroConfirmado.html") ? window.location.href = "login.html" : gerarErro();
}