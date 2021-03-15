let nomeModal = window.document.getElementById("nomeModal")
let emailModal = document.querySelector("#emailModal")
let assuntoModal = document.querySelector("#assuntoModal")
let nomeModalOk = false
let emailModalOk = false
let assuntoModalOk = false
let mapa = document.querySelector("#mapa")

let meuModal = document.querySelector("#meuModal")

nomeModal.style.width = "100%"
emailModal.style.width = "100%"

function validanomeModal() {
    let txtnomeModal = document.querySelector("#txtnomeModal")
    if(nomeModal.value.length < 3) {
        txtnomeModal.innerHTML = "nomeModal inválido"
        txtnomeModal.style.color = "red"
        let nomeModalOk = false
    } else {
        txtnomeModal.innerHTML = "nomeModal Válido"
        txtnomeModal.style.color = "green"
        nomeModalOk = true
    }
}

function validaemailModal() {
    let txtemailModal = document.querySelector("#txtemailModal")
    if(emailModal.value.indexOf("@") == -1 || emailModal.value.indexOf(".") == -1) {
        txtemailModal.innerHTML = "E-mail Inválido!"
        txtemailModal.style.color = "red"
        let emailModalOk = false
    } else {
        txtemailModal.innerHTML = "E-mail Válido"
        txtemailModal.style.color = "green"
        emailModalOk = true
    }
}

function validaassuntoModal() {
    let txtassuntoModal = document.querySelector("#txtassuntoModal")
    if(assuntoModal.value.length >= 100) {
        txtassuntoModal.innerHTML = "Texto é muito grande, digite ao maximo 100 caracteres"
        txtassuntoModal.style.color = "red"
        txtassuntoModal.style.display = "block"
        let assuntoModalOk = false
    } else {
        txtassuntoModal.style.display = "none"
        assuntoModalOk = true
    }
}

function enviar() {
    if(nomeModalOk == true && emailModalOk == true && assuntoModalOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")  
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

function model(){
    keyboard = 'true';
    backdrop = 'static';

}

$("html").mouseover(function() {
    $("html").getNiceScroll().resize();
});

