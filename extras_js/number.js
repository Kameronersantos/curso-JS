var num = 5;
var num2 = 8;
var num3 = 3.5;
let num4 = 10.45678909
console.log(num.toString() + num2) // O toString vai transformar o 'num' em string e + vai comcatenar 'num2' mas o toString só transforma em string no local que é chamado 
console.log(typeof num) // ainda é um number
num = num.toString(); 
// aqui caso vc queira mudar o valor da variavel de Number para String 
console.log(typeof num) // agora é uma String
console.log(num2.toString(2))
// quando vc coloca um 2 como aragumento no toString() ele tráz a versão binaria do numero
console.log(num4.toFixed(2))
// O to Fixed ele retorna quantas casas decimais vc quer ver (normalmente é colocado duas casas decimais)
console.log(Number.isInteger(num3)) 
// Number.isInteger() ele ve se o numero é inteiro ou não. Se for é true se não for é false
let tempo = num * 'ola';
console.log(Number.isNaN(tempo)) // quando a conta for inválida vai aparecer NaN é essa função vai detectar isso se for true sua conta está inválida é se for false sua conta é valida
let num5 = 0.7; 
let num6 = 0.1;
console.log(num5 + num6) // aqui era pra ser 0.8 porém por causa de uma imprecisão do JavaScript e também por causa de um padrão IEEE 754-2008 se torna 7.999999


// ou 
num5 += num6; // 7.999999
num5 += num6; // 8.999999
num5 += num6; // 9.999999
console.log(num5)
num5 = parseFloat(num5.toFixed(2)) // só toFixed() não resolve o problema tem que usar o parseFloat para deixar inteiro 
//ou 
num5 = Number(num5.toFixed(2)) // também da certo 
console.log(Number.isInteger(num5))

let num7 = 0.4;
let num8 = 0.6;
num7 = ((num7 * 100) + (num8 * 100)) / 100 // 1
console.log(num7)
// essa é outra forma mas é bem complicada 

// a melhor forma de resolver a imprecisão é no resultado final 
// num7 = Number(num7.tofixed(2))
// console.log(Number.isInteger(num7))
