
// atributo de protótipo

var p = {x:2};
var o = Object.create(p);
console.log(p.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(p));

// atributo de classe
// para obter a class de um objeto vc pode chamar o metodo toString com o call
// exemplo isso  vai verificar se é um Number, String, Null, Undefined, Object, array, etc.

//null == null
// 1 = Number
// "" == String
// false == Boolean
// {} == Object
// [] == Array
// /./ == RegExp
// new Date == Date
// window == um objeto hospedeiro do lado do cliente


function classof(o){
    if(o == null) return "null";
    if(o == undefined) return "undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
console.log(classof(1))

// a function classof define a class do da propridade se ela é number, string null undefined


// Atributos extensível

// atributos extensível é  um objeto que pode se-ter novas propridades adquiridas ou não 

// todos os objetos interno dfinidos pelo o usuario  são extensível a não ser que tenha sido convertido para ser não extensível 


// para ver se um objeto é extensível use  Object.isExtensible()

// para determinar se um objeto não é extensível passe-o para Object.preventExtensions()

// quando tornar um objeto não extensível não tem como tornar ele extensível de novo

// preventExtensions() afeta apenas a capacidade de extenção do proprío objeto é se novas propriedades foram adicionadas  no protótipo de um objeto não extensível o objeto não extensível vai herdar essas novas propriedades.

// O objetivo do atributo extensível é "bloquear" os objetos em estado conhecido e evitar falsificação externa.


// O atributo do objeto extensível é frequentemente usado em conjunto com os atributos de propriedades configuravel e gravável. é o ECMAScript 5 define que tornam fácil configurar os atributos juntos.


// Object.seal() funciona como Object.preventExtensions(), mas além de tornar o objeto não extensível também torna todas as propridades proprías desse objeto não configuráveis. isso significa que as novas propriedades não pode ser adicionadas no objeto e as propriedades existentes não pode ser excluídas ou configuradas

// propridades gravadas ainda pode ser configuradas

// Object.isSealed() para ver se o objeto está selado

// Object.freeze() bloqueia os objeto ainda mais firmemente. além de tornar o objeto não extensível e suas propriedades não configuraveis, também transforma propriedades de  todos os dados próprias do objeto em somente para leitura

// se objeto tem a proriedade do metodo setter eles não vão ser afetados é ainda pode ser chamados pela atribuição á propridade

// use o Object.isFreeze() para determinar se está congelado o objeto

// Object.freeze() e Object.seal() afetam apenas o objeto em que são passados eles não tem efeito nenhum sobre o prototipo desse objeto


// se quiser bloquear um objeto completamente vc poderar congelar ou selar os objetos de encadeamento

// Object.preventExtensions() Object.freeze() Object.seal() retorna o objeto em que são passados ou seja é possivel utilizar-los  em chamada de função alinhadas
// não enumerável 
var o = Object.seal(Object.create(Object.freeze({x:1}), {y:{value:2, writable:true}}))
console.log(o)
// enumerável
var n = {g:5, r:8}
console.log(n)

// Serializando objeto

// serialização de objeto é o processo de converter o estado de um objeto em uma String a partir da qual ele pode  ser restarado novamente

//  funcões: JSON.stringfy() e JSON.parse para serializar e restaurar objeto em javascript

// JSON: JavaScript Object Notation = notação de objeto em javascript


h = {x:1, y:{z:[false,null,""]}};
s = JSON.stringify(h);
p = JSON.parse(s);
console.log(p)
var b = typeof s
console.log(b)

// Métodos de objeto

//  O método toString()

var i = {w:4, d:6,}.valueOf();
console.log(i)


// var i = {w:4, d:6,}.valueOf();
// console.log(i)
//  não muda nada 

// var i = {w:4, d:6,}.toString();
// console.log(i)
// vai voltar [objeto Object]

