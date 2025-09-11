//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true


//Métodos
//É uma propriedade que possui uma função no local do seu valor.

// var quadrado = {
//   lados: 4,
//   area: function(lado) {
//     return lado * lado;
//   },
//   perimetro: function(lado) {
//     return this.lados * lado; // this faz referencia a 'isso', ou seja, esta fazendo referencia ao objeto em si
//   }, // para também nao ficar escrevendo o nome do objeto varias vezes, usamos o this
// }

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

//Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

//Dot Notation Get
//Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

// Adicionar Propriedades e Métodos
// Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';


// Palavra-chave this
// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

//this irá retornar o próprio objeto

//Protótipo e Herança
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

//hasOwnProperty é um método de Object

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
    nome: 'julia',
    sobrenome: 'Stella',
    idae: 21,
    
    nomeComplero(){
        return this.nome + this.sobrenome;
    }
};


// Crie um método no objeto anterior, que mostre o seu nome completo



// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}


carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var carro = { 
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,

    lateChegar(pessoa){

        if (pessoa === 'Homem'){
            return 'late ao ver um ' + pessoa;
        }
        else{
            return 'nada';   

        }
    }
}






