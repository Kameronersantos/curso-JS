// filter map reduce

// filter
// é uma função que filtra os dados que vc precisa 
//               0 1  2 3 4  5  6 7 8 9 
const numeros = [1,5,46,3,2,45,67,1,8,9];
// o primeiro argumento que o método filter vai receber automaticamente valor do array é esse valor vai se chamar até
// o array acabar primeiro ele vai ver o 1 depois vai ver o valor 5 dai o 46 é assim por diante até o array acabar

// o segundo argumento é o indice que a método filter vai receber automaticamente 
// o terceiro argumento é o Array Completo que a método filter vai receber automaticamente

// no primeiro argumento ela quer saber se vc quer o valor acima de 10 novo array ou não
// por isso ela pede um valor boleano

// filter -> sempre vai retornar um Array com a mesma quantidade de elementos do original ou menos
// ele não modifica os elementos ele só retorna de acordo com os paramêtros dados 
// exemplo: numeros.filter(valor=> valor > 10) aqui vai voltar todos os numeros acima de 10
const numerosFiltrados = numeros.filter(valor=> valor > 10);

    // console.log(valor,indice,array) // perceba que o valor ele passa por um laço de repetição
    // indice, valor e array esses dados vem automaticamente no método filter
console.log(numerosFiltrados)

const pessoas = [
    {nome:'kamerone', idade: 23},
    {nome:'Otavio', idade: 55},
    {nome:'Miranda', idade: 18},
    {nome:'Julia', idade: 43},
    {nome:'Eloiza', idade: 15},
    {nome:'joão', idade: 67},
    {nome:'Cladia', idade: 37},
];

const pessoas2 = pessoas.filter(valor => valor.nome.toLowerCase().startsWith('j'));
const osSimquentois = pessoas.filter(valor => valor.idade > 50 );
const nomeCom5Letras = pessoas.filter(valor => valor.nome.length > 5 );
const terminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a')); 
console.log(pessoas2)

const nomes = ['kamerone', 'Otavio','Eloiza','Cladia','Julia','joão'];

const n = nomes.filter((arr) => arr.length == 6);
const i = nomes.filter((arr) => arr.toLowerCase().startsWith('j')); 
// startWith() esse metodo funciona só com string e volta as palavras que começa com a letra escolhida como argumento
// exemplo: startWith('k') vai voltar todas as palavras que inicia com a letra "k" 
// startWith('k') ou endsWith('a') funciona tanto para array como para objeto
// endsWith() esse metodo funciona só com string e volta as palavras que termina com a letra escolhida como argumento
// exemplo: endsWith('a') vai voltar todas as palavras que termina com a letra "a"
console.log(i);


// map 
// ela é parecida com filter pórem ela modifica os elementos do array
// agente vai receber o array no mesmo tamanho original pórem com valores modificados
// numeros.map(valor,indice,array)
// indice, valor e array esses dados vem automaticamente no método map
// map sempre vai ter o tamanho original é não sé pode diminuilo 

const dobrarNUmeros = numeros.map(valor => valor * 2) // aqui mostra que valores pode ser adicionados e
// modificados
console.log(dobrarNUmeros) // no parâmetro mostra que o valor foi mutiplicado por 2 é isso cria um array 
// totalmente novo com outros valores

const soNome = pessoas.map( obj => `${obj.nome}`)
const soIdade = pessoas.map( (obj) => ({ idade: obj.idade})) // quando vc tiver que returnar um objeto em uma
// arron função adicione o objeto dentro de um parêntese fazendo isso não vai dar erro

const addId = pessoas.map(function(obj,indice) { // aqui vc pega o objeto original vc não faz uma copia sé caso 
    // essa for sua intenção beleza mas caso não seja faça isso

    const newObjeto = {...obj} // isso faz uma copia do objeto é isso serve para array também
    newObjeto.id = indice; 
    return newObjeto; 
})
console.log(addId);


// reduce
// ela é mais usada para reduzir um array em um unico elemento
// exemplo vc quer saber a soma de todos os valores de um array sé vc utilizar reduce vc terá mais facidade nisso
// também reduce faz as mesma coisa do que map e filter porém não é acomselhado a fazer isso
// numeros.reduce(function(acumulador,valor,indice,array){},0) o reduce ao lugar de map e filter recebe 
// automaticamente 4 argumentos é um 5 em caso vc precisa que o acumulador inicia com algum numero
// retornar um array com pares faça isso com filter
// é a questão de dobrar o valor deixa para o map
// o reduce é mas para tranformar um array em um elemento

const total = numeros.reduce(function(acumulador,valor,indice,array){
 acumulador += valor 
//  console.log(acumulador,valor) // após o inicio ser 0 aparece varios underfined pq sempre eu preciso retornar um valor
//  para que o meu acumulador tenha um valor
return acumulador
})
console.log(total)

const pares = numeros.reduce(function(acumulador,valor){
    if(valor % 2 !== 0) acumulador.push(valor)
     return acumulador
},[])
   console.log(pares)

   const dobrar = numeros.reduce(function(acumulador,valor){
     acumulador.push(valor * 2)
     return acumulador
},[])
   console.log(dobrar)

   const totalDosPares = numeros.reduce(function(acumulador,valor){
   if(valor % 2 === 0){ acumulador += valor }
   
   return acumulador
   },0)
   console.log(totalDosPares);
   
   const pessoasMaisVelha = pessoas.reduce(function(acumulador,valor){
        console.log(acumulador,valor) // o acumulador é o primeiro objeto dentro do array
        // é o valor é o segundo, inicialmente
       if(acumulador.idade > valor.idade) return acumulador // nesse caso tem retornar o valor e o acumulador  
       return valor
    //  o acumulador é o primeiro objeto dentro do array é o valor é o segundo em caso o valor for maior do que o acumulador
    // o acumulador se torna o valor é se o valor ache outro maior o acumulador sé torna o valor de novo fica assim até acabar o
    // array

    //
//     const pessoas = [
//     {nome:'kamerone', idade: 23}, // acumulador 
//     {nome:'Otavio', idade: 55}, valor aqui o valor é maior do que acumulador agora esse objeto é // acumulador
//     {nome:'Miranda', idade: 18}, // valor
//     {nome:'Julia', idade: 43}, // valor
//     {nome:'Eloiza', idade: 15},// valor
//     {nome:'joão', idade: 67}, // agora esse valor é maior do que acumulador então o acumulador passa ser esse objeto
//     {nome:'Cladia', idade: 37},// valor como não há mais objeto para ser verificado o laço de repetição acaba aqui 
                              // retornado o no parâmetro valor o objeto {nome:'joão', idade: 67}
// ];

      })
    console.log(pessoasMaisVelha);


// map + reuduce + filter 
// retorne o total do dobro dos pares
const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor *2).reduce(function(ac,valor){
return ac += valor
})


// [ 46, 2, 8 ] pares
// [ 92, 4, 16 ] dobro
// 112 total


console.log(numerosPares)