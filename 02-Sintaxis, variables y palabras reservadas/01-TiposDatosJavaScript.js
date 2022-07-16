/*****  Ejemplos generales de tipos de datos en JavaScript *******/

//Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(typeof objecto);

//Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

let persona1={id:Symbol,nombre:'Roberto'}
let persona2={id:Symbol,nombre:'Cata'}
console.log(persona1.id)    //[λ: Symbol] , distinto al de persona2
console.log(persona2.id)    //[λ: Symbol]

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
//crea una funcion
console.log( typeof  Persona); // function

//Crea una nueva instancia de persona, un nuevo objeto
console.log( typeof new Persona('Juan','Pelotas')); // object 

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);