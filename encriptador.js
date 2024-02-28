


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
    console.log(texto);
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
    console.log(texto)
}

function desencripta(texto){

}

function esCorrecto(texto){
    return true;
}