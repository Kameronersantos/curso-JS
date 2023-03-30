//                      Operador de comparação
/*
 > Maior que
 >= maior que ou igual a
 < Menor que
 <= Menor que ou igual a
 == igual (só confira valor)
 === igual ao extremo (valor é tipo)
 != diferente (só confira valor)
 !== diferente ao extremo (valor é tipo)
 = Atribuição
*/
const expressão = 10 > 5;
console.log(10 > 5); // retorna um valor booleano
console.log(expressão) // esse valor mesmo numa varialvel retorna booleano
console.log(10 >= 5) // 10 é maior do que 5 porém não é igual mas ainda sim retorna true pq umas das opções era verdadeira, o valor só retornara false sé a segunda opção for maior do que a primeira exemplo: 10 >= 11
console.log(10 <= 11) // aqui é ao contrario do exemplo a cima. Aqui verifica sé a primeira expressão é menor do que a segunda se 10 é menor do que 11 no caso aqui é true


// posso criar variaves separada para cada expressão
const n1 = 10;
const n2 = 15;
const comp = n1 < n2
console.log(comp)

const le = '5'; // string
const nu =  5; // number 
const com = nu === le; // caso vc usar (==) ele vai voltar true porém isso está errado por isso é recomendado usar (===) para caso do seu codigo não da erro 
console.log(com);
const le1 = '5';
const nu1 =  5;
const com1 = nu1 !== le1; // esse caso serve também para o diferente ao extremo. só usa esse caso vc quer que o resultado seja diferente é não igual 
console.log(com1);



