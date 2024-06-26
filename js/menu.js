function avalienos(){
    window.location.href = "https://play.google.com/store/apps/details?id=br.gov.sc.joinville.facil.twa&hl=pt_BR&gl=US&pli=1";
}

function quemSomos(){
    window.location.href = "quemSomos.html"
}

function atividades(){
    window.location.href = "categorias.html";
}

function sair(){
    window.location.href = "login.html";
}


function telaEscura(){
    const telaJaEscura = document.body.classList.contains('dark-mode');

    if(telaJaEscura) {
        document.getElementById('prefeitura-claro').style.display="block";
        document.getElementById('prefeitura-escuro').style.display="none";

    } else {
        document.getElementById('prefeitura-claro').style.display="none";
        document.getElementById('prefeitura-escuro').style.display="block";
    }
    document.body.classList.toggle('dark-mode');

    document.getElementById('olho-mode').style.fill = !telaJaEscura ? '#fff' : 'black';
    document.getElementById('lupa').style.stroke = !telaJaEscura ? '#fff' : 'black';
    document.getElementById('svg-usuario').style.stroke = !telaJaEscura ? '#fff' : 'black';
}
