/**
 * Operadores de Atribuição
    Podem funcionar como formas abreviadas de expressões matemáticas
 */

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
x++; // x = x + 1 (6)
x--; // x = x - 1 (4)


/**
 * Operadores ternários
    * Uma forma abreviada de escrever um if/else
    * 
    * Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição
    * Sintaxe: condição ? valor1 : valor2  
 */

// var numero = 20;
// var numero2 = 10;

// numero += numero2; // numero = numero + numero2
// console.log(numero);
// console.log(numero2);

// var idade = 20;
// var naoPossuiDiabetes = false;

// var podeBeber;
// podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

// console.log(podeBeber)

// var possuiFaculdade = false;
// if(possuiFaculdade)
//   console.log('Sim possui');
// else
//   console.log('Não possui');


// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll+=500;

console.log(scroll);


// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa); // Não é sempre necessario adicionar o resto do comando em alguns casos

console.log(darCredito);