// retorno da função 
// para fazer que a função retorna algo para nos agente usa a palavra (return)
// é quando agente usa a palavra return a função termina ali

function SomarNumero(n1,n2,n3) {
   let r = n1 + n2;
   return r  // aqui retorna o valor final da função
   let res = n1 + n2 + n3 
   return res // esse codígo não executado pq a partir do primeiro return a função termina
};
console.log(SomarNumero(5,6)) // não comfunda o console.log() como return ele exibe o que to petindo para exibir

function Somar2(n1,n2){
    console.log(n1+n2)
}
Somar2(23,45); // aqui só exibi o que está acontecendo é mostra no console

// vc pode fazer uma função que retorna algo simples como uma mudança da cor de fundo
// existe funções que retorna ou não retorna valores mas ainda sim faz alguma coisa 
// tipo cria um elemento, modifica a cor de uma string, altera um o tamanho de uma fonte

// document.addEventListener('click',function(){
//     document.body.style.backgroundColor = 'red'
// })

// também da para fazer uma função retornar um objeto
function criaPessoa(nome,sobrenome){
    return {
       nome,
       sobrenome
    };
}
const p1 = criaPessoa('lois','mendes');
const p2 = {nome:'augusto',sobrenome:'Miranda'};

console.log(typeof p1) // tanta o p1 quanto p2 são objetos
console.log(typeof p2)

function falaFrase(começo){
    function falaResto(resto){
        return começo + ' ' + resto // esse return é do FalaResto
    // é possivel usar um parâmetro de uma função externa dentro de uma função interna como mostra acima
    }
return falaResto; // quando estou retornando a função sem executar ela que dizer que mostrara a função em sí
// esse return é da função falaFrase
};

const OlaMundo = falaFrase('Olá,'); // aqui há uma variavel que recebe uma função que tem um argumento que se refere 
// ao começo de uma frase, é a variavel se-torna uma função

console.log(OlaMundo); // sem executar esse variavel que se-tornou uma função mostrara a função falaResto

console.log(OlaMundo('Mundo!')); // ao executar é adicionar um argumento a função falaResto executa o valor do retorno 
// mais o argumento da função falaFrase('Ola,') é no final fica (Ola, Mundo!)

console.log(falaFrase()) // a função falaFrase sem nenhum argumento retorna a função falaResto

// outro exemplo
console.log('#####')

const fala = falaFrase('Ola'); // aqui recebe o começo da frase // 

console.log(falaFrase('oi')) // O fato da função falaFrase retornar uma função não executada é mostrar a mesma
// ao adicionar o seu argumento ele não é lido porém ele é arquivado na memoria

const resto = fala('Mundo'); // aqui recebe o resto da frase
console.log(resto) // aqui mostra o argumento arquivado do falaFrase junto com argumento falaResto

// exemplo onde esse codígo seria usado

// essa é a forma mais lenta é repetitiva
function Duplica(valor1) {
    return valor1 * 2;
}
function Triplica(valor1) {
    return valor1 * 3;
}
function Quadoplica(valor1) {
    return valor1 * 4;
};

console.log(Duplica(2))
console.log(Triplica(2))
console.log(Quadoplica(2))
// codigo mais resumido é rapido

function criaMultiplicar(multiplicador){
   // o multiplicador está nesse escopo 
    return function multiplicação(n){
        return n * multiplicador // ele chamado aqui pq ele está perto do escopo dele
       };
    // como agente não executou a função aqui
};

// as funções de variaveis vai lembra do vizinho que o parâmetro(multiplicador)

// esse tipo de função se-chama close pq ele fecha o escopo mesmo já sendo usado

const duplica1 = criaMultiplicar(2);  // duplicar1 lembra do escopo multiplicador que na hora da sua criação era 2 
const triplica1 = criaMultiplicar(3); // triplica1 lembra do escopo multiplicador que na hora da sua criação era 3
const quadroplica1 = criaMultiplicar(4); // quadroplica1 lembra do escopo multiplicador que na hora da sua criação era 4

console.log(duplica1(2));
console.log(triplica1(2)); // a função é executada aqui
console.log(quadroplica1(2));

// em resumo a função pode retornar qualquer coisa outras funções, arrays objetos, valores, lementos criados, Css, 
//  setInterval entre outras coisas


 