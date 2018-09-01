//Example 2

function helloword(Parametros1){
    if(Parametros1 === 'in'){
        alert('Hello word');
    } else if(Parametros1 === 'es'){
        alert('Hola Mundo');
    } else {
        alert('Hola parce');
    }
}

function myMax(num1, num2){
    if(num1 > num2){ 
        alert('Numero uno' + num1 + " es mayor"); 
    } else {
        alert('Numero dos' + num2 + " es menor");
    }
}

function myNota(nota){
    if(nota < 5){
        alert('Perdiste');
    }
    else if(nota === 10) {
        alert('Felicitaciones');
    }else {
        alert('Pasaste');
    }
}

function Multiplo(n){
    var coleccion = [];
    for( i=1; i<n; i++) {
        if(n%i==0){
            coleccion.push(i);
            console.log(i + " es multiplo de "  + n);
        }
    }
console.log(coleccion)
}

Multiplo(100);


//myNota(1);
// myMax(2, 3);
// helloword('in');

(function() {
    console.log('Sin Nombre');
})();

var brahianFunction= function(){
    console.log('Hola Brahian');
}

var functionArray = function(){
    return 'Brahian';
}

var objtBrahian = {nombre : 'Brahian',
                    apellido: 'Sanchez',
                    funcion : functionArray()}

console.log(objtBrahian);


class db {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    get calto(){
        return this.alto;
    }

    Bienvenidos() {
      alert('Hola');  
    }
}

var p = new db(10, 29);


function cambiarColor(){
    var x = document.getElementById('hh');
    x.innerHTML = "Hollll";
}





