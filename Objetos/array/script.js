/**
 * Array
 * 
*/

/**
 * Toda array herda os métodos e propriedades do protótipo do construtor Array
 */
// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const carros = new Array('Corola', 'Mustang', 'Honda');

// carros[1] // Mustang
// carros[2] = 'Ferrari';
// carros[10] = 'Parati';// ele vai aticionar itens até chegar no tamanho do 10. 
// // esse espaços que ele cria são vazios, já na possição 11 ele coloca o nome que passamos.
// carros.length; // 11


// /* array.from
// transforma o que parece array em array
// */

// let li1 = document.querySelectorAll('li'); // NodeList
// li1 = Array.from(li1); // Array

// const carros1 = {
//   0: 'Fiat',
//   1: 'Honda',
//   2: 'Ford',
//   length: 4,
// }

// const carrosArray = Array.from(carros);

// //isArray = verifica se é um array e retorna um valor booleano

// let li = document.querySelectorAll('li'); // NodeList
// Array.isArray(li); // false

// li = Array.from(li); // Array
// Array.isArray(li); // true

// // array.of e new array, criam arrays

// Array.of(10); // [10]
// Array.of(1,2,3,4); // [1,2,3,4]
// new Array(5); // [,,,,]
// Array(5); // [,,,,]
// Array(1,2,3,4); // [1,2,3,4]


// // propriedade e metodos do prototype

// // length retorna o tamanho do array

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// frutas.length; // 3

// frutas[0].length; // 6
// frutas[1].length; // 4
// frutas[2].length; // 2


// // o sort() mudar organiza o array por ordem alfabetica, não funciona com números

// const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos2.sort();
// instrumentos2; // ['Baixo', 'Guitarra', Violão]

// const idades = [32,21,33,43,1,12,8];
// idades.sort();
// idades; // [1, 12, 21, 32, 33, 43, 8]
 

// /**[].unshift() adiciona elementos ao início da array e retorna o length da mesma. 
//  * [].push() adiciona elementos ao final da array e retorna o length da mesma. */

// const carrosA = ['Ford', 'Fiat', 'VW'];
// carrosA.unshift('Honda', 'Kia'); // 5
// carrosA; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// carrosA.push('Ferrari'); // 6
// carrosA; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];



// /** [].shift() remove o primeiro elemento da array e retorna o mesmo. 
//  * [].pop() remove o último elemento da array e retorna o mesmo.*/


// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const primeiroCarro = carros.shift(); // 'Ford'
// carros; // ['Fiat', 'VW', 'Honda'];

// const ultimoCarro = carros.pop(); // 'Honda'
// carros; // ['Fiat', 'VW'];

// //[].reverse() inverte os itens da array e retorna a nova array.

// // [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index.
// //  Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens)

// const carrosB = ['Ford', 'Fiat', 'VW', 'Honda'];
// carrosB.splice(1, 0, 'Kia', 'Mustang'); // []
// carrosB; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// carrosB.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
// carrosB; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']



// // [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final 
// // e vai preencher a mesma com essa cópia.

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// // ['Item1', 'Item2', 'Item1', 'Item2']

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// // ['Item1', 'Item2', 'Item3', 'Item1']


// // [].fill(valor, inicio, final) preenche a array com o valor que você que colocar, do início até o fim do array.


// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // ['Banana', 'Banana', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // ['Item1', 'Item2', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// // ['Item1', 'Banana', 'Banana', 'Item4']


// // os metodos de acesso não modificam o array original


// // [].concat(array1, array2, ...) concatena arrays e retorna uma nova array

// const carrosC = ['Ford', 'Fiat'];
// const motos = ['Honda', 'Yamaha'];
// const transportes = carrosC.concat(motos);
// // ['Ford', 'Fiat', 'Honda', 'Yamaha']

// //[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a 
// // array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.


// // join(separado) = junta todos os valores da array e retorna uma 
// // string com eles

// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// linguagens.join(); // 'html,css,js,php,python'
// linguagens.join(' '); // 'html css js php python'
// linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'



// // slice retorna os itens da array começando pelo início e indo até o valor de final.

// const linguagensA = ['html', 'css', 'js', 'php', 'python'];
// linguagensA.slice(3); // ['php', 'python']
// linguagensA.slice(1, 4); // ['css', 'js', 'php']

// const cloneLinguagens = linguagensA.slice();

//execicio

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

const removeInicio = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável

const removeFinal = comidas.pop();

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('div');


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopia = carros.slice();

carros.pop();