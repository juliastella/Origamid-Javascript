/**
 * Array com interações
 * 
*/

/**
 * map() = faz a mesma coisa do foreach, porém, o map sempre retorna uma array
 */

// const carros = ['Ford', 'Fiat', 'Honda'];
// const newCarros = carros.map((item) => {
//   return 'Carro ' + item;
// });

//carros; // ['Ford', 'Fiat', 'Honda']
//newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

/**
 * arrom function e map() =Uma Arrow Function de linha única e sem chaves irá retornar 
 * o valor após a fat arrow =>
  */

// const numeros = [2, 4, 6, 8, 10, 12, 14];
// const numerosX3 = numeros.map(n => n * 3);

// numerosX3; // [6, 12, 18, 24, 30, 36, 42];

//Execicios 


// Selecione cada curso e retorne uma array
const cursos = document.querySelector('.curso');
const arrayCursos = Array.from(cursos); 

// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;

  return{
    titulo,
    descricao
  }
})

console.log(objetosCurso);
console.log(arrayCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = Number.filter(n => n > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixos';
})

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = item.preco.replace('R$', '').replace(',', '.')
  return acumulador + precoLimpo
})