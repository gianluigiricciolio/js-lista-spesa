'use strict';




const listaSpesa = [
    "Latte",
    "Riso",
    "Pollo",
    "Merluzzo",
    "Spinaci",
    "Insalata",
]

// DICHIARO LA VARIABILE CONTATORE DA USARE NEL CICLO WHILE
let count=0;


// CREO UNA VARIABILE A CUI ASSEGNO UN OGGETTO DAL DOM
let ul = document.querySelector('.lista');

while (count<listaSpesa.length){
    // CREDO UNA VARIABILE TEMPORANEA ATTA A CONTENERE UN LI
    let li = document.createElement('li');
    // COPIO L'ELEMENTO IN POSIZIONE I NELL ELEMENTO LI
    li.innerText = listaSpesa[count];
    console.log(li.innerHTML);
    // INSERISCO L' ELEMENTO LI NELLA MIA LISTA
    ul.append(li);
    console.log(ul.innerHTML);
    // INCREMENTO LA VARIABILE CONTATORE PER SCORRERE LA LISTA
    count++;
}