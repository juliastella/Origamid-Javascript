// Class list

const menu = document.querySelector('.menu');
menu.classList.add('ativo'); // Adiciona a classe ativo
menu.classList.remove('azul'); // Adiciona a classe azul
menu.classList.toggle('azul'); // Adiciona a classe azul se não existir, remove se existir

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} // Adiciona a classe possui-azul se azul existir


// o className foi o primeiro a ser criado

// menu.className = 22;

// para concatenar class

// menu.className = menu.className + ' vermelho';
// ou 
menu.className +=  ' vermelho';


// console.log(menu.className); // Retorna uma string com todas as classes
// console.log(menu.classList); // Retorna um DOMTokenList com todas as classes

// attributes: retorna uma array-like com os atributos do elemento

// array-like é um objeto que retonar o indice e outros atributos semelhantes a um array, mas não é array

const animais = document.querySelector('.animais');

//console.log(animais.attributes.class); // pode colocar id, [0], ['data-texto'], class e outros

// getAttribute e setAttribute