// Operador .valueOf() - Obtener valores numéricos a partir de iterales
let a = 2;
//prototipo Number- casting (casteo) - indico que quiero almacenar un valor de tipo numerico
let b = new Number(3);

console.log(a);                         // 2 - number
console.log(b);                         // number 3 {} - typeof objet
console.log(a + b);                     // 5
console.log(a.valueOf() + b.valueOf()); // 5 - Operador .valueOf() - Obtener valores numéricos a partir de literales

console.log(b.valueOf());               // 3

let str = new String("Hola soy un string");
console.log(str);               // { [Iterator] 0: 'H',1: 'o',2: 'l',3: 'a',4: ' ',5: 's',6: 'o',7: 'y',8: ' ',9: 'u',10: 'n',11: ' ',12: 's',13: 't',14: 'r',15: 'i',16: 'n',17: 'g' }
console.log(str.valueOf());     // hola soy un string

// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n);                     // NaN
console.log(isNaN(n));              // true - isNaN() evalua si NO es un numero 


let numerador = 19;                 
let divisor = 0;                    
console.log(numerador / divisor);   // Infinity - seria indeterminado pero lo define como infinito

let divisor_2 = null;
console.log(numerador / divisor_2); // Infinity - 

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero); // string

// Error de concepto (lo concatena)
console.log(numero + num2); // 5.8917.2 

// casteamos con Number(numero), pasa de string a number
console.log(Number(numero) + num2); // 23.00

//parseInt : pasa a numero entero
console.log(parseInt(numero))   // 5
//parseFloat : pasa a numero con decimales incluidos 
console.log(parseFloat(numero)) // 5.89

let num3 = 4;
console.log(parseInt(num3))     // 4
//si es que los decimales son mayores a '0', parseFloat como es en ese caso no los mostrará
console.log(parseFloat(num3))   // 4

// Números hexadecimales (base 16) 

//** Definicion: El sistema hexadecimal reduce un número de ocho bits a sólo dos dígitos hexadecimales. 
// Esto reduce la confusión que se puede generar al leer largas cadenas de números binarios 
// y la cantidad de espacio que exige la escritura de números binarios. **
// si desea profundizar mas en sistema binario : https://www.youtube.com/watch?v=B8js9CZtWQs&feature=youtu.be

/***  Tabla hexadecimal:***/
// | hex bin | hex bin |
// | 0 0000 | 8 1000 |
// | 1 0001 | 9 1001 |
// | 2 0010 | A 1010 |
// | 3 0011 | B 1011 |  
// | 4 0100 | C 1100 |
// | 5 0101 | D 1101 |  
// | 6 0110 | E 1110 |
// | 7 0111 | F 1111 |
/***  Tabla fin ***/

//parseInt(numHex:convierte numero hexadecimal a number, 16: base 16) 
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));  // 239031

// Obtener los valores máximo y mínimo en Javascript por numeros de bits que ocupa

//EPSILON: es una propiedad, PRECISION minima con el que podemos trabajar
let min_precision = Number.EPSILON;
//MIN_VALUE: valor minimo dentro de JS
let min_valor_JS = Number.MIN_VALUE;
//MAX_VALUE: valor maximo dentro de JS
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);     // 2.220446049250313e-16
console.log(min_valor_JS);      // 5e-324
console.log(max_valor_JS);      // 1.7976931348623157e+308