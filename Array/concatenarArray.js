const a = [1,2,3];
const a1 = [4,5,6];
const a2 = a + a1 // dessa forma não da certo aqui o array deixa de ser array para ser string
console.log(typeof a2) // 1,2,34,5,6 // este é o resultado e dessa foram está errado

const a3 = a.concat(a1,[7,8,9],'luiz'); // usando o método concat() vc consegui comcatenar um array com outro
// primeiroArray.comcat(Array_que_vcQuerComcatenar) é assim que vc usa esse método na pratica
// também da para ponhar varios arrays em seguidas
console.log(a3)
const a4 = [...a,'Kamerone',...a1,...[7,8,9]]; // em caso vc adicione um array literal sempre utilize rest operator 
// em caso vc não deseje um array dentro de outro array 
console.log(a4) // operador rest(...) ele também é spread que significa espalhar é esse operador também 
// faz a comcatenação dos arrays

// é isso funciona tanto para array como para objeto