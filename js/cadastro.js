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


let permissao = false;

function checarPermissoes() {
    switch (document.URL){
        case document.URL.includes("cadastroUm.html"):
            checarPermissaoTelaUm();
            break;
        case document.URL.includes("cadastroDois.html"):
            checarPermissaoTelaDois();
            break;
        case document.URL.includes("cadastroTres.html"):
            checarPermissaoTelaTres();
            break;
        case document.URL.includes("cadastroQuatro.html"):
            checarPermissaoTelaQuatro();
            break;
        case document.URL.includes("cadastroCinco.html"):
            checarPermissaoTelaCinco();
            break;
    }
}

function passarPagina() { //função para passar de página
    if  (checarPermissoes()){  
        switch (document.URL){
            case document.URL.includes("cadastroUm.html"):
                window.location.href = "cadastroDois.html";
                break;
            case document.URL.includes("cadastroDois.html"):
                window.location.href = "cadastroTres.html";
                break;
            case document.URL.includes("cadastroTres.html"):
                window.location.href = "cadastroQuatro.html";
                break;
            case document.URL.includes("cadastroQuatro.html"):
                window.location.href = "cadastroCinco.html";
                break;
            case document.URL.includes("cadastroCinco.html"):
                window.location.href = "login.html";
                break;
        }
    } //caso ele tiver permissão (os valores do cadastro estão válidos, ele troca para a página seguinte)
}