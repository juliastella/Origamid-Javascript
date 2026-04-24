/**
 * Factory 
 * 
 * São funções que retornam um objeto sem 
 * necessariamente utilizar a palavra chave new
 */

// exemplo simples. O return pode está antes do conts também
function createObjet(text){
   // return
    const obj = {
        text: text,
    }
    return obj;
}

function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  // Podemos  impedir que os métodos e propriedades sejam modificados com Object.freeze()
  return Object.freeze({
    element: element,
    text: text,
  })
}

const comprarBtn = createButton('Comprar');

