currentYear = new Date().getFullYear();
let texto = '';
let btnTexto = '';
let textoEncriptado = '';
let textoDesencriptado = '';

let encriptarMapa = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};
let desencriptarMapa = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u"
}; 
document.getElementById('current-year').textContent = currentYear;

function activarBoton() {
    document.getElementById('copiar').style.display = 'block';
}

function contieneVocalesConAcentos(texto) {
    return /[áéíóúÁÉÍÓÚ]/.test(texto);
}

function validarTexto(texto, btnTexto) {
    info = btnTexto === 'Encriptar' ? 'encriptar' : 'desencriptar';
    if(texto === '') {
        alert(`No hay información para ${info}, ingresa un texto`);
        return false;
    } else if (contieneVocalesConAcentos(texto)) {
        alert('El texto no debe contener vocales con acentos.');
        return false;
    } else {
        return true;
    }
}

function leerTexto() {
    if(document.getElementById('input_texto').value === '') {
        return document.getElementById('input_texto').value = '';
    } else {
        texto = document.getElementById('input_texto').value.toLowerCase();
        document.getElementById('input_texto').value = '';
        return texto;
    }
}

function encriptar() {
    btnTexto = document.getElementById('encriptar').textContent; 
    texto = leerTexto(); 
    if (!validarTexto(texto, btnTexto)) {
        return;
    }

    for (let vocal in encriptarMapa) {
        if (encriptarMapa.hasOwnProperty(vocal)) {
            texto = texto.replace(new RegExp(vocal, 'g'), encriptarMapa[vocal]);
        } 
    }
    textoEncriptado = texto;
    document.getElementById('texto_desencriptado').innerHTML = textoEncriptado;
    activarBoton();
}

function desencriptar() {
    btnTexto = document.getElementById('desencriptar').textContent; 
    texto = leerTexto(); 
    if (!validarTexto(texto, btnTexto)) {
        return;
    }

    for (let vocal in desencriptarMapa) {
        if (desencriptarMapa.hasOwnProperty(vocal)) {
            texto = texto.replace(new RegExp(vocal, 'g'), desencriptarMapa[vocal]);
        } 
    }
    textoDesencriptado = texto;
    document.getElementById('texto_desencriptado').innerHTML = textoDesencriptado;
    activarBoton();
}

function copiar() {
    let texto = document.getElementById('texto_desencriptado').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        console.log("Texto copiado en el portapapeles");
    }).catch(err => {
        console.error("Error al copiar texto: ", err);
    });
}