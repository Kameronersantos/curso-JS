// o forEach só pode ser disponivel dentro de arrays
// é uma forma de repetição como for,do,while,for in, for of
// é também consegue fazer coisas parecida com reduce
// o forEach só faz interação sobre o array

const a1 = [1,2,3,45,6,7,87]
let total1 = 0
a1.forEach(function(valor,indice, array){
   return total1 += valor
})

console.log(total1)