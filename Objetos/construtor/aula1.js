/**
 * Constructor Functions
 */

function Carro(marcaAtributo, precoAtributo) { // sempre com letra maiuscula
//   this.marca = 'Marca';
  this.marca = marcaAtributo;
  this.preco = precoAtributo; // o "this" faz referencia ao proprio objeto construído com a Constructor Function.
}

const honda = new Carro(); // o "new" cria um objeto baseando pela função que passamos
honda.marca = 'Honda';
honda.preco = 4000;

// ou o mais utilizado

const fiat = new Carro('Touro', 10000);


// Novo objeto

function Carro2(marca, precoInical) { 
  this.taxa = 1.2;
  const precoFinal = precoInical * this.taxa;
  this.marca = marca;
  this.preco = precoInical; 
}

const mazda = new Carro2('Mazda', 5000)