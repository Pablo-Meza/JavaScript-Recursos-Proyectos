// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
//fuera del scope, val = undefined
console.log(val)    // undefined 

// map() || Permite iterar sobre un arreglo y modificar sus elementos utilizando una
//       || función callback. La función callback se ejecutará entonces en cada uno de los elementos del arreglo.
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray)   //[ '1 - San Sebastián','2 - Madrid','3 - Barcelona','4 - Alicante','5 - Bilbao' ]

// filter() || El método filter crea un nuevo arreglo y devuelve todos los elementos que pasan 
//          || la condición especificada en la llamada en el callback.
const listaObjetos = [
    { nombre: "Lautaro", edad: 35 },
    { nombre: "Gonzalo", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Analia", edad: 29}
];
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores) //[ { nombre: 'Lautaro', edad: 35 }, { nombre: 'Gonzalo', edad: 34 } ]

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista)     // devuelve lo mismo menos "Miguel"

// || reduce(param1: funcionInterna(paramA,paramB,paramC,paramD),param2: valor inicial, se sumara al princio de return) ||
// se aplica para obtener un valor a partir de operaciones que hacemos a todos los elementos
// Esta función toma cuatro argumentos, pero a menudo solo se usan los dos primeros.
const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, posSiguient , i, arrayOriginal) => {
    console.log(acumulado)      //3, 59, 82, 87, 177
    console.log(posSiguient)    // 56, 23, 5, 90, 100
    console.log(i)              // 1, 2, 3, 4, 5
    console.log(arrayOriginal)  // 
    return  acumulado           
})
// acumulado:       acumula/almacena cada valor iterado                          (uso recurrente)
// posSiguient:     valor actual que esta siendo recorrido por la funcion reduce (uso recurrente) 
// i:               indice actual del valor actual (puede omitirse)
//arrayOriginal:    array original                 (puede omitirse)

console.log(suma)   // 3

const numeros = [2,4,6,8,10];
const resultado = numeros.reduce((acum, valAct )=>{
    console.log(acum)   //2,6,12,20
    console.log(valAct) // 4,6,8,10
    return acum+valAct  // acumula el resultado y lo manda al parametro acum, para que este se vuelva a iterar (si no ponemos una operacion iterara siempre el mismo valor, osea el inicial)
});
console.log(resultado); //30

// reduce arreglo de OBJETOS y solucion al sumar acumulando tipo objetos:
const objeto = [{nombre:'juan',edad:20},{nombre:'Marcos',edad:25},{nombre:'Luis',edad:30}];
const sumaEdades= objeto.reduce((ac, item)=>{
    return ac+= item.edad
},0); // iniciamos en 0 para que no haya proble con que acumula un tipo de dato objeto con numerico
console.log(sumaEdades);    // 75

const cadena=['mi','nombre','es','Pablo'];
const reducido = cadena.reduce((ac,item)=>{
    return ac+=' '+item 
},'Hola! ');

console.log(reducido); // Hola! mi nombre es Pablo 

// devuelve el valor mas grande
res = numeros.reduce((ac, item)=>{
    // if(ac > item){
    //     ac=ac
    // }else{
    //     ac=item
    // }; 
    // return ac
    return Math.max(ac , item); 
});
console.log(res)    // 10

 