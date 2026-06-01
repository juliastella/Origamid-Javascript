/**
 * . : selecionar qualquer caracter, 
 * menos quebras de linha 
 */

// Procura: todos os caracteres menos quebra de linha
const regexpA = /./g;

'JavaScript é a linguagem.'.replace(regexpA, '0');
// 0000000000000000000000000

/** word
 * \w : irá selecionar qualquer 
 * caracter alfanumérico e o underline 
 */

// Procura: todos os alfanuméricos
const regexpB = /\w/g;

'Guarda-chuva R$ 23,00.'.replace(regexpB, '-');
// ------------ -$ --,--.

/** not word
 * \w :  tudo o que não for caracter alfanumérico 
 * e o underline.
 */

// Procura: o que não for caracter alfanuméricos
const regexpC = /\W/g;

'Guarda-chuva R$ 23,00.'.replace(regexpC, '-');
// Guarda-chuva-R--23-00-

/** 
 * \d :  irá selecionar qualquer dígito
 */

// Procura: todos os dígitos
const regexpD = /\d/g;

'+55 (21) 2222-2222'.replace(regexpD, 'X');
// +XX (XX) XXXX-XXXX.

/** 
 * \D :  rá selecionar tudo que não for dígito.
 */

// Procura: o que não for dígito
const regexpF = /\D/g;

'+55 (21) 2222-2222'.replace(regexpF, '');
// 552122222222

/** 
 * \s :  irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.
 */

// Procura: espaços em branco
const regexpE = /\s/g;

'+55 (21) 2222-  2222  '.replace(regexpE, '');
// +55(21)2222-2222

/** 
 * \S : irá selecionar qualquer caracter que não for espaço em branco.
 */
// Procura: o que não for espaço em branco
const regexpG = /\S/g;

'+55 (21) 2222-  2222  '.replace(regexpG, '');
// XXX XXXX XXXXX  XXXX  

/** 
 * Quantificador : seleciona caracters seguidos
 * como /bbb/g irá selecionar apenas bbb.  
 */
 // Procura: 4 a's seguidos
const regexpR = /aaaa/g;
const regexpAlt = /a{4}/g;

'Vaaaai ali por favor.'.replace(regexpR, 'a');
// Vai ali por favor.  

/** 
 * Quantificador Min e Max :o min e max do quantificador 
 * /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes  
 */

// Procura: dígitos seguidos de 2 à 3
const regexpJ = /\d{2,3}/g;

'222.333.222.42'.replace(regexpJ, 'X');
// X.X.X.X

// Procura: letras seguidos com 1 caracter ou mais
const regexpLetras = /\w{1,}/g;

'A melhor linguagem é JavaScript'.replace(regexpLetras, 'X');
// X X X é X
