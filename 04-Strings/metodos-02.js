// Métodos de cadenas de texto, strings (parte 2)
let input = "AMArillo"
let db = "amarillo"

/**************** pasar a minusculas o mayusculas  ******************/
// toLowerCase() - toUpperCase()
console.log(input.toLowerCase())    //amarillo
console.log(input.toUpperCase())    // AMARiLLO
console.log(input.toLowerCase() === db.toLowerCase()) //tru
console.log(input.toUpperCase() === db.toUpperCase()) //true


/**************** Formas de concatenar dos cadenas de caracteres  ******************/
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))   // Hola soy la primera cadena. Y yo soy la segunda cadena.
console.log(str_1 + " " + str_2)        // Hola soy la primera cadena. Y yo soy la segunda cadena.
console.log(`${str_1} ${str_2}`)        // Hola soy la primera cadena. Y yo soy la segunda cadena.


/******* Eliminar espacios al inicio y al final **********/
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length)
// trim()
//elimina espacios blancos del principio y del final
console.log(str_3.trim().length , str_3)
//elimina espacios blancos del principio
console.log(str_3.trimStart().length, str_3)
//elimina espacios blancos del final
console.log(str_3.trimEnd().length, str_3)


/******* Obtener el caracter que hay en cierta posición **********/
let str_4 = "Hola soy el string número 4" // ["H", "o", "l", "a", " ", "s"........]

//recibe indice de char, y lo devuelve como cuano se recorre un arreglo
console.log(str_4.charAt(5))    // s
//indicamos indice del caracter que queremos obtener
console.log(str_4[5])           // s


/******* Obtener la posición de una palabra dentro de una cadena de caracteres **********/
let str_5 = "Hola soy Pablo y me gusta el surf. Mi nombre es Pablo y mi apellido es Perez"
//Devuelve POSICION INDICE de la primer character de la palabra que deseamos buscar
console.log(str_5.indexOf("Pablo")) //9
//Devuelve el CHARACTER del indice que indicamos 
console.log(str_5.charAt(9)) // P
//Devuelve POSICION INDICE del de la primer character de LA ULTIMA INSTANCIA
console.log(str_5.lastIndexOf("Pablo")) //48