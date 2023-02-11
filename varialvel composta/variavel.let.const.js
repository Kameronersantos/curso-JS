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

var numero = 1;
var array = [3,4,5,6,7,8];
console.log(array.slice(1,6))


function factorial(a,ini,ifin){
   if( a.length < 0) throw new Error('array não pode ter nada ');
   var ini = array.slice(0,1);
   var ifin = array.slice(4,5);
   
   for(var inicio = ini; ini < ifin; );
 
 

}
console.log(factorial(array,array[0],array[5]))


var somar = function(a) {
    if(a === undefined) return new Error;

   return a + a
};

