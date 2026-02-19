/* a promisse é uma função construtora. Ela é um promessa, então passa dois pensamentos
o de resolver e o rejeitar. Dentro dela é passasdo um função de callback, nela é passado os parametros
de resolve e reject que são duas funçoes
*/
// eu posso passar um paramentro também
const promesa = new Promise((resolve, reject) => { // ou assim const promesa = new Promise(function(resolve, reject) {
// Se for true vai aceita, poré ser for false barra
let condicao = true; 

if (condicao) {
 resolve({nome:'Andre', idade: 28});
}
 else{
    reject(Error('Um erro ocorreu'))
}

});

// o metodo then() fica esprerando a promessa ser resolvida 
// passa uma funco de callback
// promesa.then((resolucao) => { // ou promesa.then((resolucao => {console.log(resolucao))
//     console.log(resolucao);
// })
// console.log(promesa);
 
// podemos colocar vaios then() em cadeia

const retorno = promesa
.then(resolucao => resolucao)
.then(resolucao =>{ // é claro que esse de baixo só vai funcionar quando o de cima for valido
    console.log(resolucao);  
    // o catch() é quando a promisse for rejeitada
}).catch(rejeitado => {
    console.log(rejeitado);
    // o finally vai executar assim que a promessa acabar, ele sempre sera executado mesmo
    // que a promessa acabe com erro ou funcionando
    // ele também não recebe um paramentro
}).finally(() => {
    console.log('Acabou');
})

console.log(retorno);

/* all ele retorna uma promessa também, porém só funciona se todos forem resolvidos
ou pelo menos um for rejeitado
*/

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]); // dentro passa um array das promises

tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});

// O race ele é basicamente a mesma coisa do all, porém ele espeara a primeira promesi ser resolvida
// é como o primeiro qiue caregou mostra para o usuario

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
  console.log(resposta); // Login Efetuado
});