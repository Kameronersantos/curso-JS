alert("Olá,Mundo!") // alert não retorna nada
let comfirma = confirm("tém certeza disso") // comfirm retorna true ou false
prompt("dígite o seu nome")
// toda função pode ou não retornar um valor 
let num1 = prompt("Dígite um número");
let num2 = prompt("digite um outro numero");
num1 = Number(num1);
num2 = Number(num2);
const resu = num1 + num2
console.log(typeof num1, typeof num2)
alert(`O resultado da conta ${num1} + ${num2} é ${resu}`);

 let varA = 'A'; // C
 let varB = 'B'; // A
let varC = 'C'; // B

const g = varA;
varA = varC;
varC = varB;
varB = g;
[varA,varB,varC] = [varC, varA,varB];


console.log(varA,varB,varC)

