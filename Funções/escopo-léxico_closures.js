// escopo léxico

const nome = 'luiz' // sé eu apago essa variavel vai aparecer variavel não está definida(nome is not defined)

function falaNome(){
    console.log(nome) // aqui buscou a variavel nome dentro do seu escopo que era Otavio é executou 
};
// falaNome(); // vai mostrar o nome

// O escopo léxico signfica que a função conhece onde foi declarada é  tudo que ta dentro dela 
// é o que tá nos vizinhos delá ao sé falar o vizinho sé refere a uma bolha exemplo:
// sé vc busca uma variavel nesse caso estou buscando nome dentro da função é está variavel não está dentro da função
// ele vai buscar no pai dela
// (isso pode ser uma função detro de outra função dentro de um objeto ou dentro de for() ou de um if())
// e sé ele não encontrar no pai dela ele procura no pai do pai dela é assim por diante até chegar no escopo global
// e sé ele não estiver no escopo global vai dar um erro e esse erro é a variavel não está definida 

function UsaFalaNome(){
    const nome = 'Otavio' // sé a variavel nome que era Otavio vier para essa função não vai ser executada
    // pq a variavel nome está sendo chamada em outra função;
    // console.log(nome) // sé eu chamar a variavel nome nesta função ela vai ser executada em caso de não chamar ela
    // ela não vai ser executada
    falaNome();
};
UsaFalaNome() // ao criar uma função para chamar outra função que possui uma variavel não modifica nada o resultado
// vai mostrar o nome do mesmo jeito


// closures
// essa função tem três escopos
function  retornaFunção() {
    const nome1 = 'Fernando'; // o escopo da função retornaFunção
   return function (){
     return nome1 // o escopo da função anonima // ela sé-chama closeres pq ela está fechando o escopo quando eu executo essa função
   }
};
// é o escopo global

const função = retornaFunção();
console.log(função())
console.dir(função) // aqui retorna uma função sem nome // o console.dir() faz a mesma coisa que o console.log()
console.log(função) // aqui retorna uma função sem nome que se-chama função anonima

function  retornaFunção1(nome2) {
    // o escopo da função retornaFunção
    return function (){
     return nome2 // por caso dos argumentos virem do escopo global o escopo léxico muda constantemete
     
   }
};
 

const função1 = retornaFunção1('Leandro');  
const função2 = retornaFunção1('luiz'); // o closures pode ser alterado mas para isso eu preciso criar outra função
// exemplo: const função3 = retornaFunção1('Antonio'); é toda vez que eu chmar função3 o valor que ela retornar vai
// ser sempre 'Antonio' é isso que vale para a função1 e função2
console.dir(função1) 
console.dir(função2)

// closures é a habilidade que a função tem de acessar seu escopo léxico