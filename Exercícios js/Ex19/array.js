 const bo = document.querySelector('.a');
 const texto = document.querySelector('.texto');
 const adcionarTexto = document.querySelector('.texto_adicionado');

bo.addEventListener('click',function(){
const array = [];

array.push(texto.value); // push consegue adicionar texto em html no array

const mostrarArray = JSON.stringify(array); // stringify tranforma array em uma string
const semconchete = JSON.parse(mostrarArray) // parse transforma string em array

adcionarTexto.innerHTML += `${texto.value}  ` 
 })
 