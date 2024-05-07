'use strict';

console.log('sono caricato');

const listaSpesa = [
    "Latte",
    "Riso",
    "Pollo",
    "Merluzzo",
    "Spinaci",
    "Insalata",
]

let count=0;

let elementoLista = document.querySelector('.lista');
console.log(elementoLista);
let elementoLi = document.createElement('li');
console.log(elementoLi);

while (count<listaSpesa.length){
    elementoLi.innerHTML = listaSpesa[count];
    console.log(elementoLi.innerHTML);
    elementoLista.append(elementoLi);
    console.log(elementoLista.innerHTML);
    count++;
}