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

function somar (n1,n2){
    const resultado = n1 + n2
    return resultado;
};
console.log(somar(1,3))
let res1 = somar(1,3);
let res2 = somar(5,10);
let res3 = somar(7,9);
console.log(res3)
console.log(resultado) // não consigo pegar o valor dentro da função pq tudo que ta na função fica na função
