// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputForm = document.getElementById('cep');
const btn = document.getElementById('enviar');
const mostraResultado = document.querySelector('.resultado')

btn.addEventListener('click', (handleClick));

function handleClick(event){
    event.preventDefault();
    const cep = inputForm.value;
    buscaCep(cep)
}

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        mostraResultado.innerText = body;
    })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcPrice = document.querySelector('.btc');

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        console.log(btcJson);
        
        document.querySelector('.btc').innerText = btcJson.BRL.buy;
    })
}

setInterval(fetchBtc, 5000);

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnPiada = document.querySelector('.proxima');
const pPiada = document.querySelector('.piada');

function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then( response => response.json())
    .then(piada => {
        pPiada.innerText = piada.value;
    })
}

btnPiada.addEventListener('click', puxarPiada);
puxarPiada();
