// chamando funções 
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