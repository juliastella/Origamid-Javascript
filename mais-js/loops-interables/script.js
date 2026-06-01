/**
 *
*/

const frutas = ['banana', 'maçã', 'laranja', 'uva', 'melancia'];
const frase = 'Olá, mundo!';

for(const fruta of frutas){ //frutas é interavel
    console.log(fruta);
}

// O objeto spread só pode ser usado em objetos interaves

const carro ={
    marca: 'Honda',
    ano: 2018,
}

// se eu puxar no for, vai dar erro de não interavel

// for(const chave of carro){
//     console.log(chave);
// }

// porém exite um forma com o for in

for(const key in carro){
    console.log(carro.key);
}
const btnUnico = document.querySelector('button')
const btnStyles = getComputedStyle(btnUnico);

for(const style in btnStyles) {
    console.log(`${style}:`);
}

// do/while
// faz primeiro e depois verifica se é verdadeiro

let i = 0;

do{
    console.log(i++);
}while(i <= 5);