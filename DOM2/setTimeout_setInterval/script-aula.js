/* setTimeout()

    método assíncrono que ativa o callback após tempo.
    Não existe garantia que o código serpa executado no momento 
    que foi passado na função. Pois função callback entra na fila de espera 
*/

function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);

// um forma de para um intervalo é com cleariterval()

const contarAte10 = setInterval(callback, 1000);

let ia = 0;
function callback() {
  console.log(i++);
  if (ia > 10) {
    clearInterval(contarAte10);
  }
}
