function pesquisa(){

let gerar = document.getElementById('gerar');
let resultado = (document.getElementById('resultado'));
gerar.addEventListener('click', compararResultado);

function compararResultado() {
let p1 = (document.getElementById('nome1'));
let p2 = (document.getElementById('nome2'));
let i1 = (document.getElementById('ano1'));
let i2 = (document.getElementById('ano2'));

    if((i1.value.length == 0 || i2.value.length == 0 ) || (p1.value.length == 0 || p2.value.length == 0) ) {
        alert('prencha todos o dados');
    } else if(i1.value < i2.value ){
       resultado.innerHTML =`<p>${p2.value} é mais velho do que ${p1.value}<p/>`
    } else if (i1.value > i2.value) {
        resultado.innerHTML = `<p>${p1.value} é mais velho do que ${p2.value}<p/> `
    } else {  
     resultado.innerHTML = `<p>${p2.value} tem a mesma idade ${p1.value}<p/>`
    } 
}





}

pesquisa()