/* agora esperamos as respostas dos fetchs
*/

// async function puxarDados(){
//     try{ 
//     const responseDados = await fetch('./dados.json');
//     const jsonDados = await responseDados.json(); // para esperar a resposta também
//     document.body.innerText = jsonDados.aula;

//     } catch(erro){
//         console.log(erro);
//     }
//     // console.log(jsonDados);
// }

// puxarDados();


async function iniciarAsync() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json(); // porque o JS sempre vai dar prioridade para resolver espressoes primeiro
  const clientesJSON = await (await clientesResponse).json();

  console.log(dadosJSON);
  console.log(clientesJSON);    
}

iniciarAsync();

async function asyncSemPromise() {
  // Console não irá esperar.
  await new setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();
