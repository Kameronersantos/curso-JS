// operadores Aritméticos
// + mais -> adição e a concatenação
// - menos -> subtração
// * mutiplicação
// / divisão
// ** ponteciação // aqui verifica ao quadrado exemplo: 5 ** 2 = 25
// %  resto da divisão
// ++ incremento
// -- decremento
const nu1 = 10;
const nu2 = 20;
const nu3 = '23'
console.log(nu1 + nu2); // Adição
console.log(nu2 + nu3); // concatenação
console.log(nu1 ** nu2) // ponteciação
console.log(nu1 % nu2)  // resto da divição

// precedencia dos operadores
/*
1° () 
2° ** 
3° * / %
4° + -
*/

// Operador de incremento

let contador = 1;
++contador; // 2 // todo contador que eu adiciono aumenta 1 
contador++; // 3
++contador; // 4
contador++; // 5
console.log(contador++) // primeiro ele executou o console.log depois ele incrementou
console.log(contador)
console.log(++contador) // este aqui incrementou primeiro 

// operador de decremento
--contador
console.log(contador)

// para incrementar mais de 1 sem for()
const passo = 2
let comte = 0
comte = comte + passo
console.log(comte)
// outra forma mais pratica 
comte += passo
console.log(comte)
comte *= passo
console.log(comte)
comte -= passo
console.log(comte)
comte /= passo
console.log(comte)
comte **= passo
console.log(comte)
// da pra fazer isso com qualquer operador aritmético basico

// Nan
let num1 = 10;
let num2 = 'number'
console.log(num1 * num2)
// não é um numero(Not a Number)
let num3 = parseInt('30') // esse parseInt comverte um valor de numero que esta em string para Number e também para numrero inteiro
let num4 = "44"
console.log(num1 * num4) // aqui o JavaScript da uma mãozinha
let num5 = parseFloat("46.8") // comverte o numero para decimais
let n3 = Number(num3)

num5 = parseFloat(num5.toFixed(2)) // só toFixed() não resolve o problema tem que usar o parseFloat para deixar inteiro 
//ou 
num5 = Number(num5.toFixed(2)) // também da certo 
console.log(Number.isInteger(num5))

