/* 
 Serve para controlar o historico da sessão. É o botão de ir e voltar
*/

// window.history; // Acessa o elemento history
// window.history.back(); // vai para a anterior da navegação
// window.history.forward(); // vai para a próxima

// mudar historico e adicionar um novo item

// window.history.pushState(obj, title, url);

// obj: por conta da restrição e ser muito grande, fica null
// titulo;  não bem suportado pela paginas, é por isso fica com null
//url: muda a url

/* popState
O evento popstate pode ser adicionado ao objeto window. 
Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo.
*/

// window.addEventListener('popstate', () => {
//   fetchPage(window.location.pathname);
// });

/**
 * fecht e history
 *
 * pode gerar uma nevegação real entre páginas
 * sem a necessidade de recarregamento.
 */

const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href);
})

links.forEach(link => {
  link.addEventListener('click', handleClick);
})
