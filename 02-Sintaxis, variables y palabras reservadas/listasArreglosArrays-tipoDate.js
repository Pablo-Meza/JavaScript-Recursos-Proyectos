//Listas, arreglos o arrays
const lista1     = [5,'hola', undefined, null];
const lista2    = new Array(2,'hola', undefined, null);
//define la cantidad de indices del nuevo arreglo
const lista3    = new Array(3); 
lista3[0]       = 'soy el primer elemento, index 0';

console.log(lista1) // [ 5, 'hola', undefined, null ]
console.log(lista2) // [ 2, 'hola', undefined, null ]
console.log(lista3) // [ 'soy el primer elemento, index 0', ,  ]

//Objetos:
//const puede modificar sus valores dentro del objeto, pero no puede volver a definirse como variable aunque se trate de otro objeto tambien, no se puede
const movil={
    alto:   15,
    ancho:  6,
    marca:  'samsung',
    isWhite: false,
    contactos:['goku','vegueta','bills'],
    tarjeta:{
        marca:          'sandisk',
        almacenamiento: 64
    },
    //podemos definir una keys con "", si necesitaramos insertar un simbolo como por ej: - 
    "altura-tarjeta":5
, 
}
console.log(movil.tarjeta.marca)    // sandisk

// fechas 
// libreria de apoyo: Moment.js

//trae fecha de construccion de, constructor de date 
const ahora         = new Date();
console.log(ahora)                  //Fri Jul 15 2022 17:18:18 GMT-0300 (hora estándar de Argentina)

const fecha_milis   = new Date(10)  // 10 milisegundos desde su creacion en 1969
console.log(fecha_milis)            // Wed Dec 31 1969 21:00:00 GMT-0300 (hora estándar de Argentina)

const fecha_cadena  = new Date('march 25 2020');
console.log(fecha_cadena)           // Wed Mar 25 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

const fecha_valores = new Date(2021,0,26); // el mes arranca en 0
console.log(fecha_valores)

const dia   = ahora.getDate();
const mes   = ahora.getMonth()+1; // sumamos uno para traer el mes correcto, ya que por defecto se indexa desde enero = 0 ... 
const anyo  = ahora.getFullYear();
console.log(dia,mes,anyo)