// const Dom = {
//   seletor: 'li',
//   element() { // é uma função, somente abreviamos
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// }

// Dom.ativo(); // adiciona ativo ao li
// Dom.seletor = 'ul';
// Dom.ativo(); // adiciona ativo ao ul

//transformando em uma função construtora

// function Dom() {
//   this.seletor = 'li';
//   const element = document.querySelector(this.seletor);
//   this.ativo = function() {
//     element.classList.add('ativo');
//   };
// }

// const lista = new Dom();
// lista.seletor = 'ul';
// lista.ativo();

// const lastLi = new Dom();
// lastLi.seletor = 'li:last-child';
// lastLi.ativo();

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  nome = 'Nome pessoa',
  idade = 0,
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
  const elementList = document.querySelectorAll(seletor);

  this.elementList = elementList;

  this.addClass = function(classe){
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe){
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

listaItens.addClass('ativar');
ul.addClass('ativar-ul');

ul.removeClass('ativar-ul')