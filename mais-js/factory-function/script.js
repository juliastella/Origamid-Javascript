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

