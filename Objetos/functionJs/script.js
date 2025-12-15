// /**
//  *A propriedade prototype é um objeto adicionado a 
//  uma função quando a mesma é criada.
//  */


// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }
// const andre = new Pessoa('André', 28);

// console.log(Pessoa.prototype); // retorna o objeto
// console.log(andre.prototype); // undefined


// /* É possível adicionar novas propriedades e 
//  métodos ao objeto prototype.  */

// Pessoa.prototype.andar = function() {
//   return this.nome + ' andou';
// }
// Pessoa.prototype.nadar = function() {
//   return this.nome + ' nadou';
// }
// //console.log(Pessoa.prototype); // retorna o objeto


// // aula 2

// const pais = 'brasil';
// const cidade = new String('Rio');

// const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

// const lista = document.querySelectorAll('li');

// // transforma em um array

// const listaArray = Array.prototype.slice.call(lista);

// // um metodo atual e direto do objeto é o from

// const listaArray2 = Array.from(lista);

// /**
//  * Nos objetos nativos existem métodos linkados diretamente 
//  * ao Objeto e outros linkados ao protótipo.
//  */

// // Retorna uma lista com os métodos / propriedades
// Object.getOwnPropertyNames(Array);
// Object.getOwnPropertyNames(Array.prototype);


// Aula 2

// Método do Objeto vs Protótipo

// Array.prototype.slice.call(lista);
// Array.from(lista);

// // Retorna uma lista com os métodos / propriedades
// Object.getOwnPropertyNames(Array);
// Object.getOwnPropertyNames(Array.prototype);

/* uma forma de saber o nome do construtor: 
dado.constructor.name, retorna o nome do construtor;*/

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
};

const primeiraPessoa = new Pessoa('Júlia', 'Silva', 22);
console.log(primeiraPessoa.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLElement
li.click; // function
li.innerText; // string
li.value; // number
li.hidden; // boolean
li.offsetLeft; //number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string
