// break e continue
// funciona em todas as estruturas de repetição(for, for in, for of, forEach, while, do while )

// continue continua para a próxima interação
// break sai do laço

const num = [1,2,3,4,5,6,7,8,9];
//  o break é o continue serve para pular alguma ação ou parar a ação que vc não queira ser executada na 
// estrutura de repetição
for(valor of num){
    if(valor === 2){
        console.log('pulei o numero 2')
        continue; // o continue ele pula o valor da condição porém mostra o resto dos valores
    }
     console.log(valor) // aqui pulou o 2
}
console.log('######')

for(valor of num){
    
    console.log(valor) // a ação que eu quero executar tem que ficar depois do continue   
    // não antes para que o valor que o continue pule aconteça 
    
    if(valor === 7){
        console.log('7 encontrado, saindo...')
        break; // quamdo ele acha o valor desejado ele para o laço de repetição
        // no caso se o break ficar depois ele executara até o valor da condição (7)
        // sé ele ficar antes ele executara todo o valor até antes da condição (6)
    }
    // break ele não mostra mais nada dos valores ele para no valor da condição
    //  ou antes dele
    if(valor === 2){
        continue; // aqui não polou o 2
    }
    
};

console.log('######')
for( i in num){
    let numero = num[i];
    console.log(numero)
    if(numero === 4) {
        console.log('encontrei o numero 5 estou saindo')
        break;
    }
}

console.log('######')
for(let i = 0; i < num.length; i++){
    let nume = num[i];
    console.log(nume)
    if(nume === 3) {
        console.log( 'achei o numero 3, thau!')
        
        break
    }
}
console.log('######')
let im = 0;
while (im < num.length ){
    let r = num[im];
    im++ // a imcrementação tem que ponhar antes da palavra continue para não ter loop infinito
    // tem ponhar antes do console.log(valor) pq entra em loop
    console.log(r);
    if(r === 2) {
        console.log('pulei o 2')
        continue;
    };
    
    if(r === 5) {
        console.log('acabou no 5')
        break;
    }
    
} 
console.log('######')
do{
    let r = num[im];
//    console.log(r);
   if(r === 2) {
      console.log('pulei o 2')
      im++
       continue;
   };
   console.log(r); // por algum motivo não deu certo com Do While
   if(r === 5) {
      console.log('acabou no 5')
      im++
      break;
   }
   im++
} while (im < num.length )
 
// Exemplo 1
for(var i = 4; i < a; i++) {
    if(i > a ? "true" :'false') continue
    console.log('caracoles')
    console.log('esta certo')
}
 
// Exemplo 2
 
let a = [5,7,9 ,8]
for(var i = 0 ; i < a.length; i++ ){
    if(a[i] == 2) break ; 
    
    
}
// Exemplo 3
 var matrix = 5;
 var sum = 0, success = false;
 
 compute_sum: if (matrix) {
     for(var x = 0; x < matrix.length; x++) {
         var row = matrix[x];
         if(!row) break compute_sum;
         for(var y = 0; y < row.length; y++) {
             var cell = row[y]
             if(isNaN(cell)) break compute_sum;
             sum+=cell;
         }
     }
     success = true;
 }