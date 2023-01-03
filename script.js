//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const inputTexto = document.querySelector(".input_content");
const message = document.querySelector(".message");
const btnCopiar = document.getElementById("copyId");

function btnEncriptar () {
    const textoEncriptado = encriptar(inputTexto.value);
    message.value = textoEncriptado;
    message.style.backgroundImage = "none";
    inputTexto.value = "";
    message.textContent = "";
};

function encriptar (_stringEncriptada){
    let matrixCode = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        _stringEncriptada = _stringEncriptada.toLowerCase();
    
    for (let i = 0; i < matrixCode.length; i++) {
        if(_stringEncriptada.includes(matrixCode[i][0])) {
                _stringEncriptada = _stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
            }   
        }
        return _stringEncriptada
    };

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(inputTexto.value);
    message.value = textoDesencriptado,
    inputTexto.value = "";
    message.style.backgroundImage ="none";
};

function desencriptar (_stringEncriptada) {
    let matrixCode = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        _stringEncriptada = _stringEncriptada.toLowerCase();

    for (let i = 0; i < matrixCode.length; i++) {
        if (_stringEncriptada.includes(matrixCode[i][0])) {
                    _stringEncriptada =_stringEncriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return _stringEncriptada
};

btnCopiar.addEventListener("click", function (e) {
    message.select()
    navigator.clipboard.writeText(message.value)
    message.value = ""
    message.style.backgroundImage = ""
    alert("Texto copiado exitosamente")
});

//Verificar lo digitado
function inputverificar() {
    var inputPalabra = document.querySelector(".input_content");
    inputPalabra.addEventListener("keypress", function (e) {
      var keyCode = (e.keyCode ? e.keyCode : e.which);
  
      if (keyCode > 47 && keyCode < 65) {
        e.preventDefault();
      }
    });
};