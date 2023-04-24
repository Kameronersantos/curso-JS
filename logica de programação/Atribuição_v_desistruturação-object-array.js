// Atribuição via desistruração Array
let a = 'A'; // C
let b = 'B'; // A
let c = 'C'; // B
let letras = [c,a,b]; // eu estou atribuido para cada indice desse array Um valor em cada variavel (a,b,c) 
 /* aqui é a desistruturação ->*/  [a,b,c]  =  letras; // <- nesse lado é um Array            
//  como as variaveis (a,b,c) ja existem eu estou reatribuido o valor delas
 console.log(a,b,c);
// os indice ->   0  1  2  3  4  5  6  7  8
 const numeros = [1, 2, /*(a variavel ...resto pega esses valores ->)*/ 3, 4, 5, 6, 7, 8, 9];

// ... -> se chama the rest(resto) operator ou the spread(espalhar) operator vai depeder do comtexto

 const [ um, dois, tres, ...resto] = numeros; 
// ao fazer mais uma variavel como(terceiroNumero) retira o primeiro valor da Variavel (...resto)
 console.log( um, dois, tres, ...resto) // <- da para colocar o resto do valores do array assim (...resto)
 console.log(resto)

//  uma forma de vc pegar valores é outros não 

const [Um, ,,, Cinco , Seis] = numeros; // depede de quantas virgulas vc adiciona entre os valores 
// por exemplo 4 virgulas pula três numeros pq a primeira virgula é o separador dos valores e as 
// outras três são as que pulam os valores
console.log(Um, Cinco ,  Seis);

// quando vc tem um array dentro de um Array 

const Numeros = [
// os indices 0 1 2   0 1 2   0 1 2
// I do array   0       1       2
             [1,2,3],[4,5,6],[7,8,9]
];
console.log(Numeros[1][2]); // nesse caso foi acesado o segundo array é o terceiro valor desse array que é '6'

// a complexidade para pegar esse valor para uma variavel

const [,[,,seis]] =  Numeros;
console.log(seis) // isso daqui deixa as coisas mais complexas do simples

// A maneira mais simples 

const [lista1,lista2,lista3] = Numeros;
console.log(lista2[2]) // essa maneira deixa as coisas mais simplificada 

// Tudo isso é a Atribuição via desistruturação de um Array
// simpleficando eu crio um array de variaveis é adiciono um array de valores


// Atribuição via sesistruturação de um Object
const pessoa = {
    //objetos                 chaves
     pessoa1:{/*nome:'Camila',*/sobrenome:'Santos',idade:33,altura:1.66}, // por exemplo o nome não existe
    pessoa2:{nome:'Antonio',sobrenome:'Oliveira',idade:58,altura:1.80},
    pessoa3:{nome:'Miranda',sobrenome:'Fontinele',idade:21,altura:1.72,
    endereço:{Pais:'Brasil',estado:'São Paulo',Cidade:'Campinas'}},
}
//         objeto  chave   chave
console.log(pessoa.pessoa1.altura) 
// this is easier way get value the object // esse é o modo mais facil de pegar o valor do objeto

const {pessoa1,pessoa2,pessoa3} = pessoa // the assignment via delisting happens were
console.log(pessoa1) // <- aqui acontece Atribuição via desistruturação
// pq estou passando um objeto para ser extraido essas chaves ou objetos
// é também cria uma variavel com o nome da chave ou objeto

const {nome = 'NÃO EXISTE',sobrenome,idade,altura} = pessoa.pessoa1 
// em caso uma das chaves de um objeto não tem valor vc pode acresentar
// um valor desse jeito de explicação ou outra coisa (nome = '')  
// é isso e para ser um valor padrão a lugar de underfined
// isso também pode ser feito com Array
// aqui nesse caso estou pegando chaves do objeto (pessoa1)
console.log(nome ,sobrenome);

const { nome: n, sobrenome: s} = pessoa.pessoa2; // chave  v renomeada
// da para renomear uma variavel por meio da chave (nome:  n )
// exemplo a chave(nome) crie a variavel(n)
console.log(n,s) // (n) vai ter o valor de Antonio (s) vai ter o valor de (oliveira)
// talvez da para usar isso no Array(vc tem que testar)



const {endereço: {Pais, estado }} = pessoa.pessoa3;
console.log(Pais)
// aqui é quando vc quer algum valor dentro de um objeto 
// exemplo: objeto(pessoa3): {chave(nome: variavelCriada(no)  ) 
// chave(sobrenome: variavelCriada(sn))} 
const {pessoa3: {nome: no, sobrenome:sn, ...res}} = pessoa
console.log(no,sn, res) // neste caso não existe mais variavel nome ou sobrenome
// só as variaveis criadas (no) e (sn)
// da para usar o (...resto) também no object