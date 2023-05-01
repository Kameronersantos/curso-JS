// while e Do While Estrutura de repetição

let controle = 0; // no while a variavel fica fora do bloco
// (const) não funciona com while é do While só (let)
const nomes = ['Julio','leandro','Leticia']
while(controle < nomes.length) {
console.log(nomes[controle])
controle++ // sem o ++ a variavel fica mostrando valores infinito é com isso o navegador pode travar
// é também ao a pertar F8 não vai funcionar vc vai ter fechar o VS code é abrir novamente
}

function random(min , max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
};
// vc não sabe quando o laço de repetição vai terminar? por isso vc deve usa While 
// vc deve usar while quando vc não sabe o tamanho do comprimento do valor ou que tem nele
let rand = 10; // no caso da variavel rand estiver 10 o While não vai ser executado pq o seu valor é false
const min = 1;
const max = 50;

while(rand !== 10){ // no caso de cima essa variavel está falsa 
// como a condição é avaliada primeiro bloco só é executado depois da avaliação da condição
    rand = random(min,max);
    console.log(rand); // esse bloco não é executado

}
console.log('######')
//  o (do While) ele executa o codigo é depois ele verifica a condição

do{ // o (do) será executado pq ele executa o bloco primeiro é depois avalia a condição
    // é como a variavel muda o seu valor dentro do bloco a variavel se-torna verdadeira
    rand = random(min,max); // aqui o variavel muda o valor
    console.log(rand);
} while(rand !== 10); // é torna a condição verdadeira

console.log('######')

do{ // mesmo quando a condição estiver errada  (do while) ela sempre será executada uma vez
 console.log(rand);
 } while(rand !== 10); 