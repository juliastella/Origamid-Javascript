//Métodos e Propriedades de uma Array
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
Copiar
//Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente


// For Loop
// Fazem algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
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

// var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
// for (var i = 0; i < videoGames.length; i++) {
//   console.log(videoGames[i]);
// }

//O loop irá parar caso encontro e palavra break

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}


