// outra forma declara função  
/**
 * Function expression 
 * 
 * é uma expressão, isso no js é por exemplo o 
 * que vem depois do "=" na declaração de variaveis
 */

// declaração normal

function somar(a,b){
    return a + b;
}


// com expression

var somar2 = function(a, b){
    return a + b
}

// o codigo tem que vir a pos a declaração dela

console.log(somar2);

// podemos reduzir a expressão com arrow functions

const quadrado = a => a*a;

console.log(quadrado);

/**
 * Antes da introdução de modules e da implementação do escopo de bloco, a forma mais 
 * comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.
 */

var instrumento = 'Violão';
// pode declarar o inicio como function expression
// (() => { 
(function() {
  // código isolado do escopo global
  // o que faz aqui dentro não impcta o lando de fora
  var instrumento = 'Guitarra';
  console.log(instrumento); // Guitarra
})();

console.log(instrumento); // Violão

