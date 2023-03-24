/*

Vprimitivos: String, Number, boolean, null, underfined, (bigint, symbol)
(Valores primitivos são do tipo imutaveis) => não pode mudar elês

VPreverencia: - Arrays, objetos,function
(valores por referencia são mutaveis)

*/

// valor primitivo

let nome = 'gustavo';
nome = 'antonio' // nesse caso vc não esta mudando o valor primitivo vc
nome[0] = 'k' // Porém não posso alterar os valores dos indíces
console.log(nome[0],nome) // só está trocando o valor da variavel

let a = 'A';
let b = a; // aqui estou fazendo uma cópia da variavel (a)
console.log(b,a)
a = 'outra coisa';
console.log(a,b) // aqui como vc pode ver eu não afeto o valor do (b) em nada

// valor por referencia

let A = [1,4,6];
let B = A; // não copia 
console.log(B,A)
A[3] = 7;
B[4] = 3; // tanto (A) quanto (B) apontam para o mesmo valor 
console.log(A,B)
A.push('oi');

console.log(A,B) // e quando acresento algo ou tiro na variavel (A) 
// acontece o mesmo com (B)
B.push(2)
delete B[4]
let C = [...B] // para poder copiar o valor de (A) de um array
console.log(C)
let ob = {
    nome:'julio',
    sobrenome:'comsielo'
}
const co = {...ob};  // para poder copiar o valor de (ob) de um objeto
ob.nome = 'flavio'
console.log(ob, co)

// (B) referencia (A) na memoria do computador não é copia (B) está apontando para (A)

// RESUMO 
let v = 'Barralho'
let c = v // se for um tipo de valor primitivo ele copia se usar (=)
v = 'Casildes' // se a variavel inicial for mudada 
console.log(v,c) // A variavel copiada não se altera 
let o = {x:5};
let nc = o // se for um valor por referencia ele não copia ele a ponta para o mesmo valor se usar (=)
o.y = 4; // se a variavel inicial for mudada 
console.log(nc,o) // essa variavel replica a mesma mudança da variavel inicial

