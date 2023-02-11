const string = 'palavra' // string
const nome = 'irineu' // string
const numero = 10 // Number
const numero_ponto_frutuante = 10.8 // Number
let inicializar; // underfined // uma variavel que não tem um valor definido tambem não a ponta pra nenhum local na memoria
const nulo = null; // null -> tambem não a ponta pra nenhum local na memoria

// diferencias de null e umderfined
// null eu como programador ira em alumas situações irei propositalmente deixar null pra -> não a ponta pra nenhum local na memoria

// umderfined é propría linguagens JavaScript que ultiliza isso o programador não tem comtrole sobre isso

// quando vc quiser que um valor a ponte pra lugar nenhum vc utiliza null
const boolean = true; // valor boolean só pode ter 2 valores true or false (valor lógico)

console.log(typeof nulo,nulo) // O typeof pode ver o tipo de uma variavel exmplos: String, Number,Boolean, etc. É também se caso ponhar uma virgúla e depois repetir a variavel pode-se ver o valor dela.
let a = 3;
let b = a;
console.log(a,b);
a = 5;
console.log(a,b);

// NaN 
let num1 = 10;
let num2 = 'number'
console.log(num1 * num2)
// não é um numero(Not a Number)
// symbol