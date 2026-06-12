/**
 * Valores padrões para cep
 * - sempre tem 5 digitos
 */
const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
];

for(cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}

/**
 * Para cpf
 * - ser tiver ponto;
 * - traço e traço somente ao final 
 * - e só os números
 */

const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000'
];

for(cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF));
}

/**
 * Para cnpj
 * - ser tiver ponto, travessao, e traço ao final;
 * - somente traço; 
 * - e só os números
 * - ponto e travessao
 * - tres pontos
 * - quatro pontos
 */

const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
];

for(cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ));
}

// positive lookahead 
/*se tiver na frente seleciona:
(?=) - positive lookahead
(?!) - negative lookahead
(?<=) - positive lookbehind
(?<!) - negative lookbehind

(?>) - atomic group*/

const seleciona = /[\w]+(?=>)/g1;