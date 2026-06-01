/**
 * Rest 
 * 
 * Declaaramos nos paramentros, utilizanso ... na frente
ele pode ser chamado de array 
*/

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

anunciarGanhadores('Pedro', 'Marta', 'Maria');


/**
 * Spread
 * Utiliza o ... para ser ativado. Ele é quase um for
 * ele percorre os itens porém, não tem regras que são aplicadas ao for
 */

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];
