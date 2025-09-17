// Selecionar o dom

// pegar o elemento pelo id dele

const animaisSection = document.getElementById('animais');

// console.log(animaisSection);

// buscar elemento pela classe dele 

const gridSection = document.getElementsByClassName('grid-section');
//console.log(gridSection);

// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
const linkCSS = document.querySelector('[href^="https://"]');

//console.log(linkCSS);

/**
 * Array-Like

HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.
*/

// para tranforma em um array de verdade, utilizamos o array.from()

const arrayGrid = Array.from(gridSection);

// console.log(arrayGrid);

// preciso tranforma em array para depois utilizar o foreach

// arrayGrid.forEach(function(gridItem, index, array) {
//   gridItem.classList.add('azul');
//   console.log(index) // index do item na array
//   console.log(array) // a array completa
// });

// Execicio

// Retorne no console todas as imagens do site

const imag = document.querySelectorAll('img');

//console.log(imag);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('[src^="img/"]');
//console.log(imagem);


// Selecione todos os links internos (onde o href começa com #)

const linkInternos = document.querySelectorAll('[href^="#"]');
//console.log(linkInternos);


// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');

//console.log(primeiroH2);


// Selecione o último p do site

const ultimoP = document.querySelectorAll('p');

console.log(ultimoP[ultimoP.length -1]);




