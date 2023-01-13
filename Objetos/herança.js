let kamerone = {nome:'kamerone Russelliam Santos', idade:22 , peso:65.6, creser(c=1){
    console.log('engordo')
    this.peso += c
}} 

kamerone.creser(2)

console.log(` kamerone ${kamerone.idade}  anos esta ${kamerone.peso} Kg`)

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