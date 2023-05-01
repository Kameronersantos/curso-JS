// const paragrafo = document.querySelector('.paragrafo');
// O querySelector só seleciona o primeiro elemento da class(paragrafo)  
// ou id  do html
const para = document.querySelectorAll('.paragrafo p');
// porém se vc usar O querySelectorAll ele pega todos os elementos da class(paragrafo) ou id do html


// com isso vc cria uma NodeList e parecido com array mas não é ele 
// é usado no dom mas da para trabalhar como um array

const estiloFundo = getComputedStyle(document.body)
// getComputedStyle ele pega etilo css dos elementos html
const backgroudCor = estiloFundo.backgroundColor;
console.log(backgroudCor)

for(let p of para) {
  const fundo = getComputedStyle(document.body);
  const cor = fundo.backgroundColor;
  document.body.style.color = cor // da para fazer isso com ou sem o valor do p 
  p.style.backgroundColor = 'black'
  p.innerHTML = 'Agora ficou Azul'
  
}