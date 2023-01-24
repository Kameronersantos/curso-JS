// pagina 166
// As subseções a seguir descreve o que acontece quando uma função é com menos argumentos do que parâmetros declarados ou com mais argumentos do que parâmetros decrarados. Elas também demostram como é possível testar explicidamente o tipo dos argumentos da fumção, caso seja necessário que uma fumção não seja chamada com argumentos incompatíveis.

// parâmetro opicionais

// anexa os nomes das propriedades enumeravais do objeto o
// array a e retorna a. Se o for omitido cria  e retorna um novo array.
function getpropertyNames(o ,/*opcional*/a){
    if(a === undefined) a == []; // se for undefined usa um novo array em a
    for(var property in o ) a.push(property);
    return a

}
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