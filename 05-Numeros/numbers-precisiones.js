//subir
// Declaración de variables numéricas (enteros y con decimales)
let a = 5;

console.log(a);

let b = 0.1;

console.log(b);

// Precisión
let c = 0.2;

//muestra un resultado NO exacto, por la composicion de bits que hace JS, 
//como trata las variables y que tipo de memoria les asigna a cada una de ellas
console.log(b + c);     // muestra: 0.30000000000000004

// Metodo opcional para obtener valores "reales".
// Math, es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas
// Math. round(), es una funcion,retorna el valor de un número redondeado al entero más cercano
console.log(Math.round((0.1 + 0.2) * 100)/100); // 0.3