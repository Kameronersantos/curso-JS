// Array não tem a mesma indexação de uma string 
//         0123456
const p = 'Palavra'
// Array são indexados por elemento é sempre vai começar no 0
//            0       1         2     até o fim do Array
const a = ['João', 'Maria', 'debora',];
console.log(a[0]) // assim a gente chama o elemento. Nesse exemplo é 0
// só da para acessar por [] de outro jeito da ERRO
console.log(a) // array completo

a[0] = 'Kamerone' // Assim vc edita o Array
console.log(a[0]) // agora mudou para Kamerone
console.log(a) // mudou o array inteiro tambêm

a[3] = 'julia' // assim tambem serve para adicionar um novo elemento
console.log(a.length) // para descubrir o tamanho do array
a[a.length] = 'edu' // uma das formas adicionar um elemento por último no array
a.push('vinicius'); // função que adiciona no fim
a.pop('vinicius'); // função que exclui o elemento o fim
a.unshift('Diego'); // função que adiciona no inicio
a.shift('Diego'); // função que exclui o elemento no ínicio
console.log(a)

// tudo isso que aconteceu altera os indexses
// só o pop que não altera pq ele remove o elemneto final
// delete a[1] // deleta um elemento pórem ele vai ficar vazio
console.log(a.slice(0,3)); // eu fatio o array nesse caso peguei 0 até o 3
console.log(a.slice(0 -2)); // fatio com numeros negativos é pego os dois últimos

// para saber sé vc está trabalhando com array
console.log(a instanceof Array);

