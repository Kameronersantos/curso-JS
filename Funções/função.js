// A forma mais básica de uma função é utilizada com id,class,name de elementos HTML em seguida no () pode-se colocar parametros como mostra nesse exemplo. a outra forma de nomear uma função dando um nome autoexplicativo do que ela faz


//          nome      parametro
function   saudação   (nome){
    // console.log('oi', nome ) // bloco da função
    return `oi ${nome}`
    // a forma certa é sempre utilizar o argumento return para o valor final aquele que vc quer mostra na função chamada
};
//   argumento do parametro
saudação('kamerone') // chamada da função 
saudação('João') // a função ela pode ser repedida varias vezes com 
saudação('Davi') // outros valores
const variavel = saudação('kamerone');
console.log(variavel) // pórem ela não pode ser colocada com um valor de variavel pq não foi expecificado o que a função deve retornar mesmo assim ela é executada mas se usar a expresão return isso muda

function somar (n1 = 1,n2 = 1){ // é possivel os parametros terem valores pre-definidos
    const resultado = n1 + n2
    return resultado;
    // tudo abaixo da expresão return não será executado
    console.log('Ola, Mundo!')
};
console.log(somar(1,3))
let res1 = somar(1,3);
let res2 = somar(5,10);
let res3 = somar(7,9);
console.log(res3)
// console.log(resultado) // não consigo pegar o valor dentro da função pq tudo que ta na função fica na função
let res4 = somar(4,)
console.log(res4) // caso não exista o valor do parametro na função chamada mostrara o resultado NaN. pórem caso os parametros tenha os valores pre-definidos, a chamada desses paramentros ira mostra eles a não ser que dentro da chamada vc adicione argumento n1 esse argumento se-somara com a pre-definição do n2 trazendo um valor diferente do planejado mas vc ponhar valores em todos os paramentros resutara o valor estabelecido pela chamada da função

// função em uma variavel 
const rais = function(x){return x ** 0.5 };
let r = rais(25);
console.log(r)
// também uma outra forma de fazer uma função é as Aron Function
// ela não precisa de parenteses no parametro é nem no bloco de função é não utiliza return 
const quadrada = n => Math.sqrt(n)

let re = quadrada(100)
console.log(quadrada(100))