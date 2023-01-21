// capitulo 7.10 pagina 153 a 154

var an = [2,3,4,5,6];
var on = {x:3,y:7,o:[5]};
var a = [];
var o = {};
console.log(Array.isArray(on.o))
console.log(Array.isArray([]))
console.log(Array.isArray({}))
// Array.isArray() é uma funçaõ que teste o valor desconhecido e vê se é  um array ou não  
var isArray = Function.isArray || function(o){
    return typeof o === "object" && Object.prototype.toString.call(o) == "[obejct Array]"
}
// essa função é mesma coisa que função Array.isArray faz só que no ECMAscript 3 

// Objetos semelhantes a um array
// pagina 154 a 155
 
// Como vimos, os arrays em JavaScript têm algumas carcterísticas especias inexistentes em outros objetos
// A propriedade length é atualizada automaticamente quando novos elementos são adicionados  na lista.
// Configurar length com o valor  menor trunca o array.
// Os arrays herdam métodos úteis de Array.prototype.
// Os arrays têm um atributo classe de "Arrya"

// Essas carcteristicas que tornam o arrary de JavaScript diferentes do objetos normais

var b = {}; // começa com objeto vazio 

// adiciona propriedades para torna-lo "semelhante" a um array 
var i = 0; 
while(i< 10){
    b[i] = i * i;
    i++
}
b.length = i

// agora itera por ele como se fosse um array real
var total = 0;
for(var j = 0; j < b.length; j++) {
    total += b[j];
}
console.log(b)

// Esse codigo em cima ele pega um objeto normal, é adiciona propriedades para tranforma-lo em um objeto semelhante a um array e depois itera pelos "elementos" do pseudoarray 

function isArrayLike(o) {
    if(o &&                    // o não é null, undefined, etc.
     typeof o === "object"&&   // o é um obbjeto
    isFinite(o.length)&&       // o.length é um numero finito       
     o.length >= o &&          // o.length é não negativo
     o.length===Math.floor(o.length) &&  // o.length é um numero inteiro 
      o.length < 4294967296)             // o.length < 2^32
    return true;                         // então o é semelhante a um array
    else
    return false;                        // caso contrario , não é 
}
// Determina o é um objeto  semelhante a um  array. 
// String e funções tem propriedades length nomericas , mas são excluidas pelo teste de typeof. 
// Em javaScript do lado cliente , os nós de texto dom tem uma propriedade length numérica e talvez precisem ser escluídos com um teste o.nodeType != 3 adicional.

// pagina 156 a 157

var c = {"0": "a", "1":"b","2":"c", length:3}; // objeto semelhante a um array 
Array.prototype.join.call(c,"+");  // "a+b+c"
Array.prototype.slice.call(c,0);   // copia o array verdadeiro
Array.prototype.map.call(c,function(x){
    return x.toUpperCase();    
}) // letras ficam maiusculas => {"A","B","C"}

// Em ECMAScript 5, todos os métodos de array são genéricos. Em ECMAScript 3 todos os métodos, exceto toString() e toLocateString(), são genéricos.

// Os objetos semelhantes a um array não herdam de Array.prototype não é possivel chamar neles diretamente. Contudo, é possivel chama-los indiretamente, usando o metodo Function.call



// essa funçao não é padronizada para todos os navegadores

Array.join = Array.join || function(a,sep) {
    return Array.prototype.join.call(a,sep)
}
Array.slice = Array.slice || function(a,fron,to) {
    return Array.prototype.slice.call(a,fron,to);
}
Array.map = Array.map || function(a,f,thisarg) {
    return Array.prototype.map.call(a,f,thisarg)
}

// para a função de baixo funcionar tem que fazer a configuração de cima primeiro

var d = {"0": "a", "1":"b","2":"c", length:3};
Array.join(d,"+");
Array.slice(d,0);
Array.map(a,function(x){return x.toUpperCase();})
console.log(d)

// String como arrays
// as Strings se comportam como arrays somente para leitura. Em ves de acessar caracteres indivduais com metodo charAt(), pode-se usar colchetes

var t = "test"
console.log(t.charAt(0))
t[1]

// Antes era usado charAt() ao lugar dos colchetes = "" só que agora o metodo charAt() parece que não funciona tranformar um texto em uma String

g = "JavaScript"
console.log(Array.prototype.join.call(g," "))
console.log(Array.prototype.filter.call(g,function(x){
    return x.match(/[^aeiou]/);
}).join(""))

// lembre-se de que as strings são valores imutavéis, portanto quando são tratadas como arrays, elas são arrays somente para leitura. Metodos de array com push(), sort(), reverse() e splice() modificam um array no local e não funciona em strings. No entanto, tentar modificar uma String usando método de array não causa erro: apenas falha silenciosamente.