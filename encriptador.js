


function botonEncriptar(){
    //Obtenemos el texto a encriptar
    let texto = document.getElementById('mensaje').value;
    //verificamos que el input sea correcto, en caso de serlo lo mandamos a una funcion para que realice  la operacion y nos devuelva el resultado
    //En caso contrario mostramos una alerta para que el usuario revise la entrada
    esCorrecto(texto) ? encripta(texto): alert('incorrecto')
}

function botonDesencriptar(){
//Obtenemos el texto a desencriptar
let texto = document.getElementById('mensaje').value;
//verificamos que el input sea correcto, en caso de serlo lo mandamos a una funcion para que realice  la operacion y nos devuelva el resultado
//En caso contrario mostramos una alerta para que el usuario revise la entrada
esCorrecto(texto) ? desencripta(texto) : alert('incorrecto');
}

function encripta(texto){
    texto = texto.split("");
    for(let i = 0; i < texto.length; i++){
        switch (texto[i]){
            case 'a':
                texto[i] += 'i';
                break;
            case 'e':
                texto[i] += 'nter';
                break;
            case 'i':
                texto[i] += 'mes';
                break;
            case 'o':
                texto[i] += 'ber';
                break;
            case 'u':
                texto[i] += 'fat';
                break;
            default:
                texto[i] = texto[i];
                break;
        }
    }
    mostrarTexto(texto);
}

function desencripta(texto){
    texto = texto.split(" ");
    for(let i = 0; i<texto.length; i++){
        if (texto[i].includes('enter')||texto[i].includes('ai')||texto[i].includes('imes')
            ||texto[i].includes('ober') || texto[i].includes('ufat')) {
            texto[i] = change(texto[i]) + ' ';
        }
    console.log(texto)
    mostrarTexto(texto);
    }
}

function change(texto){
    console.log(texto)
    texto = texto.replace(/ai/gi, 'a');
    texto = texto.replace(/enter/gi, 'e');
    texto = texto.replace( /imes/gi, "i" );
    texto = texto.replace(/ober/gi, 'o');
    texto = texto.replace(/ufat/gi, 'u');
    return(texto);
}

function mostrarTexto(texto){
    console.log(texto)
    texto = texto.join("");
    let img = document.getElementById('muneco');
    img.setAttribute('hidden', 'hidden');
    document.getElementById('ingresaTexto').setAttribute('hidden', 'hidden');
    let textoAnterior = document.getElementById('noMensaje');
    textoAnterior.style.height = 700 + 'px';
    textoAnterior.innerHTML = texto;
    document.getElementById('botonCopiar').style.display = 'block';
}

let copiar = async () => {
    let textoCopiado = document.getElementById('noMensaje').innerHTML;
    await navigator.clipboard.writeText(textoCopiado);
}



function esCorrecto(texto){
    return true;
}