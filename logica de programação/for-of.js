// indice     0123456789...
const nome = 'luiz Oliveira'; // essa variavel é interavel siginifica que podemos interar sobre ela


for(let i = 0; i < nome.length; i++) { // for classico
    console.log(nome[i]) // para acessar cada letra
};
console.log('')
// use for in caso precisa do valor é do indice
for(let I in nome) {  // for que lê os indice de array é chaves de objeto
    console.log(nome[I]) // aqui funciona como o for-of porem precisa
    // do indice é do array juntos
}

// use o for of em caso precisar de apenas o valor
const nomes = ['santos','henrique','andre','algusto']
console.log('') 
for(let valor of nomes) { // for que pega o valor do array é de strings
    console.log(valor) // aqui só precisa do valor do array ou da string
}

console.log('')  
nomes.forEach(function(valor, indice, array){ // é um for como função
    console.log(valor,indice,array)
})

// vc pode usar qualquer um porém (for) vai precisar três pasos variavel,condição,incrementação.
// É (for in) precisa apenas da variavel que representa o indice é o nome do array ou do objeto é  
// (for of) precisa da variavel que representa o valor é nome do array ou da variavel que contem a string é para objeto não funciona pq não interavel(não possui indice)
// (forEach) pega array.forEach(valor,indice,array) é um for como função

// for(classico) -> Geralmente com interaveis(arrays, strings)
// for(in) -> retorna indice ou chave(arrays,strings,objetos)
// for(of) -> retorna o valor em sí(interaveis arrays, strings)
