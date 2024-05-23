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

    for (let i = 0; i < users.length; i++) {
        if (nomeUsuario === users[i].nome && senhaUsuario === users[i].senha) {
            // Redireciona para a página de menu se o usuário e senha estiverem corretos
            return window.location.href = 'aprender.html';
        }
    }
    
    // Se não houver correspondência de usuário e senha, pode exibir uma mensagem de erro ou apenas retornar sem fazer nada
    // irei subtituir este alert
    alert("Usuário ou senha incorretos.");
}


function mais() {
    document.body.classList.toggle('dark-mode');
    const olhoModeElement = document.getElementById('olho-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    olhoModeElement.style.fill = isDarkMode ? '#fff' : 'black';

}


