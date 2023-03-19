let numero = prompt("digite um numero")

let nan = isNaN(numero);
let inteiro = (Number.isInteger(numero));
let redonb = Math.floor(numero);
let redonc = Math.ceil(numero);
let raiz = Math.sqrt(numero);
let dec = (Number(numero).toFixed(2));


window.document.body.innerHTML = `Raiz quadrada do seu numero é: ${raiz} <br>`
document.body.innerHTML += `${numero} é numero inteiro: ${inteiro} <br> `
document.body.innerHTML += `É NaN: ${nan} <br>`
document.body.innerHTML += `Arredondamento para baixo:${redonb}  <br>`
document.body.innerHTML += `Arrendodamento para cima: ${redonc} <br>`
document.body.innerHTML += `Com duas casas decímais: ${dec}`