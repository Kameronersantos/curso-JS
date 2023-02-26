let num1 = 2;
let num2 = 10;
let num3 = 3.975348
let inteiroPbaixo = Math.floor(num3); 
console.log(inteiroPbaixo)
// Math.floor pega um numero de casas decimais e transforma ele em inteiro para baixo
let inteiroPcima = Math.ceil(num3);
// Math.ceil  A redonda o para cima o numero de casas decimais
let inteiroMproximo = Math.round(num3);
// O math.round a redonda pro inteiro mais proximo
console.log(Math.max(1,3,4,5,6,7,8,9)) // pega o valor maximo
console.log(Math.min(1,2,3,4,5,6,7,8,9)) // pega o valor minimo
const aleatorio = Math.floor(Math.random() *  100)
// Math.random ele tráz um numero aleatorio entre 0 e 1 e com varias casas decimais mas isso é possivel mudar isso quando vc ponha * até o numero limite que vc quer é pra não ficar com casas decimais escreva atráz Math.floor 
let raizQuadrada = Math.sqrt(36);
let raizCúbica = Math.pow(3, 1/3);

console.log(raizCúbica)
console.log(100 /0) // infinity e true (a conta deu certo)
console.log(Math.E) // a base de logartimo natural 
console.log(Math.abs(-10)) // retorna o valor absoluto

