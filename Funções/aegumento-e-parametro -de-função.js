// pagina 166
// As subseções a seguir descreve o que acontece quando uma função é com menos argumentos do que parâmetros declarados ou com mais argumentos do que parâmetros decrarados. Elas também demostram como é possível testar explicidamente o tipo dos argumentos da fumção, caso seja necessário que uma fumção não seja chamada com argumentos incompatíveis.

// parâmetro opicionais



// anexa  nomes das propriedades enumeravais do objeto o
// array a e retorna a. Se o for omitido cria  e retorna um novo array.
function getpropertyNames(o ,/*opcional*/a){
    if(a === undefined) a == []; // se for undefined usa um novo array em a
    for(var property in o ) a.push(property);
    return a

}
var o = {p:2};
// Essa função pode ser chamada com 1 ou 2 argumentos
var a = getpropertyNames(o);  // obtêm as propridades de o em um novo array
getpropertyNames(p,a); // anexa as propriedades de p nesse array

// Lista de argumento de comprimento variavel: o objeto arguments
// pagina 166

// O objeto Argumento é util de várias maneiras. O exemplo a  seguir mostra como é possivel utiliza-lo para verificar se uma função é chamada com o número de argumentos esperado, pois javaScript não faz isso automaticamente

function f(x,y,z) {
    if(arguments.length != 3) {
        throw new Error("função f chamada com " + arguments.length +"arguments,mas isso executa 3 argumentos");
    }
    // agora executa a função real
}

// Note que muitas vezes é desnecesário verifica o número de argumentos assim. O comportamento padrão de JvaScript é satisfatório na maiorias dos casos: os argumentos ausentes são underfined e os argumentos extras são simplesmento ignorados.

function max(/*......*/) {
    var max = Number.NEGATIVE_INFINITY;
    // Itera através de argumentos, procurando (e lembrando ) o maior.
    for(var i = 0; i <arguments.length; i++)
    if(arguments[i] > max) max = arguments[i];
    // Retorna o maior
    return max
}
var largest = max(1,10,100,2,3,1000,4,5,10000,6); //=>10000
console.log(largest)

// pagina 168

// funções como essa pode aceitar qualquer numero de argumento é são chamadas de funções varangs


// funções varangs não precisam permitir chamadas com zero argumentos. É perfeitamente razoável usar o objeto arguments[] para escrever que esperam um número fixo de argumentos nomeados é obrigatorios, seguindo de um número arbitrário de argumentos opcionais não nomeados

// lembre-se que arguments[] não é um array, é um objeto Arguments.

function mudar(x){
    console.log(x); 
    arguments[0] = null
    console.log();
}

// Quando vc tem um parâmetro na função é vc usa o objeto arguments[] o valor dentro dele vai ser o valor do parâmetro é muda-lo também vai mudar o valor do parâmetro

// Esse comportamento não tem no modo restrito "use Strict"

// As propiedades callee e caller
// pagina 168

var factorial = function(x) {
    if(x <= 1) return 1;
    return x * arguments.callee(x-1)

};
//  objeto arguments[] define as propriedades callee e caller no modo restrito elas dão TypeErro  se tentar ler ou gravar-las. Fora dso modo restrito a propriedade callee se refere a função que está sendo executada no momento. caller é uma propriedade que dá acesso à pilha de chamada é também se refere à função que chamou aquela. E ocasionalmente a propriedade callee é útil para permitir que funções não nomeadas chamam a sí mesmas recursivamente

// Usando propriedades de objeto como argumentos 
// pagina 169 
// quando uma função tem mais de três parâmetros, torna-se difícil para o programador que a chama lembrar-se da ordem correta em que deve passar argumentos. Para que o programador não precise consultar a ducomentação cada vez que utilizar para função, pode ser apropriado permitir que os argumentos sejam passados em pares nome/valor em qualquer ordem. Pra imprementar esse estilo de chamada de método, defina a sua função de modo esperar um único objeto como argumento e faça os usuario da fumção passarem o objeto que defina os pares nomes/ valor exigidos. O código função especifique padrões para argumentos omitidos:
function arraycopia(/*array*/from, /* índice */ from_start,/* array*/ to, /* índice */ to_start,/*integrar*/ length) {
    
}
// copie os length elements do array from para to 
// começa a copia com elemento from_start no array from
// e copie  esse elemento em to_start no array to 

function easycopy(args){
    arraycopia(args.from, 
        args.from_start || 0, // obeserve o valor padrão fornecido 
         args.to,  
        args.to_start || 0,
        args.length);
}
// Aqui está como easycopy() poderia ser chamada
var a = [1,2,3,4], b = [];
easycopy({from: a, to: b, length: 4});

// tipos de argumentos 
// pagina 170
// o JavaScript faz comversão de tipo de forma livre todos os tipos podem ser comvertidos para string quando a fumção tentar utilizar como string para isso tem o método to string 
// Mas isso nem sempre acontece quando o 1 argumento espera um array qualquer outro argumento que não seja um array (ou um objeto parecido com array ) vai falhar.
// A não ser que vc escreva uma função descatavel que chamara 1 ou 2 vezes para testar se da erro

function somar(a) {
    if(isArrayLike(a)) {
        var total = 0
        for(var i = 0; i < a.length; i++){
            var elemento = a[i];
            if(elemento == null) continue;
            if(isFinite(elemento)) total += elemento;
            else throw new Error("soma(): elementos deve ser um numero infinito");

        }
        return total
    }
        
    else throw new Error("soma():argument deve ser parecido com array")
};

// JavaScript é uma linguagem muito flexivel e pouco tipada, e as vezes é apropriado escrever funções flexíveis quanto ao número e ao tipo de argumento que recebem. 
function flexivel(a){
    var total = 0;
    for(var i = 0; i < a.length; i++){
        var elemento = a[i];
        if(elemento == null) continue;
        if(isArray(elemento)){
            n = flexivel.apply(this,elemento);
        } else if (typeof elemento === "function"){
            n = Number(elemento())
        } else n = Number(elemento);
            
        if(isNaN(n)) throw Error("flexivel(): não consegue converter " + elemento + "para numero");
        total += n
    }
    return total
};

// O método flexivel() em cima adota essa estrategia (provavelmente ao extremo). Por exemplo ele aceita qualquer número de argumentos mas processa recursivamente