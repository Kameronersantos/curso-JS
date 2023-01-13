var es = new Array(5);

console.log(es.length)

var a2 = [,];
var a1 = [undefined];
console.log(0 in a2)
// array espasos são  array tem mais indices do que elementos nos propríos indíces

var es = new Array(5);

// aqui tem um array de 5 indíces 

es[0] = 2, es[1] = "legal", es[2] = true;

// aqui adicionei nos indíces 0,1 e 2 elementos

console.log(es)

// ainda tem  dois indíces sem elementos e isso é array espasos onde o comprimento do array é maior que a quantidade de elementos dentro deles

console.log(es[3])

// caso vc tenta ler o indíce sem elemento mostra underfined

a = [1,2,3,4,5];
console.log(a.length = 9)
console.log(a)

// a propriedade lenght de um array também pode ser configurada com um valor maior do que o seu valor atual. fazer isso não adiciona novos elementos no array, só cria uma área esparsa no final do array


a = [1,2,3];
Object.defineProperty(a,"length",
{writable:false});

console.log(a.length = 6);
a[3] = "oi"
console.log(a)

// É possivel tranformar a propriedade length de um array somente para leitura com Object.defineProperty()

var b = [1,2,3]
Object.defineProperty(b, "0", {configurable:false, writable:false, enumerable:false})

b[0]= 5
b[1] = 8
b[2] = 9
console.log(b)

// adicionando e excluido elementos de array

a = [];
a[0] = "zero";
a[1] = "one";

//  esse é o metodo normal 

c = [];
c.push("zero");
c.push("one","two")
console.log(c)

// esse é o metodo push que adiciona o elemento no final do array

d = [5,6];
d.unshift("inicio");
console.log(d)


// O metodo unshift() ele adiciona um elemento no início do array 

delete d[1];
console.log(d[1])
console.log(1 in d)
console.log(d.length)


// delete ele exclui o elemento do indíce mas não afeta o comprimento do array é atribui undefined ao elemento quando buscado 

f = [5,7,8,8];
f.pop();
f.shift();
console.log(f);
console.log(f.length)

// O pop ele exclui o ultimo elemento do array, e o shift ele exclui o primeiro elemento do array. Eles também diminue o comprimento do array. Eles desloca  todos os elementos para o indíce menor do que o o indice inicial.

// Interação em array


    valor[i] = o[chave];  // armazena o valor no array valorvar chaves = Object.keys(o); // Obtém um array de nomes de propridades do objeto "o"
var valor = []; // Armazena  os valores de propridade correspondentes nesse array
for(var i = 0; i < chaves.length; i++){ // para cada indíce  no array 
    var chave = chaves[i]; // Obtém a chave nesse índice

}

for(var inn = 0, len = keys.length; inn < len; i++){
    // o corpo do laço permanece o mesmo 
}

// caso  queira excluir elementos null, undefined e elementos inexistentes

for(var i = 0; i < a.length; i++){
    if(!a[i]) continue ; // Pula elementos null, undefined e inexistentes
}

// pra pular elementos indefinidos ou inixistentes 
var array = [1,2,3,,4]
for(var i = array; i < a.length; i++) {
    if(a[i] == undefined) continue;
}

// por fin , se quiser pular apenas os indíces para os quais não existe qualquer elementos no array, mas ainda quiser manipular os elementos indefinidos existentes, faça isto:

for(var i = array; i = a.length; i++){
    if(!(i in a)) continue ; // pula os elementos inexistentes
}

//  esse laço atribui nomes de propridades enumeráveis(incluido índices de array ) a variavel de laço, um por vez. Os índices que não existem não são iterados: 

//  esse laço sé refere a um array esparsos
var index = [5,6,7]
var valores = 2
for(var index in espasosArray) {
    var valores = espasosArray[index];

}

// da pra fazer um teste adicional para filtrar as propriedades indesejadas

for(var i in a ){
    if(!a.hasOwnProperty(i)) continue; // pula as propriedades herdadas
}

for(var i in a ) {
    // Pula índice se não for um inteiro não negativo
    if(String(Math.floor(Math.abs(Number(i)))) !== i) continue;

}


