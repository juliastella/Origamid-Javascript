// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function(){
    const carro = 'BYD';

    console.log(carro); 
})

console.log(carro);


// Como podemos utilizar
// a função abaixo.
const active = callback => callback();


active(function(){
    console.log('teste de active');
    
})