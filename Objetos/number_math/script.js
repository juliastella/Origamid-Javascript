/**
 * Number
 * 
 * 
*/

// é um método que verifica sem é NaN
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

// verifica se é uma integral 
Number.isInteger(20); // true, é um número inteiro
Number.isInteger(23.6); // false, é um número decimal


/* para retornar um número a patir de uma string. 
a string deve iniciar com um número
*/

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100


// Arredonda o número com base no total de casas decimais do argumento.

const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499

// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco3 = 2.99;
preco3.toString(10); // '2.99'

// Formata o número de acordo com a língua e opções passadas.

const preco4 = 59.49;
preco4.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49


// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303

// Os que mais iremos utilizar
/**
 * abs() retorna o valor absoluto, ou seja, transforma 
 * negativo em positivo. ceil() arredonda para cima, 
 * retornando sempre uma integral e floor para baixo. round() 
 * arredonda para o número integral mais próximo.
 */

Math.abs(-5.5); // 5.5 transfora para positivo
Math.ceil(4.8334); // 5 arrendonda para um inteiro sempre para cima
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4  arrendonda para um inteiro sempre para baixo
Math.floor(4.3); // 4
Math.round(4.8334); // 5 arrendonda seguindo as regras matematicas
Math.round(4.3); // 4


/**
 * max() retorna o maior número de uma lista de argumentos, min() o menor 
 * número e random() um número aleatório entre 0 e 1.
 */

Math.max(5,3,10,42,2); // 42 o maior número
Math.min(5,3,10,42,2); // 2 o menor número

Math.random(); // 0.XXX aleatorios
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;

