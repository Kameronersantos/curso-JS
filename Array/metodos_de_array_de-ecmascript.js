// metodo forEach()
// pagina 149
// o forEach() ele chama uma função pra trabalhar com o array nesta função pode usar três argumantos no maximo o primeiro sé refere ao valor do elemento o outro ao índice do array é o terceiro o array em sí mas pode também trabalhar com só o argumento do valor do array 
var dias = ["oi"]

var soma = 0 
  dias.forEach(function(valor){soma+=valor}) // aqui tem só o argumento do valor do array

  dias.forEach(function(v,i,a){a[i] = v+1} // aqui tem os três argumentos
  )
console.log(dias) 

// o forEach não uma maneira de terminar a interação antes que todos os elementos tenha sido passados na função caso precise terminar antes a chamada de forEach() dentro do bloco try. Se a fuunction passada para foreach() lança foreach.break, é o laço termina antes
var foreach = [5,6,6]
function foreach(v,i,a) {
  
  try{v.forEach(i,a);}
  catch(e){
    if(e == foreach.break) return;
    else throw e;
  }
}
foreach.break = new Error("pare a interação")

// metodo map
// pagina 150
// esse metodo ele passa cada elemento do array em que é chamado para funçao especificada e retorna um array contendo os valores retornados por essa função e ele retorna um novo array
var a = [1,2,3];
var b = a.map(function(x){return x+x});
console.log(b);

// metodo filter 
//  ele retorna um array contendo o subconjunto dos elementos do array que chamado. A function e passada para ele predicado uma função que rerorna true ou false. Se o valor de retorno true ou o valor se converte em true então o elemento passado para o predicado é menbro do subconjunto e é adicionado no array que se tornara o valor de retorno 
var d  = [1,2,37,8,9,,];
menorvalor = d.filter(function(x){return x < 3})
console.log(menorvalor);
osuotros = d.filter(function(x,i){return i < 4 && i > 1})
console.log(osuotros)
// caso tenha valores espersos para fechar a lacuna de um array esparso 
var esparso = d.filter(function(){ return true;} ) 
// para fechar  as lacunas e remover os elementos indefidos e nulos vc pode usar o filter como a seguir
var vazio = d.filter(function(x){x == undefined && x != null;})

// metodo ever() é some()
// esses metodos voltam true ou false de acordo do resultado da função que se-aplica no array 
var hj = [1,2,3,4,5,10,];
// Ever ele retorna true se função de predicado retorna true para todos os elementos do array

console.log(hj.every(function(x){return x <= 10; })) // verdadeiro todos os valores são menores que 10
console.log(hj.every(function(x){return x% 2 === 0;})) // falso nem todos valores são par

// some ele retorna se existem pelo menos um elemento correspondente ao resultado da função, ele retorna false  se o resultado não corresponde a nem um elemento do array  

var jh = [1,2,3,4,5,6,7,]
console.log(jh.some(function(x){return x% 2 === 0;})) // verdadeiro alguns valores são par
console.log(jh.some(isNaN))// aqui mostra se o array tem um não numero como exmplo: String, object , array , etc.

// every retorna true e some retorna false qundo os array estão vazios 

// metodos reduce(), reduceRight()
// pagina 151 a 152
// eles combinam os elementos de um array usando a função especificada para produzir um valor único 
// Essa operação comum na programação funcional também é conhecida pelos nomes injetar e dobrar. Exemplos ajudam a ilustrar como isso funciona

// metodo reduce() recebe dois argumento O primeiro é a função que efetua a operação de redução. A Tarefa dessa função de redução é combinar de algum modo ou reduzir dois valores a um único é retornar o valor reduzido. O segundo argumento (opicional) é valor inicial a ser passado para função "no caso se trata do valor colocado depois função return"

var sm = [1,2,3,4,5,6];                     
var soma = sm.reduce(function(x,y){return x+y},0); // soma de valores 
var produto = sm.reduce(function(x,y){return x*y},2); // produto de valores 
var max = sm.reduce(function(x,y){return(x>y)?x:y;}); // maior valor
console.log(soma);

// metodo reduceRight()
// ele é quase igual ao reduce exceto que processa o array do índice mais alto  para mais baixo (da direita para esquerda), em vez do mais baixo para o mais alto. Talvez vc queira fazer isso se a operação de redução tiver procedêcia da direita pra esquerda por exemplo:
var ex = [2,3,4];
var big = ex.reduceRight(function(acumulador, valor){
 return Math.pow(valor,acumulador);
})
console.log(big)

// reduce e reduceRight() não se destinam de calculos matematicos ele consegue operar object podemos calcular qualquer uniao de objetos usando a função uniao() 


var obj = [{x:5}, {y:10}, {n:7}];

function extend (o,p){
  for(prop in p ) {
    o[prop] = p[prop];
  }
  return o
}
function uniao(o,p){return extend(extend({},o),p);}

var marged = obj.reduce(uniao);
console.log(marged)
var objs = [{x:5,d:6}, {f:8,d:9},{w:9,d:10}];
var leftunion = objs.reduce(uniao);
var rightunion = objs.reduceRight(uniao);
console.log(objs)
console.log(leftunion)
console.log(rightunion)

// esse exmplo calcula  a uniao  dos obejetos é retorna um novo objeto com que tem propriedades de todos objetos incluidos no array 

// quando tem dois objetos com a mesmo nome de propriedade com esse nome, a função union() ultiza o valor dessa  propriedade do primeiro argumento, assim reduce() é reduceRight() podem trazer resultado diferentes
 var lista = [ {us1n:"kamerone",us1i:22,us1e:"solteiro"}, {us2n:"Andre"}];


//  metodo indexOf() e lastindexOf()
// pagina 153
// Eles procuram um elemento com o valor especificado com valor em um array e retorna o índice do primeiro elemento encontrado com esse valor ou caso não ha nenhum valor correspondente retorna -1
var g = [0,1,2,1,0];
console.log(g.indexOf(1)); // ele localiza o valor 1 da esquerda pra direita 
console.log(g.lastIndexOf(1)); // ele locliza o valor 1 da direita pra esquerda 
console.log(g.indexOf(3)) // como não ha o valor correspondente ele retorna -1

// Ao contrario dos outros métodos o indexOf() e lastindexOf() não recebem um argumento como função. O primeiro argumento é o valor pesquisado é o segundo argumento é opicional: ele especifica o índice do array em que a pesquisa deve começar. Se esse argumento é omitido o indexOf() começa no ínicio e o lastindexOf() começa no fim.  valores negativos são permitidos para o segundo argumento e saõ tratados como deslocamento em relação ao fim do array , assim como acontece no metodo splice(): um valor -1, por exemplo , especifica o último elemento do array.

function achar() {
  var resultados = [],          // O array do indice que vamos retornar 
  comprimento = a.length,       // O comprimento do array a ser pesquisado 
  posição = 0;                  // A posição inicial da pesquisa 
  while(posição < comprimento) {// Emquanto houver mais elementos para pesquisar 
    pos = a.indexOf(x,posição); // pesquisa
    if(posição == -1) break;    // se nada for encontrado , terminamos.
    resultados.push(posição);   // caso contrario, armazena o índice no array 
    posição = posição + 1;      // e começa a proxima  busca no proximo elemento

  }
  return resultados             // Retorna o array de índice

}

// essa função pesquisa um array em busca de um valor especifico e retorna um array com todos os índice coincedentes. isso demostra como o segundo argumento de index() pode ser usado para localizar  coincedências além da primeira.

