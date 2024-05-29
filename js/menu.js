function avalienos(){
    window.location.href = "https://play.google.com/store/apps/details?id=br.gov.sc.joinville.facil.twa&hl=pt_BR&gl=US&pli=1";
}

function atividades(){
    window.location.href = "aprender.html";
}

function sair(){
    window.location.href = "login.html";
}


function telaEscura(){
    document.body.classList.toggle('dark-mode');
    const olhoModeElement = document.getElementById('olho-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    olhoModeElement.style.fill = isDarkMode ? '#fff' : 'black';
}
