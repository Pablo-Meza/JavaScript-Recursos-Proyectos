// Métodos de cadenas de texto (parte 3)

let texto_largo = "Montito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

//Devuelve un arreglo con las instancias de la palabra no - lo escribimos con expresiones regulares
// tambien trae los 'no', que pertenecen a una palabra   
console.log(texto_largo.match(/no/g))   //['no','no','no','no'] 

// ¿Existe la palabra dentro del texto? - devuelve true or false
console.log(texto_largo.includes("termo"))                  // false

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito no es un mono"))   // false

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("árboles."))               // true