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

let ul = document.querySelector('.lista');
console.log(ul);

while (count<listaSpesa.length){
    let li = document.createElement('li');
    li.innerText = listaSpesa[count];
    console.log(li.innerHTML);
    ul.append(li);
    console.log(ul.innerHTML);
    count++;
}