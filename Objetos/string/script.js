/**
 * Strind
 * 
 * É a construtora de strings, toda string possui as propriedades 
 * e métodos do prototype de String
 * 
*/

const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);


/* Metodos 
length =  quantidade de caracteres
charat() = retorna o index do caracter na string
concat() = junta duas ou mais strings
includes(search, position) = procura a string exata dentro da outra stirng
endsWith() = procura pela string exata dentro de outra string no final 
startsWith = procura pela string exata dentro de outra string no começo
slice(start, end) = corta a string 
substring(start, end) = a mesma coisa do slice, porém não aceita valores negativos de indece
indexof(search) = retorna o index do caractere na string, ele pega o primeiro que aparece
lastindexof(search) =  mesma coisa do indexof, contudo é ao final 
padStart(n, str) = Adiciona caracteres no início da string até atingir o comprimento desejado
padEnd(n, str) = Adiciona caracteres no final da string até atingir o comprimento desejado
repeat(n) = repete a string
replace(regexp|substr, nerstr|function) = Troca parte da string por outra. Podemos utilizar uma 
regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
split = vai dividir a string de acordo com o padrão que quisemos e no final retorna um array.
str.toLowerCase() = retorna a string de letra maisculas.
str.toUppercase() = retorna a string em letras maisculas
str.trim(), str.trimStart(), str.trimEnd() = remove espaço em branco do inicio ou final de uma string
*/

// repleace 

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');

// let preco = 'R$ 1200,43';
// preco = preco.replace(',', '.'); // 'R$ 1200.43'



// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let soma = 0;
let recebimento = 0;
transacoes.forEach( (item) => {
    const numeroLimpo = +item.valor.replace('R$', '');
    if (item.descricao.slice(0, 4) === 'Taxa'){ 
        soma += numeroLimpo;
    }
    else if(item.descricao.slice(0, 4) === 'Rece'){
        recebimento += numeroLimpo;
    }
});

console.log(soma);
console.log(recebimento);



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

 const novoHtml = html.replace(/span/g, 'a');
 console.log(novoHtml);             
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));


// Retorne o total de taxas
const transacoesB = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoesB.forEach((item) => {
  item = item.toLocaleLowerCase().trim().slice(0,4);

  if (item === 'taxa') {
    taxasTotal++
  }
})

console.log(taxasTotal);
