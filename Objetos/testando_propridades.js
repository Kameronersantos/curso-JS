
// propriedades que não pode ser Excluida

delete Object.prototype;


function f() {}
delete this.f
this.x = 1;

console.log(x)

// testando propridades

var o = {x:1};
// x in o
// y in o 
console.log("toString" in o)
o.hasOwnProperty("x");
o.hasOwnProperty("y");
o.hasOwnProperty("toString");

var u = ({y:2});
u.g = 1;
u.propertyIsEnumerable("g")
console.log(u.propertyIsEnumerable("g"))
console.log(u.propertyIsEnumerable("y"))
console.log(Object.prototype.propertyIsEnumerable("toString"))

var i = {x:3}
i.x !== undefined;
i.o !== undefined;
i.toString !== undefined;
// in pode distiguir entre propridades que não exitem ou são underfined
var r = {t:undefined} 
 r.t !== undefined;
 r.y !== undefined;
// var y5 = r in t;
// var t7 = t in y;
delete r.t;

// enumerando propridades

var q = {h:5, j:3, z:10};
q.propertyIsEnumerable("toString")
for(k in q) 
 console.log(k);

for(k in q) {
    if(!q.hasOwnProperty(k)) continue;
}

for( k in q) {
    if(typeof k[q] === "function") continue 
}

function extend(q,k) {
    for(prop in q) {
        q[prop] = k[prop];
    }
    return q
}
// A function Extend ela copia o nome é a propriedade é a propridade de k é sobrescrita é o valor tambem é sobriscrito. Mas não copia os atributos é function que faz isso vc ve no getter_setter.js
function merge(q,k) {
    for(prop in q) {
        if(q.hasOwnProperty[prop]) continue;
        k[prop] = q[prop]
    }
    return q
}
// A Function maerge ela faz quase a mesma coisa que a Extend porém a propridade e o valor é deixado intacto

function restrito(q,k){
    for(prop in q){
        if(!(prop in k)) delete 
        q[prop];
    }
    return q
}

// A function restrito  remove as propridades em q se não exite uma propridade com o mesmo nome k dai retorna q 

function subtract(q,k){
    for(prop in k){
        delete q[prop]
    }
    return q
}
// A function subtract para cada propridade k, exclui de q a propridade de mesmo nome é retorna q

function union(q,k ){return extend(extend({},q),k);}

// A function union retorna um novo objeto contendo as propridades de q e k. Se q e k têm propridades de mesmo nome, os valores de k são usados 


function intersection(q,k){return restrito(extend({}, q), k);}

// A Function intersection Retorna um novo objeto contendo apenas asa propridades de q que também aparecem em k. Isso é como a interseção de q é k, mas os valores das propridades em k são descartados

function keys(q) {
    if(typeof q !== "object") throw TypeError();
    var resut = [];
    for(var prop in q) {
        if (q.hasOwnProperty(prop))
        resut.push(prop)
    }
    return resut
}
console.log(keys)


// A function keys retorna um array contendo os nomes das propridades proprias enumeráveis de q 