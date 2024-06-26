var click = false;

function apareceInfoEFI() {
    let p0 = document.getElementById("p0-alterado-EFI");
    p0.style.display = "none";
    let p1 = document.getElementById("p1-alterado-EFI");
    p1.style.display = "none";
    let infoFundamental1 = document.getElementById("info-efi");
    infoFundamental1.style.display = "block";
}




function desapareceInfoTb() {
    let p2 = document.getElementById("p2-alterado-EFII");
    p2.style.display = "";
    let p3 = document.getElementById("p3-alterado-EFII");
    p3.style.display = "";
    let infoFundamental2 = document.getElementById("info-efii");
    infoFundamental2.style.display = "none";
    let p4 = document.getElementById("p4-alterado-EM");
    p4.style.display = "";
    let p5 = document.getElementById("p5-alterado-EM");
    p5.style.display = "";
    let infoMedio = document.getElementById("info-em");
    infoMedio.style.display = "none";
}



function apareceTituloEFI() {
    let infoFundamental1 = document.getElementById("info-efi");
    infoFundamental1.style.display = "none";
    let p0 = document.getElementById("p0-alterado-EFI");
    p0.style.display = "";
    let p1 = document.getElementById("p1-alterado-EFI");
    p1.style.display = "";
}



function mostrarEFI() {
    click = !click;
    if (click === true) {
        apareceInfoEFI();
        desapareceInfoTb();
    } else {
        apareceTituloEFI();
    }
}



function apareceInfoEFII() {
    let p2 = document.getElementById("p2-alterado-EFII");
    p2.style.display = "none";
    let p3 = document.getElementById("p3-alterado-EFII");
    p3.style.display = "none";
    let infoFundamental2 = document.getElementById("info-efii");
    infoFundamental2.style.display = "block";
}




function desapareceInfoTa() {
    let p0 = document.getElementById("p0-alterado-EFI");
    p0.style.display = "";
    let p1 = document.getElementById("p1-alterado-EFI");
    p1.style.display = "";
    let infoFundamental1 = document.getElementById("info-efi");
    infoFundamental1.style.display = "none"; 
    let p4 = document.getElementById("p4-alterado-EM");
    p4.style.display = "";
    let p5 = document.getElementById("p5-alterado-EM");
    p5.style.display = "";
    let infoMedio = document.getElementById("info-em");
    infoMedio.style.display = "none";
}



function apareceTitulo() {
    let infoFundamental2 = document.getElementById("info-efii");
    infoFundamental2.style.display = "none";
    let p2 = document.getElementById("p2-alterado-EFII");
    p2.style.display = "";
    let p3 = document.getElementById("p3-alterado-EFII");
    p3.style.display = "";
}



function mostrarEFII() {
    click = !click;
    if (click === true) {
        apareceInfoEFII();
        desapareceInfoTa();
    } else {
        apareceTitulo();
    }  
}



function apareceInfoEM() {
    let p4 = document.getElementById("p4-alterado-EM");
    p4.style.display = "none";
    let p5 = document.getElementById("p5-alterado-EM");
    p5.style.display = "none";
    let infoMedio = document.getElementById("info-em");
    infoMedio.style.display = "block";
}



function desapareceTInfo() {
    let p2 = document.getElementById("p2-alterado-EFII");
    p2.style.display = "";
    let p3 = document.getElementById("p3-alterado-EFII");
    p3.style.display = "";
    let infoFundamental2 = document.getElementById("info-efii");
    infoFundamental2.style.display = "none";
    let p0 = document.getElementById("p0-alterado-EFI");
    p0.style.display = "";
    let p1 = document.getElementById("p1-alterado-EFI");
    p1.style.display = "";
    let infoFundamental1 = document.getElementById("info-efi");
    infoFundamental1.style.display = "none"; 
}



function desapareceClickEM() {
    let infoMedio = document.getElementById("info-em");
        infoMedio.style.display = "none";
        let p4 = document.getElementById("p4-alterado-EM");
        p4.style.display = "";
        let p5 = document.getElementById("p5-alterado-EM");
        p5.style.display = "";
}



function mostrarEM() {
    click = !click;
    if (click === true) {
        apareceInfoEM();
        desapareceTInfo();
    } else {
        desapareceClickEM();
    }
}




function apareceTodosInfoInterro() {
    let infoInterrogacaoEFI = document.getElementById("info-interrogacao-EFI");
        infoInterrogacaoEFI.style.display = "block";
        let infoInterrogacaoEFII = document.getElementById("info-interrogacao-EFII");
        infoInterrogacaoEFII.style.display = "block";
        let infoInterrogacaoEM = document.getElementById("info-interrogacao-EM");
        infoInterrogacaoEM.style.display = "block";
}




function desapareceInfoT() {
    let infoFundamental1 = document.getElementById("info-efi");
        infoFundamental1.style.display = "none"; 
        let infoFundamental2 = document.getElementById("info-efii");
        infoFundamental2.style.display = "none";
        let infoMedio = document.getElementById("info-em");
        infoMedio.style.display = "none";
}




function desapareceTodosT() {
    let p0 = document.getElementById("p0-alterado-EFI");
        p0.style.display = "none";
        let p1 = document.getElementById("p1-alterado-EFI");
        p1.style.display = "none";
        let p2 = document.getElementById("p2-alterado-EFII");
        p2.style.display = "none";
        let p3 = document.getElementById("p3-alterado-EFII");
        p3.style.display = "none";
        let p4 = document.getElementById("p4-alterado-EM");
        p4.style.display = "none";
        let p5 = document.getElementById("p5-alterado-EM");
        p5.style.display = "none";
}




function apareceTodosT() {
    let p0 = document.getElementById("p0-alterado-EFI");
        p0.style.display = "";
        let p1 = document.getElementById("p1-alterado-EFI");
        p1.style.display = "";
        let p2 = document.getElementById("p2-alterado-EFII");
        p2.style.display = "";
        let p3 = document.getElementById("p3-alterado-EFII");
        p3.style.display = "";
        let p4 = document.getElementById("p4-alterado-EM");
        p4.style.display = "";
        let p5 = document.getElementById("p5-alterado-EM");
        p5.style.display = "";
}




function desapareceTodosInfo() {
    let infoInterrogacaoEFI = document.getElementById("info-interrogacao-EFI");
        infoInterrogacaoEFI.style.display = "none";
        let infoInterrogacaoEFII = document.getElementById("info-interrogacao-EFII");
        infoInterrogacaoEFII.style.display = "none";
        let infoInterrogacaoEM = document.getElementById("info-interrogacao-EM");
        infoInterrogacaoEM.style.display = "none";
}




function infoTotal() {
    click = !click;
    if (click === true) {
        desapareceTodosT();
        desapareceInfoT();
        apareceTodosInfoInterro();
    } else {
        apareceTodosT();
        desapareceTodosInfo();
    }
}

