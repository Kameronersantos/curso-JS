const frutas = ['Limão','Maça','Perá','Tangerina','Framboza','Ameixa'] 
// quando não tem um Array dentro de um Array se chama vetor

for(let i = 0; i < frutas.length; i++){
//    console.log(frutas[i]) // essa é a forma classica
}

// nessa forma o let(i) está lendo os indice do array
// frutas
// é quando for um objeto ele vai ler a chaves
// for in -> ele lê os indices ou chaves do objetos

const frutas1 = ['Limão','Maça','Perá'] 

console.log('') // para dar espaço entres os consoles.logs

for(let i in frutas1) {
    console.log( frutas1) // array inteiro
}

console.log('') // para dar espaço entres os consoles.logs

for(let i in frutas1) {
    console.log( frutas1[i]) // os valores do array
}
console.log('') // para dar espaço entres os consoles.logs

for(let i in frutas1) {
    console.log(i) // os indice do array
}

console.log('') // para dar espaço entres os consoles.logs

const person = {nome:'gizele',sobrenome:'Almeida',idade:33};

for(let chaves in person){
    console.log(chaves) // mostra as chaves do array
}
console.log('') // para dar espaço entres os consoles.logs
for(let chaves in person){
    console.log(person) // mostra o array inteiro
}
console.log('') // para dar espaço entres os consoles.logs
for(let chave in person){
    console.log( person[chave]) // os dois juntos mostra os valores do array
}
console.log('') // para dar espaço entres os consoles.logs

for(let chave in person){
    console.log( chave, person[chave]) // mostrar a chave é depois os valores do array fica algo bem organizado
}
console.log('') // para dar espaço entres os consoles.logs

console.log(person.nome) // essa é uma forma de acessar um valor de uma chave de um objeto
console.log(person['nome']) // essa é outra forma
const chave = 'nome'
console.log(person[chave]) // isso aqui é muito util podemos pegar valores de forma dinamica ao lugar do indice poderia pegar a variavel que possui o indice

// objetos são como coisas da vida real que podemos dar atributos como por exemplo:
// const carros = {motor:#,pneu:#,marca:#}
// const celular = {marca:#,versão:# cor:#}