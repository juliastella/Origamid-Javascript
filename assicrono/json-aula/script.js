fetch('./dados.json')
.then( responta => responta.json())
.then(json => {
    console.log(json);
})