// todas as funções construtoras tem Object.prototype
// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // O Object.prototype está em uma variavel chamada de _proto_ é isso daqui acontece por baixo dos panos 
    // sem nós fazer nada 
    // [{prototype}] Object // ao olhar no console do arquivo html vc encontrara essa variavel
};
const objB = {
    chaveB: 'B',
    // tem como o prototype não ser o Object.prototype ele pode ser um objeto criado manualmente como 
    // o ObjA por exemplo
};
   Object.setPrototypeOf(objB,objA) // o objeto (objA) se tornou o prototype do (objB) é por caso disso
// o objB consegue acesar objA

const objC = new Object();
objC.chaveC = 'C';
Object.setPrototypeOf(objC,objB);
console.log(objC.chaveA) 

// a cadeia desses objetos ficou assim
// objC -> objB --> objA ---> Object.prototype

// para vc acessar um prototype de um objeto não utilize _proto_  utilize Object.getPrototypeOf
// Object.setPrototypeOf // ele configura o prototype 
// Object.getPrototypeOf // ele mostra o prototype do objeto escolhido como parâmetro

function Produto(nome,preço){
    this.nome = nome;
    this.preço = preço;
    // agora sabemos que não devemos fazer metodos dentro da função contrutora
};
const p1 = new Produto('leite', 39.97);
// podemos fazer metodos fora da função usando o prototype
Produto.prototype.desconto = function(percentuao) {this.preço = this.preço - (this.preço * (percentuao / 100));};

Produto.prototype.AumentaPreço = function(Aumento) {this.preço = this.preço + (this.preço * (Aumento / 100))};
p1.desconto(10)
console.log(p1)


const p2 = {
    nome: 'Caneca',
    preço: 62.99,
};
//        objeto literal    função construtora
//     feito manualmente    com metodos na variavel _proto_ 
Object.setPrototypeOf(p2,   Produto.prototype) // para que o objeto literal também use o metodo da função construtora


p2.desconto(10) // o objeto criado literalmente já foi incluindo como parte dos objetos da função contrutora
// é ele reutiliza os mesmos metodos da função contrutora
console.log(p2)

const p3 = Object.create(Object.prototype); // tendo como parâmetro Object.prototype vai voltar objeto normal
// Object.create ele cria object com prototipos de outros objetos criados
console.log(p3)

const p4 = Object.create(Produto.prototype, {
    tamanho: {writable: true, enumerable: true,configurable: false, value:45.9}, // também da para configurar as difinições do objeto é adicionar valor tambem é chaves
    preço: {writable: true, enumerable: true,configurable: false, value:45.9},
});
p4.AumentaPreço(20);
console.log(p4)