// parte 4 - Strings (cadenas de caracteres)
let str_single = 'texto con comillas simples';
let str_duble = "texto con comillas dobles";

console.log(str_single);
console.log(str_duble);

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"'
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'"
let str_comillas_simples_2 = 'El otro día me dijo literalmente \'ve a sacar la basura\''

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)

////// Comillas invertidas (backticks)
let str_backticks = `String con backticks`

console.log(str_backticks)

let nombre = "Pablo"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo)

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;

console.log(plantilla)

//// Introducción de variables en html
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"]