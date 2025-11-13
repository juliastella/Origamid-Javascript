/**
 * Objeto nativo
 * 
 * são aqueles definidos na especificação da linguagem e 
 * são implementados independente do host.
 * 
 * Construtores de objetos nativos:
  Object
  String
  Array
  Function
*/

/**
 * Objeto do host
 * 
 * são objetos do DOM que não existem fora do navegado, ou seja no node
 * não existe.
 * 
 * Construtores de objetos nativos:
  NodeList
  HTMLCollection
  Element
*/

/**
 * Objeto do user
 * 
 * são os objeto que criamos
 * 
 * const Pessoa = {
  nome: 'júlia';
}
*/

/**
 * bibliotecas
 * 
 * Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e 
 * adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de 
 * soluções nativas, torna as mesmas obsoletas.
 * 
 * $('a').addClass('ativo');
$('a').hide();
$('a').show()
}
*/

/**
 * Verifica se existe
 * 
 * O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, 
 * ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.
 * 
 *if (typeof Array.from") 
if (typeof NodeList !== "undefined"); // se for false, realmente não existe

*/

// Liste 5 objetos nativos
Object
String
Array
Function
Number

// Liste 5 objetos do browser

NodeList
HTMLCollection
Element
className
document

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

// tem que pesquisar!