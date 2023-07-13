/* 
Object.values(mostra os valores das chaves)
Object.entreis(ele mostra tanto os valores quanto as chaves)
Object.assign(objetoVazio, ObjetoQueVcQuerCopiar) // aqui copia objeto também
Object.getOwnPropertyDescriptor(o,prop)
...(spread)(ele copia tanto array como objetos)

Object.keys(retorna chaves)
Object.defineProperty(define uma propriedade de um objeto)
Object.defineProperties(define mais de uma propriedades de o objetos)
Object.freeze(congela objeto)

*/


const produto2 = {nome:'Caneca', Preço:1.8}
const outracoisa = produto2;
produto2.nome = 'Luis Otavio' // tanto alterar a variavel que cria o objeto como a variavel que pega a referencia do 
// objeto consegue modificar o objeto em si as alterações são validas para os valores finais do objeto

// como que faço para o outracoisa ser copiado não apontando para o mesmo valor 
const outracoisa1 = {...produto2, material: 'Porcelana'} // para fazer isso use o spread operator
outracoisa.Preço = 4.9 
outracoisa1.nome = 'Augosto Pena'
console.log(outracoisa); // a variavel produto2 modificou o nome é o outracoisa acatou essa modificação
console.log(produto2) // a variavel outracoisa modificou o preço é o produto2 acatou essa modificação

console.log(outracoisa1) // a aqui é uma copia do produto2 é não algo que aponte para o mesmo valor
// como os dois console.log() que estão em cima. Além de ser uma copia é possivel adicionar outras propriedades
// no objeto copiado

// outra forma de copiar é usando Object.assign()
// o primeiro parametro é um objeto vazio é o segundo parametro é objeto que vc quer que va para o objeto vazio
// é o terceiro parametro pode ser uma chave nova ou um outro objeto
const Caneca = Object.assign({},outracoisa1,{marca:'Klabin'}); 
console.log(Caneca) // copiou o outracoisa1

Caneca.nome = {nome: produto2.nome} // em caso vc precisar de apenas copiar uma chave é não o objeto inteiro
console.log(Caneca) 

console.log(Object.keys(Caneca)) // mostra as chaves que vc tem
Object.freeze(produto2) // daqui em diante não como alterar o objeto produto2 
produto2.Preço = 9.9
console.log(produto2) // não foi alterado


Object.defineProperty(Caneca,'nome',{
   value:'Caneca', enumerable: true, writable: false, configurable: false
});

console.log(Object.getOwnPropertyDescriptor(Caneca,'nome')) // ele ve as propredades como writable, configurable,
// enumerable é mostra sé elas são falsas ou verdadeiras
Caneca.nome = 'Outra Coisa' // não consegue ser modificado por caso da mudança do defineProperty
delete Caneca.marca // é pussivel deletar Caneca.marca pq não teve mudança do defineProperty
console.log(Caneca)

console.log(Object.values(produto2)) // é mesma coisa de Object.keys porém ao lugar de chaves ele mostra
// os valores das chaves
console.log(Object.entries(produto2)) // aqui vc ve as chaves é os valores juntos em um array


const array = [1,2,3,4,5,6];
const outroArray = [...array];
console.log(array) // o spread funciona em arrays
console.log(outroArray)