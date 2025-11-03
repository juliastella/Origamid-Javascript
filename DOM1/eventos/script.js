/**
 * addEventListener
Adiciona uma função ao elemento, esta chamada de callback, que será ativada 
assim que certo evento ocorrer neste elemento.
 */

const img = document.querySelector('img');


function callback(event){
    console.log(event);
}

const animaisListas = document.querySelector('.animais-lista');

function callbackList(event){
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);

}


img.addEventListener('click', callback);

/**
 * event.preventDefault()
Previne o comportamento padrão do meu evento
 */

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault();
    //console.log(event);

    /**
     * This
     * 
     * A palavra this dentro do callback, faz referencia ao elemento
     */

    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);
}

linkExterno.addEventListener("click", handleLinkExterno);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
 const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinkInterno(event){
    event.preventDefault(); 

    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });

    event.currentTarget.classList.add('ativo');
}

 linksInternos.forEach((link) => {
    link.addEventListener('click', handleLinkInterno);
 });

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
    // console.log(event.currentTarget);   
}


todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
})

//  console.log(todosElementos);
 

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
 function handleClickT(event){
    if(event.key === 't'){
        console.log("Clicou T");
    }
 }

window.addEventListener('keydown', handleClickT)

