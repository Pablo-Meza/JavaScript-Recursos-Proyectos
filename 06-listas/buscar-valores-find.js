// Iteracion valores de una lista
const array = ["hola", 2, 5, 90, false, undefined,90,8,5,90];

// Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i])   //hola, 2, 5, 90, false, indefined
}

// Forma ES6 (más eficiente) .forEach()
/****** recorre cada elemento   *********/

let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
// Usamos funcion callback
arrayNums.forEach( elemento => {  
    suma += elemento;
    console.log(elemento)      // 3, 6, 2, 77, 2, 3, 93, 19
})
console.log(suma)           // 205  

// find():
// busca un elemento dentro de un array y retorna el primero que cumpla
// con la condición especificada en la función callback.
// Quiero encontrar el elemento 90
// formas de uso:

/*********  Encuentra un elemento *********/
//menos eficiente:
const variable = array.find(valor => {
    if (valor === 'hola') {
        return true
    }
})

console.log(variable)           //hola

const result = array.find( elementito => elementito === 2);
console.log(result);

//Mas eficiente
const listaPersonas = [
    { nombre: "juan",   edad: 35 },
    { nombre: "Raul",   edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía",  edad: 3 },
    { nombre: "Analia", edad: 29}
]

const persona1 = listaPersonas.find(perso => {
    if (perso.nombre === "Miguel") {
        return true
    }
})
const persona2 = listaPersonas.find(perso => perso.nombre === "Raul")
console.log(persona1);
console.log(persona2);

const { edad } = listaPersonas.find(perso => perso.nombre === "Miguel")
console.log(edad)