//Métodos e Propriedades de uma Array
// var videoGames = ['Switch', 'PS4', 'XBox'];

// videoGames.pop(); // Remove o último item e retorna ele
// videoGames.push('3DS'); // Adiciona ao final da array
// videoGames.length; // 3

//Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente


// For Loop
// Fazem algo repetidamente até que uma condição seja atingida.

// for (var numero = 0; numero < 10; numero++) {
//   console.log(numero);
// }
// Retorna de 0 a 9 no console

// O for loop possui 3 partes, início, condição e incremento

//While Loop

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

//Array e loops

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

//O loop irá parar caso encontro e palavra break

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilGanhou = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

brasilGanhou.forEach(ano => {
  console.log(`O brasil ganhou a copa de ${ano}`);
});


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === 'Pera') {
    break;
  }
  console.log(`a fruta é ${frutas[i]}`);
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var frutaEspecifica = frutas[frutas.length - 1];

console.log(frutaEspecifica);

// O foreach não é capaz de suporta o break
// Utilize o loop for para mostrar no console todas as frutas