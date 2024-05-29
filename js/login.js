// Dados Exemplos
var users = [
    { nome: 'henrique@gmailexemplo.com', senha: '12345' },
    { nome: 'candinho@gmailexemplo.com', senha: '12345' },
    { nome: 'johann@gmailexemplo.com', senha: '12345' },
    { nome: 'nicolas@gmailexemplo.com', senha: '12345' },
];

// Função entrar 
function entrar() {
    const nomeUsuario = document.getElementById('input-nome').value;
    const senhaUsuario = document.getElementById('input-senha').value;
    const spanInvalidacaoNome = document.getElementById('span-invalido-nome');
    const spanInvalidacaoSenha = document.getElementById('span-invalido-senha');

    let usuarioValido = false;
    let senhaValida = false;

    for (let i = 0; i < users.length; i++) {
        if (nomeUsuario === users[i].nome) {
            usuarioValido = true;
        }
        if (senhaUsuario === users[i].senha) {
            senhaValida = true;
        }
        if (nomeUsuario === users[i].nome && senhaUsuario === users[i].senha) {
            // Redireciona para a página de menu se o usuário e senha estiverem corretos
            return window.location.href = 'menu.html';
        }
    }

    // Invalidação de dados 
    // span para mostrar os dados invalidos 
    if (!usuarioValido) {
        spanInvalidacaoNome.textContent = '*Nome de Úsuario Inválido!';
    } else {
        spanInvalidacaoNome.textContent = '';
    }

    if (!senhaValida) {
        spanInvalidacaoSenha.textContent = '*Senha de Úsuario Inválida!';
    } else {
        spanInvalidacaoSenha.textContent = '';
    }
}


function modoEscuro() {
    document.body.classList.toggle('dark-mode');
    const olhoModeElement = document.getElementById('olho-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    olhoModeElement.style.fill = isDarkMode ? '#fff' : 'black';

}


