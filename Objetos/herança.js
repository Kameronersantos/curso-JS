let kamerone = {nome:'kamerone Russelliam Santos', idade:22 , peso:65.6, creser(c=1){
    console.log('engordo')
    this.peso += c
}} 
kamerone.creser(2)
console.log(` kamerone ${kamerone.idade}  anos esta ${kamerone.peso} Kg`);
// herança de objetos
var o = {}
o.x = 1;
var p = (o);
p.y = 2;
var q = (p);
q.z = 3;
var s = q.toString();
 var r = q.x + q.y
console.log(r)
var unitcircle = { r:1};
var c = (unitcircle);
c.x = 1; c.y = 1;
c.r = 2;
console.log(unitcircle.r);
// Erros de acesso á propriedade
// var len = undefined;
// if(book){
//     if(book.subtitle) len = book.subtitle.length;    
// }
// var len = book && book.subtitle && book.subtitle.length
// console.log(len)
var n = Object.prototype = o
console.log(n)
delete o.x
console.log(n)

// herança um pouco mais explicada
// herança mais conhecido como "delegação" pela linguagen do JavaScript é uma forma de passar chaves, metodos é
// prototipos de uma função construtora a outra aqui no exemplo a baixo vc verà a função construtora Produto
// repassar as suas chaves para outras funções construtoras no caso seria (Camiseta é Caneca) e ambas reutilizaria
// as chaves (preço e nome) e so seus métodos (Aumento e Desconto) isso só é possivel usando o método Call.
// Exemplo: Produto.call(this,nome,preço) pórem só chaves pode ser passadas assim os métodos são pasados    automaticamente. // Pórem os metodos só podem ser criados fora do bloco da função por que? isso dara uma melhor 
// performace no seu programa.
// mas Utilizando isso o prototype de (Camiseta é Caneca) séra o de Produto mas para isso não acontecer 
// vc ira utilizar o método Create 
// Exemplo: Camiseta.prototype = Object.create(Produto.prototype) é depois na linha de baixo
// Camiseta.prototype.constructor = Camiseta  
// O motivo de isso da certo é que vc cria um outro ptototype com base do Produto.prototype

function Produto(nome,preço) {
    this.nome = nome;
    this.preço = preço;
};

Produto.prototype.Desconto = function(quantia) {
    this.preço -= quantia
};
Produto.prototype.Aumento = function(quantia) {
    this.preço += quantia
};

function Camiseta(nome,preço,cor) {
    Produto.call(this, nome, preço); // o this do metodo call é Camiseta é todos os objetos que eu criar com
    // a função construtora. É o segundo argumento é os parâmetros que estão em Produto que (nome) é (preço)
    // é fazendo isso já ligua a função Produto é a Camiseta
    this.cor = cor
};

// entes de fazer Camiseta.prototype = Object.create(Produto.prototype) o prototype de Camiseta era assim
// Camiseta.prototype.Constructor = Camiseta
Camiseta.prototype = Object.create(Produto.prototype) // para que a função construtora Camiseta tenha o mesmo 
// prototype que de Produto faça isso pórem tem um problema o costrutor que vc chama após vc fazer isso é 
// Produto e caso vc não queira isso faça isso
Camiseta.prototype.constructor = Camiseta // <- // O constructor da função Produto voltara ser Camiseta  sé vc fizer isso

Camiseta.prototype.Aumento = function(porcetagem) {  // Camiseta pode sobreescrever metodos do Produto após vc fazer 
    // os processos em cima mas so reescreve a função para os objetos que utilizam a função contrutora Camiseta
    // todos os objetos gerados pela função contrutora Camiseta podera usar essa reescritura da função
    this.preço = this.preço + (this.preço * (porcetagem / 100));
};

Produto.prototype.Desconto = function(porcetagem) { // como também Produto pode sobre escrever os seus proprios métodos é quando vc faz para a função construtora base re-escreve para todas as funções que a chama
    // resumido as que usam o método call  Produto.call(this,nome,preço)
    this.preço = this.preço - (this.preço * (porcetagem / 100));
};

function Caneca(nome,preço,material,estoque) {
    Produto.call(this,nome,preço)
    this.material = material,
    Object.defineProperty(this,'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if(typeof valor !== 'number') return
            estoque = valor;
        }
       
    })
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('sandalia', 4.99,'Nike');
const camiseta = new Camiseta('regata',12.45,'azul');
const caneca = new Caneca('Homen Aranha',18.85,'porcelana', 5);
camiseta.Aumento(10);
produto.Desconto(0);
caneca.Aumento(30)
console.log(camiseta)// 
console.log(produto)
console.log(caneca)

// Object      função(Call P)  função(Construtor)   __proto__ do javaScript
// camiseta  ->  Camiseta  -->    Produto     ---> Object.prototype
// toda variavel [{prototype}] que de função construtora precisa ter constructor dentro da variavel [{prototype}] 
// [{prototype}] é igual a _proto_