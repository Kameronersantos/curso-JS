// estutura de repetição for
// console.log('linha 1')
// console.log('linha 2')
// console.log('linha 3')  // claramente isso tudo é uma repetição
// console.log('linha 4') // a esutura de repetição serve para vc 
// console.log('linha 5') // não fazer isso manualmente
// console.log('linha 6')

// tudo começa com a palavra (for);
// I == index
// valor inicial // condição // incrementação
for ( let i = 0;   i  <= 5 ; i++ ) { // a cada volta desse laço o i vai ser adicionado 1
// o for executa o que esta dentro desse bloco até os argumentos em cima
// ter avaliado como falso
// sempre quando essa condição (i <= 5) for avaliada como verdadeira
// os argumentos fica em loop até a condição for avaliada como falsa
console.log(`linha ${i}`); // aqui vc vai ver  0 ,1 ,2 ,3 ,4 ,5
}
 for(let iN = 450; iN <= 500; iN+= 10) { // aqui eu posso determinar em quantos numeros vai ser pulados 
console.log(`eu tenho R$${iN} na minha conta`); // nesse exemplo está sendo pulado em 10 em 10
// da para iniciar com qualquer valor é terminar com qualquer valor até mesmo 
// com o valor infinito 
}

for(let ind = 500; ind >= 0; ind-= 50) { // Aqui eu utilizo o decrementar(--)
console.log(`nesse mês perdi Kg${ind}`)
// também poso iniciar com um valor alto é diminuindo aos poucos
}
// exemplos de como usar o for
for(let pa = 0; pa <= 10; pa++) {
    let par = pa % 2 === 0 ? 'par' : 'inpar';
    console.log( pa,par)
}
const frutas = ['maça', 'pera', 'tomate','melão','maracuja','abacaxi'];
console.log(frutas.length) // aqui você ve o tamanho do Array
for(let f = 0 ; f < frutas.length; f++) {
    console.log(`indice ${f}`,frutas[f]) // no frutas[f] comverte o indice do array para o valores dentro 
    // do array
}


/* o for executa coisas dentro de bloco é apenas nele
 o bloco do for não precisa de ponto é virgula (;)
 porém vc usa ponto é virgula (;) para dividir as expressões
 O for precisa de três argumentos 
 1 criar uma variavel
 2 criar uma condição // condição serve para saber quando a estrutura de repetição vai parar
 3 é precisa incrementar(++) ou decrementrar(--) */
