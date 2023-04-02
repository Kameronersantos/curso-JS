const hora = '50';

//  sempre que utilizo a palavra (else) ou (else if), eu preciso de um (if) antes das duas
//  só posso ter um (else) na condição
// (if) pode ser usado sozinho
//  posso ter varios (else if) na condição
// também podemos usar apenas (if) é (else) sem o (else if) caso precise

 if(hora < 12) { // se essa condição for verdadeira 
    console.log('bom dia'); // mostrara TUDO que estiver nesse bloco
 } else { // caso não for 
    console.log('vai tomar caju') // mostrara TUDO que estiver nesse bloco
 };


 if( hora === 10) { // quando vc só usa if se a sua condição 
  console.log('é verdade') // não for verdadeira ela não voltara
 }; // NADA


 if( hora <= 0 && hora <= 12) {  // se essa condição for verdadeira 
    console.log('Bom Dia');  // mostrara TUDO que estiver nesse bloco
 } else if ( hora > 12 && hora <= 18) {
 // se uma das condições dos (else if)
    console.log('Boa Tarde');
 } else if ( hora > 18 && hora <= 23){
//  for verdedeira mostrara TUDO que estiver no bloco
    console.log('Boa Noite');
 } else { // É se não for nenhuma das codições a cima for verdadeira
    console.log('Óla') // mostrara TUDO que estiver nesse bloco
 }


const ta_chovendoLaFora = false;
// O (if) é (else) neste caso ele também pode analizar sé a variavel é 
// verdedeira ou falsa

if(ta_chovendoLaFora){ 
// sé a variavel é verdadeira estará no bloco (if)
console.log('Não saio de casa')
} else {
// sé a variavel for falsa estara nó bloco (else)
console.log('Vou sair de casa')
} 


// else () {  
// não faça isso tá errado
// }


const numeros = 7;
// Sé (numeros >= 0 && numeros <= 5) ocorrer, façã isso {codigo}
// Sé não faça isso {codigo}
if (numeros >= 0 && numeros <= 5) {
// Sé (numeros >= 0 && numeros <= 5) ocorrer, façã isso {codigo}
console.log('O seu numero está entre 0 e 5')
}else if (1 === 1) {
console.log('LITERAL') // também é verdadeiro
// sé tiver mais um condição verdadeira mesmo que ele não tenha nada ver  
// com o codígo ele pode substituir o condição que tem a ver com o codígo 
// principalmente sé ele estiver em cima da codição verdadeira
} else if (numeros >= 6 && numeros <= 8) {
console.log('O seu numero está entre 6 e 8')
}  else if (numeros >= 9 && numeros <= 11) { 
   console.log('O seu numero está entre 9 e 11') // esse codição é verdadeira
} else {
   console.log('O seu numero Não está entre 0 e 11')
}
// Só uma codição verdadeira séra executada no bloco ( é aquelá que aparecer por primeiro)

if( numeros < 7) {
console.log('O tipo da variavel numeros é Number')
 } 
// sé for checar uma coisa independente faço um (if) independente
// sé preciso de mais condições crio (else if)
// sé eu preciso do SÉ NÃO é (else)