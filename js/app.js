// Obtegno los elementos del DOM
let ingresaDni = document.getElementById("ingresa-dni");

const botonUno = document.getElementById("botonUno");
const botonDos = document.getElementById("botonDos");
const botonTres = document.getElementById("botonTres");
const botonCuatro = document.getElementById("botonCuatro");
const botonCinco = document.getElementById("botonCinco");
const botonSeis = document.getElementById("botonSeis");
const botonSiete = document.getElementById("botonSiete");
const botonOcho = document.getElementById("botonOcho");
const botonNueve = document.getElementById("botonNueve");
const botonBorra = document.getElementById("botonBorra");
const botonCero = document.getElementById("botonCero");
const botonEnter = document.getElementById("botonEnter");

function validaDNI(){

    let dni = ingresaDni.value;
    
    var ex_regular_dni; 
    ex_regular_dni = /^\d{8}(?:[-\s]\d{4})?$/;
    if(ex_regular_dni.test (dni) == true){        
            Toastify({
                text: "Dni corresponde",
                duration: 3000
                }).showToast();
                return
    }else{    
        Toastify({
            text: "Dni erroneo, formato no válido",
            duration: 3000
            }).showToast();
            return
        }
}


botonUno.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'1';
})

botonDos.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'2';
})

botonTres.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'3';
})

botonCuatro.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'4';
})

botonCinco.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'5';
})

botonSeis.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'6';
})

botonSiete.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'7';
})

botonOcho.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'8';
})

botonNueve.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'9';
})

botonCero.addEventListener("click", function(){

    ingresaDni.value =  ingresaDni.value+'0';
})

botonBorra.addEventListener("click", function(){

    ingresaDni.value = '';
})

botonEnter.addEventListener("click", function(){

    validaDNI()
})


