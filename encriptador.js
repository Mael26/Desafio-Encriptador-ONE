let popup = document.getElementById('advertenciaPopup');



popup.addEventListener('click', function(){
        if(window.getComputedStyle(popup, null).getPropertyValue('display') == 'block'){
            popup.classList.remove('show');
        }
});

function botonEncriptar(){
    //Obtenemos el texto a encriptar
    let texto = document.getElementById('mensaje').value;
    //verificamos que el input sea correcto, en caso de serlo lo mandamos a una funcion para que realice  la operacion y nos devuelva el resultado
    //En caso contrario mostramos una alerta para que el usuario revise la entrada
    esCorrecto(texto) ? encripta(texto): mostrarError();
}

function botonDesencriptar(){
    //Obtenemos el texto a desencriptar
    let texto = document.getElementById('mensaje').value;
    //verificamos que el input sea correcto, en caso de serlo lo mandamos a una funcion para que realice  la operacion y nos devuelva el resultado
    //En caso contrario mostramos una alerta para que el usuario revise la entrada
    esCorrecto(texto) ? desencripta(texto) : mostrarError();
}

function esCorrecto(texto){
    let flag = true;
    checkUppercase(texto) || texto.normalize('NFD').search(/[\u0300-\u036f]/i) != -1 ? flag = false : flag = true; 
    return flag;
}

function checkUppercase(str){
    for (var i=0; i<str.length; i++){
      if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
};

function mostrarError(){
    popup.classList.add('show');
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



