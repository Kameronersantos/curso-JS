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

// para saber sé vc está trabalhando com array da também para saber quando vc está
// trabalhando com objeto date ou só com objeto
const o  = {}
const d = new Date();
const n = 2;
console.log(a instanceof Array);
console.log(o instanceof Array); // quando vc verifica sé um objeto é array retorna false
console.log(d instanceof Date); // retorna true o objeto date
console.log(p instanceof String); // mesmo p sendo uma String retorna false
console.log(n instanceof Number); // mesmo n sendo um Number retorna false

// um valor de const é mutável apenas como Array ou Objeto
// como variavel essa mudança de valor não se aplica

// ISSO PODE 
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]

// ISSO NÃO PODE
const arra = [1, 2, 3, 4, 5];
// arra = 'Legal'; // deixa em comentario para não dar erro


// exercicío

var numero = 1;
var aray = [3,4,5,6,7,8];
console.log(aray.slice(1,6))


function factorial(a,ini,ifin){
   if( a.length < 0) throw new Error('array não pode ter nada ');
   var ini = aray.slice(0,1);
   var ifin = aray.slice(4,5);
   
   for(var inicio = ini; ini < ifin; );
 
 

}
console.log(factorial(aray,aray[0],aray[5]))


var somar = function(a) {
    if(a === undefined) return new Error;

   return a + a
}