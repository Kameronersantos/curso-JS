const numero = Number(prompt("digite um numero"))
const h1 = document.getElementById('numero_do_titulo');
let tex = document.getElementById('texto')

let nan = isNaN(numero);
let inteiro = (Number.isInteger(numero));
let redonb = Math.floor(numero);
let redonc = Math.ceil(numero);
let raiz = Math.sqrt(numero);
let dec = (Number(numero).toFixed(2));

h1.innerHTML = numero
tex.innerHTML = `<p>Raiz quadrada do seu numero é: ${raiz} </p> `
tex.innerHTML += `<p>${numero} é numero inteiro: ${inteiro} </p>  `
tex.innerHTML += `<p>É NaN: ${nan} <br> </p>`
tex.innerHTML += `<p>Arredondamento para baixo:${redonb} </p> `
tex.innerHTML += `<p>Arrendodamento para cima: ${redonc} </p>`
tex.innerHTML += `<p>Com duas casas decímais: ${dec} </p>`
// window.document.body.innerHTML = `Raiz quadrada do seu numero é: ${raiz} <br>`
// document.body.innerHTML += `${numero} é numero inteiro: ${inteiro} <br> `
// document.body.innerHTML += `É NaN: ${nan} <br>`
// document.body.innerHTML += `Arredondamento para baixo:${redonb}  <br>`
// document.body.innerHTML += `Arrendodamento para cima: ${redonc} <br>`
// document.body.innerHTML += `Com duas casas decímais: ${dec}`