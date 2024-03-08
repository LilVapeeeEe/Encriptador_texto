

function encriptar() {
    const texto = document.getElementById('texto').value.toLowerCase(); 
    const textoEncriptado = cifrarTexto(texto, true);
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const texto = document.getElementById('texto').value.toLowerCase();
    const textoDesencriptado = cifrarTexto(texto, false);
    mostrarResultado(textoDesencriptado);
}

function cifrarTexto(texto, encriptar) {
    let resultado;
    const munieco = document.getElementById('munieco')
    munieco.style.display = 'none'
    const disclaimer = document.getElementById('disclaimer')
    disclaimer.style.display = 'none'
    const areaEncriptado = document.getElementById('texto-encriptado');
    if(encriptar){ 
        resultado = texto
            .replace(/e/gi,"enter") 
            .replace(/i/gi,"imes") 
            .replace(/a/gi,"ai") 
            .replace(/u/gi,"ufat") 
            .replace(/o/gi,"ober");
    } else {
        resultado = texto
            .replace(/enter/gi,"e") 
            .replace(/imes/gi,"i") 
            .replace(/ai/gi,"a")
            .replace(/ufat/gi,"u") 
            .replace(/ober/gi,"o");
    }
    return resultado;
}


function mostrarResultado(texto) {
    const areaEncriptado = document.getElementById('texto-encriptado');
    areaEncriptado.value = texto;
    areaEncriptado.style.display = 'block'
    if (texto) {
        document.getElementById('titulo-mensaje').textContent = "";
        document.querySelector('.btn-copiar').disabled = false;
    } else {
        document.getElementById('titulo-mensaje').textContent = "";
    }
    if(texto.length == 0){
        munieco.style.display = 'inline-block'
        disclaimer.style.display = 'inline-block'
        areaEncriptado.style.display = 'none'
        document.getElementById('titulo-mensaje').textContent = "No se encontro ningun texto";
        alert("Porfavor ingrese un texto");
    }

}

function copiar() {
    const textoEncriptado = document.getElementById('texto-encriptado');
    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoEncriptado.value).then(() => {
    }).catch((err) => {
        console.error('Error al copiar el texto: ', err);
    });
}