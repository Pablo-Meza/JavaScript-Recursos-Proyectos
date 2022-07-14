var variable;

// const constante;
const constante = "Hola soy una constante";
console.log(constante)
// constante = "Adiós" // Nos da un error - siempre guarda el mismo valor

//var y let son variables mutables(pueden cambiar de valor)tienen diferenctes alcances 
//var alcance global ; let: alcance por scope (bloque de codigo)

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);

//A simple vista se comportan igual
// ejemplos dentro y fuera del bloque:

//bloque 
var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    //otro bloque
    var variable = "Soy la segunda variable"
}
//var pisa su valor y lo mantiene asi fuera del bloque del ciclo
console.log(variable)

//bloque
let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    //otro bloque
    let variableLet = "Soy la segunda variable LET";
}
// let vuelve a valer lo que valia fuera del bloque for
console.log(variableLet);

/////////////////////////
// typoof : muestra el TIPO de dato de la variable que le pasemos

var num = 4;

console.log(typeof num);

num = "Hola soy num";

console.log(typeof num);