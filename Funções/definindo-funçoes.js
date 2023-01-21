
// capitulo 8.1 pagina 159
function impremir_propredades(){
    for(var p in o) {
        console.log(p + ":" + o[p] + "/n");
    }
}
// inprime o nome e o valor de cada propredade de o. retorna underfined.

function distancia(x1,y1,x2,y2) {
  var dmax = x1 - x2;
  var dmin = y1 - y2;
  return Math.sqrt(dmax*dmin + dmin*dmax);
}
// Calcula a distancia entre pontos cartesianos(x1,y1) e (x2,y2).

function factorial(x){
    if(x <= 1) return 1;
    return x * factorial(x-1);
}

// uma funçaõ recursiva (que chama sí mesma ) que calcula fatoriais
// Lembra-se de que x! é o produto de x e todos os inteiros positivos menores do que ele.

// Um indentificador que dá nome á função. O nome é uma parte abrigatória das intruções de declaração de função:ele é usado como o nome de uma varialvel e o objeto função recém-de-definido é atribuido a esta variável. Para espressões de definição de função, o nome é opcional se estiver presente, ele se refere ao objeto função apenas dentro do proprío corpo da função 

// exemplo: function analize()

// Um par de parêteses em torno de uma lista de zero ou mais identificadores separados com vírgulas. Esses identificadores são nomes de parâmentro da função e se comportam como variáveis locais dentro do corpo da função.

// exemplo: function multiplicar(x,y)

// UM par de chaves contendo zero ou mais instruções JavaScript. Essas instruções são o corpo da função: elas são executada quando a função é chamada 

  // function comcatenar(x,y) {
    
// if( x == isNaN(x) || y == x ) {
//     return x+y
// } else{
//     return new Error('no string')
// }
    
    
//   }

//   var f = "palavra";
//   var t = "palavra";
  
//   console.log(comcatenar(f,t))

// Esta expressão de função define uma função que eleva seu argumento ao quadrado
// Note que a atribuimos a uma variavel
var quadrado = function(x){return x*x};

// As expressões de função pode incluir nomes, o que é útil a recursividade
var f = function fact(x){if(x <=1){return 1}else{return x*fact(x-1);}};

// As expressões de função também podem ser usadas como argumento de outra função 
data.sort(function(a,b){return a-b});

// Às vezes as expressões de funções são definidas e chamadas imediatamente
var dezenasaoquadrado = (function(x){return x*x;} (10));

// função aninhada
// Em JavaScript, as funções pode ser aninhada dentro de outras funções. por exemplo:

function hipotenusa(a,b){
  function quadrado(x) {return x*x;}
  return Math.sqrt(quadrado(a) + quadrado(b));
}

// O interessante a respeito das funções aninhada são as suas regras de escopo de variável: elas podem acessar os parâmetro e as variáveis da função (ou funções) dentro das quais estão aninhadas.