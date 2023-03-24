const nome01 = 'lucas';
const sobrenome01 = 'Castro';
const idade01 = 33;
const peso01 = 78.5;

const nome02 = 'fernanda';
const sobrenome02 = 'Oliveira';
const idade02 = 24;
const peso02 = 63.2;
// O Objeto ele serve para resumir muitas informações em um lugar só
// objeto literal
const pessoa01 = { 
    nome:'Lucas',
    sobrenome:'Castro',
    idade:33, 
    peso:78.5 
}
const pessoa02 = {nome:'Lucas', sobrenome:'Castro', idade:33, 
peso:78.5 }
// para poder chamar um dos atributos do obejeto 
console.log(pessoa01.nome)
console.log(pessoa01.sobrenome)
console.log(pessoa01.idade)

// isso só facilita um pouco, desse jeito ainda precisa fazer mil desses mas não se preocupe da para fazer uma função crie objeto com esses valores automaticamente

function pessoa(nome, sobrenome, idade, peso){
    return {    // que vão para os parametros
         nome,
         sobrenome,
         idade,
         peso
    }
}

const pessoa1 = pessoa('joão','almeida', 45 , 85.7)
const pessoa2 = pessoa('josé','oliveira', 34 , 85.7)
const pessoa3 = pessoa('luana','carvalho', 19 , 85.7)
const pessoa4 = pessoa('fransisca','teixeira', 66 , 85.7)
//                             os argumentos
//                     Argumentos são os valores passados 
//                           para os parâmetros
console.log(pessoa1.nome,pessoa2.nome)

// funções dentro de objeto

const individo1 = {
    n: 'marcos',
    i: 33,
    sn: 'teixeira',
     fala() {
        console.log(`${this.n} ${this.sn} esta dando um bom dia...`)
    },
    quantos_anos () {
        console.log(`${this.n} hoje ele tem ${this.i++} anos `)
    }
    
}
individo1.fala()
individo1.quantos_anos()
individo1.quantos_anos()
