// casos raros de uso break y continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }
    let j = 50;
    const k = 100;
    //distinto, es global
    var Var= 'VAR'
    console.log(lista[i]);  //1,2,4,5,6
    console.log(j);         //50,50,50,,50
    console.log(k);         //100,100,100,100

    if (lista[i] > 5) {
        break;
    }
}


// Cuál es el ámbito de un bucle - alcance de variable dentro del bucle- (scope)
console.log(k);     // k is not defined
console.log(i);     // i is not defined
console.log(j);     // j is not defined
console.log(Var);   // VAR