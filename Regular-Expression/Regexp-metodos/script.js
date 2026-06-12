const regexp = /\w+/gi;

// Se passarmos uma string, não precisamos dos //
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp('\\w+', 'gi');
const regexpObj2 = new RegExp(/\w+/, 'gi');

'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
// X X X

// Exemplo complexo:
const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');

// são propriedades com informações sobre as flags 
regexp.flags; // 'gi'
regexp.global; // true
regexp.ignoreCase; // true
regexp.multiline; // false
regexp.source; // '\w+'

const regexp2 = /Java/g;
const frase = 'JavaScript e Java';

// o metodo test() verifica se existe ou não uma ocorrencia de busca

regexp2.lastIndex; // 0
regexp2.test(frase); // true
regexp2.lastIndex; // 4
regexp2.test(frase); // true
regexp2.lastIndex; // 17
regexp2.test(frase); // false
regexp2.lastIndex; // 0
regexp2.test(frase); // true (Reinicia
regexp2.lastIndex;  // 4

// regexp.exec() irá retorna um array com informações além de só um boolean 

const regexp3 = /Script/g;
const frase2 = 'JavaScript, TypeScript e CoffeeScript';

// let i = 1;
// while(regexp3.test(frase2)) {
//   console.log(i++, regexp3.lastIndex);
// }

/** Metodo de string */
const regexp4 = /[A-Za-z]/g;

const resultadoA = frase.match(regexp4);

/** Metodo de replace, permite a utilização de funções callback*/

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.replace(/(?<=<\/?)\w+/g, 'div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

//console.log(resultado);

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const mudarEmail = /(\w+)@(\w+\.\w+)/g;

const resultado = emails.replace(mudarEmail, 'X');
console.log(resultado);

// com função callback
const resultado2 = emails.replace(
  mudarEmail,
  function(capturaGeral, grupo1, grupo2, index, stringGeral) {
    console.log(grupo2);
    return grupo1 + '@X';
  }
);

console.log(resultado2);

