// pagina 144 
 // inicializa o array 
for(var linhas = 0; linhas < tabela.length; linhas++) {
    for(colunas = 0; colunas[linhas].length; colunas++) {
        tabela[linhas][colunas] = linhas*colunas
    }
    }
// para acesar um valor em um array de arrays 

// pra criar um array multidimensionais

var tabela = new Array(10); // 10 linhas da tabuada
for(var i = 0; i < tabela.length; i++) {
    for(coluna = 0; coluna < tabela[i].length; coluna++) {
        tabela[i][coluna] = i*coluna; //cada linha tem 10 colunas
    }
}



// metodos de array 
// pagina 145
// metodo join 
// Esse metodo ele comcatena todos os elementos de um array em string a primeiro a.join(" ") ele provoca um espaço entre as strings o a.join() ele mantem as virgulas a.join("") não há espaço entre as strings é o b.join('-') ele poin traços em quase todo comprimento do array

var a = [1,2,3]
console.log(a.join(" "))
console.log(a.join())
var b = new Array(10)
console.log(b.join('-'))

// metodo reverse()
// Esse metodo ele inverte a ordem dos elementos é retorna o valor do array invertido
var c = [1,2,3];
console.log(a.reverse().join())
// ele retorna [3,2,1]

// metodo sort() no caso quando a elementos string no array ele classifica em ordem alfabetica

var v = ["banana", "maça", "","abacaxi"];
v.sort()
console.log(v)

// para classificar de uma outra forma deve criar uma function dentro do sort é essa function deve decidir qual do seus dois argumentos deve aparecer primeiro no array se o primeiro argumento deve aparecer antes do segundo a function de comparação deve resultar menor do que 0 se o primeiro argumento for aparecer após ao segundo deve ser maior do que 0
var h = [33,4,1111,222];
h.sort();
h.sort(function(a,b){
    return a-b  //retorna &lt;0, 0 ou &gt; 0, dependedo da ordem
})
h.sort(function(a,b) {return a-b}); // inverte a ordem numérica
console.log(h)

// outro exemplo de classificação de itens de array, o exemplo é classificação em ordem alfabetica sem considerar letras maíusculas é minusculas em um array de string, isso é possivel com outra function de comparação no sort.
// se vc apenas escrever d.sort() a classificação considera as letras maíusculas é minusculas mas caso vc adicione uma function como argumento  a classificação não considera as letras maíusculas é minusculas assím a ordem alfabetica permenecera  

var d = ['gato', 'Sapo', 'Boi', 'ave'];
d.sort()
console.log(d)

d.sort(function(g,p){
    var a = g.toLowerCase()
    var b = p.toLowerCase()
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
});
console.log(d);

// metodo concat()
// pagina 146
//  ele cria é retorna um novo array contendo os elementos do array original em que concat() foi chamado, seguido de cada  um dos argumentos de concat(). Se qualquer argumento é um array então são os elementos do array que são concatenados é não o array em sí. Concat() não comcatena array em arrays ele não modifica o array que ele é chamado 

var y = [1,2,3,];

console.log(y.concat(4))
console.log(y.concat(4,[5,6]))
console.log(y.concat(4,[5,[6,7]]));

// metodo slice()
// slice ele retorna um pedaço do array especificado. o seus dois argumentos são o inicio é o fim do trecho que vc quer pegar do array. O array retornado contém o elemento especificado pelo primeiro argumento e todos os elementos subsequentes mas não incluindo o elemento especificado no segundo argumento. É se o segundo não existe ele contém todos os elementos desde posicão inicial até o fim no caso 
var t = [1,2,3,4,5,6,7,8,9];
console.log(t.slice(1,9));
console.log(t.slice(-4,-1)); // O -1 é representado como ultimo argumento -2 o penúltimo é assim por diante
console.log(t.slice(0)); // o unico argumento vai pegar o elemento inicial é vai até o final

// metodo splice
// é o metodo que é de uso geral para inserir ou remover elementos de um array ao contrario dos outros mostrados aqui ele modifica quando é chamado. Mesmo sendo parecido com slice o splice faz coisas totalmente diferentes, ele pode excluir é inserir elementos ao mesmo tempo os elmentos que vem depois da inserção ou exclusão tem os seus índice aumentados ou diminuidos. O primeiro argumento especifica a posição do array em inserção ou exclusão deve começar. O segundo argumento fala o numero de elementos inicial até o fim do array são removidos e se caso o splice retorna o array vazio o com elementos excluidos.

const w =[1,2,3,4,5,6,7,8];
w.splice(4,2)
console.log(w)

const q = [10,12,23,34,];
q.splice(1,0,'s','b');
q.splice(1,2,[2,3],3)
console.log(q); // o terceiro argumento seria o que vc quer adicionar


// metodo pop é push

// O push ele anexa um ou mais novos elementos no final do array é retorna um novo comprimento do array é o pop faz o contrario ele exclui o ultimo elemento de um array decrementa o comprimentodo array e retorna o valor que removel
var comprimento = [];
comprimento.push(1,2,3);
comprimento.pop();
comprimento.push(4);
comprimento.pop();
comprimento.push([4,5])
console.log(comprimento)

// metodo unshift e shift
// é mesma coisa que pop é push ´só que acresenta e exclui elementos no inicio do array 
var s = [];
s.unshift(1);
s.unshift(22)
s.shift() // ele tira o elemento do ínicio do array
s.unshift(5,[2,3]) // ele consegue adicionar tanto numeros ,strings , array mais não pode objetos 
s.unshift(6)
s.unshift([7,8])
console.log(s);
// unshift ele adiciona todos elementos no mesmo estante ele mantem a ordem que vc adicionou se os argumentos fosse colocados um após outro teria uma ordem de elementos diferente

// metodo toString e toLocateString()

// esse é covertor de objeto para string pro array o toString() coverte todos os elementos do array para strings é na saida ele mostra uma lista separada com virgula dessas string é todos os elementos são comcatenados e também tira os colchetes

var g = ['a','b','c',[2,3],5].toLocaleString()
console.log(typeof g[4])


