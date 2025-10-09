// forEach

// O primeiro paramentro é um callback, ele é bom para ler array.

// const imgs = document.querySelectorAll('img');
// let i = 0;
// imgs.forEach(function(item, index, array){ // o index seria a posição do item no array
//     console.log(item, index, array); // array é como se fosse a variavel imgs
    
// })

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
//   console.log(item);
});

// Arrow function

// const imgs = document.querySelectorAll('img');
// let i = 0;

// imgs.forEach((item) => {
//     console.log(i++); 
    
// });

//let i = 0;

// outra forma de declarar a arrow function
//imgs.forEach(() => console.log(i++)); // pode ou não ter argumento


// execicio

// mostre no consoloe cada parágrafo do site
const paragrafo = document.querySelectorAll('p');

// mostre o textos dos textos no console

paragrafo.forEach((item) => console.log(item.innerText));


