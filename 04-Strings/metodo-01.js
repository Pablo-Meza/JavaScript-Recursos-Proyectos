// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let cadena_1 = "Hola soy un string";
console.log(cadena_1.length)  // 18

/************  Obtener partes de cadenas de caracteres de forma ************/ 

// slice(param1='desde por indice',param2='hasta por indice'), 
let slice_str = cadena_1.slice(5, 10)   
console.log(slice_str)                  // soy u

// substring(param1='desde por indice',param2='hasta por indice')
let substring_str = cadena_1.substring(5, 10)
console.log(substring_str)

// substr(param1='desde', param2='hasta , evalua la cantidad de caracteres que pasamos') esta deprecado ,ya casi obsoleto, casi no se usa.
let substr_str = cadena_1.substr(5, 18)
console.log(substr_str)

/**********  Reemplazar parte del contenido de una cadena de texto ******************/
let cadena = "Hola mi nombre es Juan"
console.log(cadena)

//  Al utilizar strings sólo reemplaza la primera instancia
// replace(param1='caracteres que queremos reemplazar',param2='caracteres a insertar')
console.log(cadena.replace('Juan', 'Miguel'))  //Hola mi nombre es Miguel

let texto_largo = "Montito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// Al utilizar strings sólo reemplaza la primera instancia esto quiere decir que :
// si queremos reemplazar algo que se repite varias veces como un articulo "los", solo reemplazará el primero que encuentra
console.log(texto_largo.replace('los', 'cinco'))    // "Montito no es un mono cualquiera. A Tito no le gusta trepar por cuatro árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// Al utilizar la expresión regular /g (global), reemplaza TODAS las instancias
console.log(texto_largo.replace(/los/g, 'cuatro'))  // Montito no es un mono cualquiera. A Tito no le gusta trepar por cuatro árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de cuatro árboles. 