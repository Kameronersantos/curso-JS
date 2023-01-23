// capitulo 7  Arrays pagina 137

var vazio = [];
var primos = [2,3,5,7,11];
var misto = [1.1, "true", "a"];

var base = 1034;
var table = [ base, base+1,base+2, base+3, base+4]
console.log(table)

var b = [[1,{v:4, y:7}], [ 2,{x:9, z:7}]]
console.log(b[1])

//  lendo e gravando elementos em array

const t = new Array()
console.log(t)
i = 0;
t[i] = 2;
t[i +1] = "oi"
t[t[i]] = t[0]
console.log(t)

var assa = ["word"];
var ler = assa[0];
assa[1] = Math.PI;
s = 2;
assa[s] = "coma tudo"
assa[s + 1] = "ta bom"
assa[assa[s]] = assa[0]
console.log(assa)

var objeto = { x:10 , y:[4,5,6,"oi"]};

console.log(objeto.y[0])

objeto[2] = "one"
console.log()
var a = [1,2,3,4,];
console.log(a.length)

a[-1.23] = true;
a["1000"] = 0;
a[1.000]
console.log(a)




