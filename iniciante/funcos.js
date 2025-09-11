/** argumentos podem ser funções
 * chamadas de Callback, geralmente são funções que 
 * ocorrem após algum evento */ 

// addEventListener('click', function(){ // caso o 'click'ocorra então acontece a função
//     console.log('clicou');
// });

/**Quando não definimos o return, 
 * ela irá retornar undefined. O código interno da função é executado normalmente, 
 * independente de existir valor de return ou não. */

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

//imc(80, 1.80) // 80 e 1.80 são os argumentos
//imc(60, 1.70) // 60 e 1.70 são os argumentos

/**
 * Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
 */

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
//console.log(totalPaises); // erro, totalPaises não definido

/**
 * Escopo Léxico
    Funções conseguem acessar variáveis que foram criadas no contexto pai
 */

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

//dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

// execicio

// Crie uma função para verificar se um valor é Truthy

function verifica(valor) {
    if (valor === 'Truthy') {
        return true
    }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// function somaQuadrado(perimetro, comprimento, lados = 4) {
//      perimetro = lados * comprimento
// } return perimetro

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    //console.log(nome, sobrenome);  
}

// Crie uma função que verifica se um número é par

function verificaNum(num) {
    if (num % 2 == 0){
        console.log(num, 'par');
    }
    else{
        console.log(num, 'impar');
    }
}

console.log(verificaNum(13336363634));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(valor) {
    return typeof valor;
}

console.log(tipoDado('a'));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(nome) {
    
})

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);
