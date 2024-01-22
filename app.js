let numeroSecreto = 0;
let intento = 0;
let listaNumeroGenerado = [];
let numeroMaximo = 10;

console.log(numeroSecreto); 
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() { //llamamos a la funcion para poder codificar
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //usamos get(obtener) elemento del id que esta en html *PARA ADOPTAR EL VALOR SE AGREGA VALUE*
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intento} ${intento == 1 ?  'intento' :'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //EL USUARIO NO ACERTO
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'Numero secreto es mayor');
        }
        intento++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ' ';// para los id se pone enumerar y luego que esta en el nombre del id en html
    
}

function generarNumeroSecreto() { //Genera un numero secreto, haciendo llamada de la variable numeroSecreto
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumeroGenerado);
    console.log(numeroGenerado);
    //Si ya sorteamos todo los numeros
    if (listaNumeroGenerado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya sortearon todo los numeros posibles');
    }else{
        //Si el numeroGenerado esta incluido en la lista
        if (listaNumeroGenerado.includes(numeroGenerado)){ //includes verifica si esta ese numero verdadero o falso
            return generarNumeroSecreto();
        }else{
            listaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionInicales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}, por favor`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;

}

function reiniciarJuego(){
    //LIMPIAR LA CAJA
    limpiarCaja();
    ////GENERAR MENSAJE DE INTERVALO DE NUMEROS    
    //GENERAR NUMERO ALEATORIO    
    //Inicializar el umero intentos
    condicionInicales();    
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionInicales();

