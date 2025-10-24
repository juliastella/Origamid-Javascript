const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;

// offsetTop e offsetLeft

// distancia entre o topo do elemente e o topo da página 

const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

// distancia entre o topo do elemente e o esquerdo da página 

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

// getboundingclientrect()

// Metodo que retorna um objeto com valores de width, height, distancias do elemento e mais

const rect = primeiroh2.getBoundingClientRect();

// console.log(h2left);
// console.log(rect);


// console.log(window.innerWidth, // width do janela
//     window.outerWidth, // soma dev tools também
//     window.innerHeight, // height do janela
//     window.outerHeight, // soma a barra de endereço
//     window.pageYOffset, // distância total do scroll vertical
//     window.pageXOffset, // distância total do scroll horizontal
// );

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
//   console.log('Tela menor que 600px')
} else {
//   console.log('Tela maior que 600px')
}

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img');
const selecaoImg = primeiroh2.offsetLeft;

console.log(selecaoImg);


// Retorne a soma da largura de todas as imagens

function somaImg(){
    const imagems = document.querySelectorAll('img');
    let soma = 0;

    imagems.forEach((imagem) => {
        soma += imagem.offsetWidth;
    });
    console.log(soma);
}

window.onload = () => {
    somaImg();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelector('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    
    if(linkWidth > 48 && linkHeight > 48){
        console.log(link, ' Possui boa acessibilidade');
    }
    else{
        console.log(link, 'Não possui boa acessibilidade');
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}