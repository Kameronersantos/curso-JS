// função geradora
// um dos recursos que a função geradora tem é de  pausar codígo endeterminado local 
// exemplo: eu tenho uma função que precisa entregar três valores mas não tudo de uma vez
// valor um a função entrega na primeira vez que chamada depois automaticamente na segunda vez que 
// chamar essa função ela entrega o valor dois é depois automaticamente na terceira  vez que 
// chamar essa função ela entrega o valor três após isso acaba a função
// resumindo: é tipo vc fazer um codigo que pode ser pausado

function* geradora() {
    // codigo de qualquer coisa
 yield 'Valor 1'       // chamar a função pela primeira vez geradora vai voltar esse o 'Valor 1'
    // codigo de qualquer coisa
 yield 'Valor 2'       // chamar a função pela segunda vez geradora vai voltar esse o 'Valor 2'
    // codigo de qualquer coisa
 yield 'Valor 3'       // chamar a função pela terceira vez geradora vai voltar esse o 'Valor 3'
};

const g1 = geradora();
const g2 = geradora();
console.log(g1) // só chamar a variavel que possui a função geradora não funciona
console.log(g1.next()) // vc tem que chamar a variavel que possui a função geradora mais o .next para mostrar o valor dela
// O valor que será mostrado é esse {value: 'Valor 1', done: false} 
// A chave value corresponde o valor retornado. 
// A chave done corresponde sé a função geradora terminou de mostrar todos os valores.
// Sé done for false a função não mostrou todos os valores
// Sé done for true a função mostrou todos os valores

console.log(g1.next().value) // adicionado .value vc vai pegar o valor da chave value 
// perceba que eu chamei a função pela segunda vez isso que dizer que agora a chave value possui 'Valor 2'

console.log(g1.next().done) // aqui foi chamada pela terceira vez é mostrara {value: 'Valor 3', done: false}

console.log(g1.next().done) // agora a função foi chamada pela quarta vez é não terá nenhum value 
// porém o done mudará para true pq todos os valores acabaram

for(let valor of g2){
   console.log(valor);
}; // o for consegue saber quantos valores tem a função geradora é vai me entregar até o ultimo valor



function* contador(){ // esse exemplo mostra um gerador infinito toda vez que vc chamar vai ter um numero maior que outro
 let i = 0;
 while(true){
    yield i;
    i++
   };
};
const n1 = contador();
console.log(n1.next().value); // 0
console.log(n1.next().value); // 1
console.log(n1.next().value); // 2
console.log(n1.next().value); // 3
console.log(n1.next().value); // 4
console.log(n1.next().value); // 5 é assim por diante quanto mais console.log(n1.next().value); mais numeros vc vai ter

console.log('');

function* geradora2(){ // a função geradora2 complementa a função geradora três
   yield 0;
   yield 1;
   yield 2; 
};

function* geradora3(){
   yield* geradora2(); // aqui é uma forama de delegar a função geradora criando função com valores para complementar
   yield 3; // outras funções geradores
   yield 4;
   yield 5;
};

const numero = geradora3();
 for( let valor of numero){
   console.log(valor)
 }


 function* geradora4(){
   yield function(){
      console.log('Vim do y1')
   };
   
   //... codigo de qualquer coisa
   
    yield function () { // é o yield o codigo de baixo funciona normalmente
      console.log('Vim do return'); // ao usar o return os codígos abaixo não são executados
   };

   
   yield function(){
      console.log('Vim do y2') // da para fazer função usando yield dentro de uma função geradora
   };

 };

 const funções = geradora4();

const f1 = funções.next().value;
const f2 = funções.next().value;
const f3 = funções.next().value;
f1();
f2();
f3();
