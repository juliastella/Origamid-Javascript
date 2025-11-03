/* outerHTML, innerHTML, innerText


Propriedades que retornam uma string contendo o html ou texto.
É possível atribuir um novo valor
*/

const h1 = document.querySelector('h1');
const animais = document.querySelector('.animais-descricao');

console.log(h1.innerHTML);
console.log(h1.outerHTML);


// h1.innerHTML = '<p>Novo titulo</p>';
// h1.outerHTML = '<p>Novo titulo</p>';


// console.log(animais.innerHTML);


/* transversing


É como navegar pelo DOM, utilizando suas propriedades e métodos
*/

const lista = document.querySelector('.animias-lista');

// console.log(lista.parentElement.parentElement.parentElement); // pai do pai do elemento
// console.log(lista.nextElementSibling); // ele pegar o proximo elemento abaixo do elemento que selecionado

// console.log(lista.previousElementSibling);  // ele pegar o proximo elemento acima do elemento que selecionado

console.log(lista.children); // tras um HTMLCollection com os filhos
// lista.children[0];// primeiro filho
// lista.children[--lista.children.length]; // ultimo filho



