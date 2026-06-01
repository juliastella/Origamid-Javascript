/**
 * destructuring 
 * 
 * São uma forma de quebra um objeto e dividir o que tem dentro dele em variaveis
 */

const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
}

const {marca, ano} = carro;

console.log(marca); // Fiat
console.log(ano); // 2018

// com objetos

// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const {livros, videos} = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);


/**Nesting
É possível aninhar uma desestruturação dentro de outra.
 */

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

const {fisicas, digitais, digitais: {livros, videos}} = cliente.compras;

console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(digitais);

/**
 * - Quando o valor não exiter, sera undefined
 * - pode existir destruturação com array, dividido em variaveis
 * - Declarar varias variaveis ao mesmo tempo
 */

const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 

