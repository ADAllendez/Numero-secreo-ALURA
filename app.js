let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Aqui estamos seleccionando el h1 y dando le un valor, en este caso el titulo es: Juego del numero secreto
/*let titulo = document.querySelector('h1');
titulo.innerHTML = ("Hora del Desafío");

//Aqui seleccionamos la etiqueta p del aparrafo y le indicamos el contenido que va a tener
let parrafo = document.querySelector('p');
parrafo.innerHTML = ("Indica un numero del 1 al 10");*/


//Otra opcion mejor a la hora de llamar o designar un titulo o parrafo
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Aqui llamamos al metodo intento de usuario donde en el realizamos la logica para esta funcion.
function verificarIntento(){
    let numeroElegido = parseInt(document.getElementById('numeroUsuario').value);
    
    if(numeroSecreto === numeroElegido){
        asignarTextoElemento('p',`Felicidades, acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroElegido > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiar();
    }
    return;
}
function limpiar(){
    document.querySelector('#numeroUsuario').value = '';
   
}


function generarNumeroSecreto(numero){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log (listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se sortearon todos los numeros");
    }else{
        // Si el numero generado esta incluido en la lista...
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1',"Hora del Desafío");
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiar();
    //mostrar indicaciones
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

//Llamamos a la funcion creada para designarle lo que deseamos al elemento.
// Donde espera recibir un elemento tipo h1,h2,p,etc; junto con su texto o lo que querramos designar.
condicionesIniciales();
titulo();

