/*EJEMPLO DE FUNCION
function mensaje(msj) {
    console.log(msj);
}

var msj = 'Mensaje como argumento de la funcion';
mensaje(msj);
*/
/*++++++para que esta funcion me devuelva un valor+++++
function mensaje() {
    return 'Mensaje como devolucion de la funcion';
}
var msj = mensaje();
console.log(msj);
*/

//+++++argumentos+++++
/*suma 3 argumentos porque recibe 3 argumentos.

function sumar(a, b, c=3){
    return a + b + c;

}
//el valor de c se vuelve opcional, js lo toma si lo necesita
var result = sumar(4, 5, 8);
var result1= sumar(3, 7);
console.log(result);
console.log(result1);
*/
/* +++++++OTRA FORMA DE CREAR FUNCIONES EN JS+++++++
var sumar = function (a, b, c=3){
    return a + b + c;
}
var result = sumar(4, 5, 8);
var result1= sumar(3, 7);
console.log(result);
console.log(result1);
*/
// FUNCIONES RECURSIVAS
/*
var factorial = function(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    }
    else 
        return (n) * factorial(n - 1); //n debe ir bajando
    
}
//console.log(factorial(5));
factorial(4) = 5 * factorial(4) = 4 * 24 * factorial (1); */


//++++++ARREGLOS++++

var nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');
/*
console.log(nombres[3]);
console.log(vegetales[1]);
//para modificar
nombres[0] = 'Jose';
vegetales[2] = 'Nabo';
console.log(nombres[0]);
console.log(vegetales[2]);
*/ 
//length cantidad de indices
/*------------------------
console.log(nombres.length);

//recorres el arreglo
for( var i = 0; i <= nombres.length - 1; i++) {
    console.log(nombres[i]);
}
vegetales.forEach(function(elemento, indice) { //estructura
    console.log(elemento, indice)
})
--------------------------
*/
console.log(nombres);
//para agegar elementos al final del arreglo
nombres.push('Pedro');
console.log(nombres);
//para agegar elementos al principio del arreglo
nombres.unshift('Lili');
console.log(nombres);
//quitar elementos al final
nombres.pop();
console.log(nombres);
//quitar elementos al principio
nombres.shift();
console.log(nombres);
//posicion del indice
var pos = nombres.indexOf('Carlos');
console.log(pos);
//para eliminar cualquier elemento
nombres.splice(1, 2);
console.log(nombres);



