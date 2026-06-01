// utilizadas para realizar buscas ou 
// subsitituições em strings. Colocamos a 
// string em "//"

const frase = 'javaScript';
const fraseNova = frase.replace(/a/, 'b');

console.log(fraseNova);

// a flag g, significa que é global e que retorna 
// todos os resultados;

/**
 * flag i: ignora letras maiculas e minusculas
 */
const regexpA = /Pe/gi;

'Perdeu perdido'.replace(regexpA, 'Ba');

/**
 * /[ai]/ : se colocamos os caracteres entre colchetes, estamos definindo uma classe 
 */
// Procura: Todo a, A, i, I
const regexpB = /[ai]/gi;

'JavaScript'.replace(regexpB, 'u');
// JuvuScrupt

/**
 *  caracteres que não são alfanuméricos dentro da classe
 */

// Procura: - ou .
const regexpC = /[-.]/g;

'111.222-333-44'.replace(regexpC, '');
// 11122233344


/**
 *  caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho
 */

// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
const regexpD = /Bra[sz]il/g;

'Brasil é com z: Brazil'.replace(regexpD, 'Prazer');
// Prazer é com z: Prazer

/**
 *  [-] : O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z
 */

// Busca por itens de a à z
const regexpE = /[a-z]/g;

'JavaScript é a linguagem.'.replace(regexpE, '0');
// J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z
const regexpF = /[a-zA-Z]/g;

'JavaScript é a linguagem.'.replace(regexpF, '1');
// 1111111111 é 1 111111111.

// Busca por números de 0 à 9
const regexpNumero = /[0-9]/g;

'123.333.333-33'.replace(regexpNumero, 'X');
// XXX.XXX.XXX-XX

/**
 *  [^] : // Procura: tudo que não estiver entre a e z
const regexp = /[^a-z]/g;

'Brasil é com z: Brazil'.replace(regexp, ' ');
// rasil   com z   razil 
 */

// Procura: tudo que não estiver entre a e z
const regexp = /[^a-z]/g;

'Brasil é com z: Brazil'.replace(regexp, ' ');
// rasil   com z   razil 
