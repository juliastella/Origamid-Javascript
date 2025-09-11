// operadores aritmémticos Unários

var incremento = 5;
console.log(incremento++); // 5, porque retorna o valor anterior, ou seja 5
console.log(incremento); // 6


var incremento2 = 5;
console.log(++incremento2); // 6        
console.log(incremento2); // 6

var frase = 'isso é um teste';
//+frase; // NaN
//-frase;

var idade = '28';
//+idade; // 28 (número)
//-idade // -28

//console.log(+idade + 5); // 33

//var possuiFaculdade = true;
//console.log(+possuiFaculdade / 1)

// execicio

var total = 10 + 5 * 2 / 2 + 20;

console.log(total);

var span = 'toda a ideia é falsa' / 3 ;
//console.log(span)

var somaString = '200';
var somaString2 = 50;
console.log(+somaString + somaString2); //250

// incrementa o numero e retorna o seu valor investido

var incrementa3 = 5;
console.log(++incrementa3);

var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; 
var pesoPordois = peso / 2;


console.log(pesoPordois);



