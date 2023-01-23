// chamando funções 
// pagina 162 do livro
// O codigo JavaScript que costitui um corpo de função não é executado quando a função é definida mas quando ela é chamada. Em JavaScript as funções podem ser chamadas de quatro maneiras:
// Como funções
// Como métodos
// Como costrutoras
// e indiretamente por meio de seus métodos call() e apply()

// chamada de função 
function distancia(x1,x2,y1,y2){
    var dist1 = x1 - x2;
    var dist2 = y1 - y2
    return Math.sqrt(dist1*dist1 + dist2*dist2);
}
function factorial(x){
    if(x <=1) return 1
    return x * factorial(x-1)
}
// printprops({x:1});
var total = distancia(0,0,1,2) +  distancia(2,5,6,9);
var possibilidade = factorial(3)
console.log(total)

// As funçoes são chamadas como funções ou como métodos com uma expressão de invocação 
// Uma expressão de invocação consiste em uma eexpressão de função que é avaliadacomo um objeto função, seguida por um parêntese de abertura, uma lista de zero ou mais expressões de argumento separada com vírgula é um parêntese de fechamento.
// Em uma chamada cada expressão de argumento(aqueles entre parênteses) é avaliada os valores resultantes se tornam os argumentos da função. Esses valores são atribuidos aos parâmentros nomeados na definição da função. No  corpo da funçaõ, uma referencia um parâmetro é avaliada com valor de argumento correspondente.
// Para uma chamada de função normal, o valor de retorno da função torna-se o valor da expressão de invocação.Se a função retorna porque o interpretador chega no final, o valor do retorno undefined. Se a função retorna porque executa uma instrução return, o valor de retorno é o valor da expressãp que vem após a intrução return ou undefined, caso a instrução return não tenha valor algum

var strict = (function(){return!this;});
// define e chama uma função para determinar se estamos no modo restrito

// chamada de método
// pagina 162 a 163 do livro
// Um método nada mais é do que função JavaScript armazenada em uma propriedadede um objeto Se vc tem uma função F e um objeto O, pode definir um método chamado M de O com a linha a seguir

// O primeiro método vc chama uma função para propredade de M 
 var O = {M:undefined}
 function F(x,y) {
    var cal1 = x + x;
    var cal2 = y + y;
    return cal1 * cal2 
 }
O.M = F
// tendo definido o metodo M() do objeto o, chame-o como segue
// Ou então se M() espera dois argumentos, voce pode chama-lo como segue
console.log(O.M(5,5))
// No Segundo método vc chama uma propriedade denominada como função para calacular as outras propriedades do objeto neste caso dentro da função qualquer propriedade é colocado um this. antes de qualquer argumento
var calculador = {  // Um objeto literal
    operando1:1,
    operando2:1,
    add: function(){
        // Note o uso da palavra-chave this para calcular 1+1
        this.resultado = this.operando1 + this.operando2;
    }
};
calculador.add(); // Uma chamada de método para calcular 1+1.
console.log(calculador.resultado) 

var idade = {
    individo1: 30,
    individo2: 47,
    media: function(){
        this.m = (this.individo1 + this.individo2) / 2
    }
}
idade.media();
console.log(idade.m)

// A maioria das chamadas de método usa a notação de ponto para acesso a propriedade, mas as expressões de acesso á propriedades que utilizam colchetes também causam chamadas de métodos. As seguintes são ambas chamadas de mátodos, por exemplo 

console.log(O["M"](10,10)) // outra maneira de escrever O.M(x,y)

// pra fazer esse exmplo depois =>(a[n](z)) // também é uma maneira de método (sopondo que a[n] seja uma função)


// As chamadas de métodos também oodem envolver expressões de acesso á propriedade mais completaxas:

Custumer.surname.toUpperCase() // chama o método em custumer.surname

console.log(F().M())

// Os métodos e a palavra-chave this são fundamentais para o paradigma da programação orietada a objetos. Qualquer função que seja utilizada como método recebe um argumento inplícido - o obejeto por meio do qual ela é chamada. Normalmente, um método efetua algum tipo de operação nesse objeto e asintaxe de chamada de método é uma maneira elegante de expressar o fato de que uma função está operando em um objeto. Compare as duas linhas a seguir


rect.setSise(width, height);
setRectSise(rect,width,height);

// As funções hipoteticas chamadas nessas duas linhas de código podem efetuar exatamente a mesma operação no objeto (hipotetico) rect, mas a sintaxe da chamada de métodos na primeira linha transmite mais claramente a ideia de que o foco principal da operação é o objeto rect

// encadeamento de métodos
// 164 do livro
// Quando métodos retornam objetos pode-se usar o valor de retorno de uma chamada de método como parte de uma chamada subsequente. Isso resulta em uma serie ("encadeamento" ou "cascata") de chamada de métodos como  uma única expressão. ao trabalhar com a biblioteca de JQuerY e comum escrever um codígo assim

// localiza todos os cabeçalho, mapeia para suas identificações, converte em um Array e os classifica
$(":header").map(function(){return this.id }).get().sort();

// quando você escrever um método que não tem o seu proprío valor de retorno, pense em faze-lo retornar this

shape.setX(100).setY(100).setSise(50).setOutline("red").sefFill("blue").draw()

// Nesse exemplo de cima o objeto e nomeado uma vez e varios métodos foi chamado a patir dele 

// this é uma palavra chave e não uma variável ou nome de propiedade. A sistaxe de javaScript não permite atribuir valor a this

// Ao contrario das variáveis a palavra-chave this não tem escopo e as funções alinhada não herdam o valor de this de suas chamadoras.

var obj = {
   met: function() {
        var self = this;
        console.log(this === 0);
        fun();
        function fun(){
            console.log(this === 0);
            console.log(self === 0);
        }
    }
};
obj.met


