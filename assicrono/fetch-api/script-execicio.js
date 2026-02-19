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



// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
