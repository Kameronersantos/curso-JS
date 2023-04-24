let nome = 'João';
const nomef = 'Maria'
console.log(nome, "nasceu em 2000");
console.log('em 2009 ', nomef, "conheceu ", nome)

let inicializar; // variavel não inicializavel é so foi declarada 
inicializar = 'qualquer valor'
console.log(inicializar)

let inincializar; // vc escrever a variavel de novo vai dar Error
//  const = 1nome // começar com numero da erro
// let if = "é se " // variavel com palavra reservada da Erro
let nome_completo = "Kamerone Russelliam Santos";
console.log(nome_completo) // Essa maneira é umas das formas de que a a variavel pode ter espaço 
let fullName = "Carlos Rodriguis Da Silva "
let fullname = "Carlos Rodriguis Do Santos "
console.log(fullName, fullname) // variaveis com letras maiusculas e minusculas faz diferença pro JavaScript;

// de nomes significativos pras variaveis
// não da pra redeclarar variaveis com let

//const inicializar1 // ao não inicializar uma const da ERRO
const nomes = 'odair';
// nomes = santos; // na const o valor da inicialização não pode ser modificado depois
console.log(nomes) // aqui vai ser odair e não tem como altera isso

// mais sobre let é const

 let nome2 = 'luis'; // -> cria uma variavel
 var nome3 = 'luis'; //-> também cria uma variavel

 // let nome2 = 'Otavio' // não pode redecrarar uma variavel com mesmo nome da erro porém isso 
 // acontece fora de um bloco
 // var nome3 = 'Otavio' // no caso de var a variavel seria escrita normamalmente

 const verdadeira = true;
 if(verdadeira){
  let nome2 = 'Otavio' // é aqui está criando essa variavel nesse bloco
 // em caso sé a variavel (let) estiver em um bloco não terá erro
 // let tem escopo em Bloco {...bloco} 
 // A variavel criada nesse bloco é diferente da variavel fora dele

 var nome3 = 'Daniel' //  variavel (var) foi redeclarada ela não criada como a (let)

 // let nome2 = 'Otavio' // se tiver mais uma variavel (let nome2) 
 // no bloco vai dar erro
   console.log(nome3,nome2);
 if (verdadeira){
  // let nome2 = 'Outra coisa' // mas em caso vc crie outro bloco é adiciona (let nome2) não
  // vai dar erro

  // var só tem escopo em função
   console.log(nome3,nome2); // o javaScript tenta primeiro encontrar a variavel dentro do bloco encontrou Ok
  // quando não encontra ele procura no bloco maior em caso ele não acha lá também ele procura fora do bloco
  // é quando ele não encontra em nenhum lugar da ERRO

  var nome3 = 'leandro' // em caso vc escreva uma variavel depois dela ser chamada vai dar ERRO ou underfined

   // quando tem mais de um bloco que é executado ele é chamados de (bloco Alinhado)

// aqui é o escopo de bloco
    }
    }
// aqui é o escopo Global

console.log(nome3,nome2) // a variavel (let mome2) voltou (luis) pq ela estava no escopo global 
// é a variavel (var nome3) voltou (leandro) pq a ultima redeclaração teve resultado de "leandro"

// isso mostra que a variavel (var nome3) toda vez que é chamada ela redeclara o valor dela
// é a variavel (let nome2) ela não redeclara ela só é criada dentro do escopo do bloco é chamado pelo proprio bloco

// escopo de função é como a variavel (var) sé comporta

var sobrenome = 'Castro'; // porém as variaveis do escopo global pode ser chamadas para o escopo da função

function falaoi(){
  var nome4 = 'luiz' // a variavel dentro do escopo da função não pode ser chamada para o escopo global
  console.log(nome4,sobrenome);

  if (verdadeira){ 
    let sobrenome2 = 'Medina'
    console.log(nome4,sobrenome,sobrenome2) // nesse caso o (var nome4) não da erro pq ela funciona dentro do escopo da função
    // é dentro do escopo de bloco só sé ele for chamado para o escopo global dai da erro
  }
  // console.log(nome4,sobrenome,sobrenome2) // no caso da variavel (let sobrenome2) ela só funcionaria dentro do escopo 
  // de bloco
}
falaoi()
// console.log(nome4,sobrenome); // aqui mostra que a variavel (var nome4) não pode ser usada fora do escopo da função

idade = 23; // para consertar isso é necessario declarar ela acima da chamada da variavel
console.log(idade); // nesse o motivo de dar underfined é não ERRO é pq o javaScript eleva a sua vaariavel é deixa como não
// declarada isso se-chama rostin

var idade = 23;