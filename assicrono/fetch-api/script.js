/* o fecht permite fazer requisiçoes HTTP, ele é de resolução de promise
*/

const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// com arquivo .txt
    // forma 1
    // doc.then(resolucao => {
    //     resolucao.text().then((body) => { // a resoluçao da promessa em texto
    //         console.log(body);
    //     })
    // })

    // forma 2

    doc.then(resolucao => {
        return resolucao.text();
    }).then((body) => {
        const conteudo = document.querySelector('.conteudo');
        conteudo.innerText = body;
    })

// pegando da url

// then(response => response.json())
// .then(body => {
//   console.log(cep.bairro, cep.logradouro);
// });

/* o blob() serve para representar um arquivo, porque ele não se parece
com algo que o js. consiga lidar, por exemplo imagem. o Js não consegue ler
*/

const imagem = fetch('./image45.png');


imagem.then(Response => Response.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body); // transformei e url
    const imagemDom = document.querySelector('img'); 
    imagemDom.src = blobUrl; // coloquei a url na minha tag de imagem
});

/* o clone() serve para clonar a resposta, pois depois que uma resposta foi enviada
não conseguimos alterar*/

/* .status e .ok, se foi 404, 200, 202 e mais, o ok retorna um boolean de true
secesso de false sem sucesso*/

/* .url retorna o url da requisição. .type retorna o tipo da reposta.*/

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites




