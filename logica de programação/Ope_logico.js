/**
 * Operadores logíco
 * &&  -> and -> Todas as expressões precisam ser verdadeiras para retornar true
 * || -> or -> Todas  as expressões precisam ser falsas pra ser false
 * ! -> não
 */

//  Operador && 

let tenho_dineiro = 1;
let vai_chover = 0;
let não_vai_chover = 1;
//  true && true && false -> se uma das expressões for false a 
// expressão completa retorna false
//                      true  &&  true           ? true   : false
// As expressãoes tem que ser verdadeira para dar certo
let expressãoAnd = true && true && true && true;
console.log(expressãoAnd);
 let historia = tenho_dineiro && não_vai_chover ?'saio':'não saio';
 console.log(historia);

 

//  Operador ||

 const expressãoOR = false || false || false; 
 console.log(expressãoOR)
//  na expressão OR ou (||) só é false se todas as alternativas são falsas
 let maça = 2;
 let pera = 3;
//                  true  ou(||)  false  
// porém vou estar sastisfeito comendo maça ou pera 
 const quero_comer = pera || maça ? 'vou estar sastisfeito' : 'não estarei sastisfeito';
 console.log(quero_comer);

 const usuario = 'Luiz'; // form que um usuario digitou
  // supunha que esse dado esteja vindo de uma base de dados 
  const senha = '123456789'; // form que um usuario digitou
//                          true              false 
  const vaiLogar = usuario === 'Luiz' && senha === "12345678";
//  mas se caso usar o operador  ou(||) se o usario estivesse correto
//  é a senha errada a função vaiLogar daria certo 
  console.log(vaiLogar) // nesse caso retornaria false

// Avaliação de curto-Circuito(Short-Circuit)

// sé vc achou uma expressão falsa não nessario checar outras opções
// vai parar é retornar o valor falso "é o valor mesmo"
// se caso ele avalia todas as expressões é não acha uma falsa 
// ele vai mostra sempre a última 
// && -> false && true  -> false "o valor mesmo"
console.log('Luiz Atonio' && true   && 'Maria')
/** valores falsos 
 *  false == falso
 *  0 
 *  "", '',` ` == strings vazias
 *  Null / underfined
 *  NaN
 */
// qual quer coisa fora dessa lista avalia-se como true

function oi(){
    return 'oi'
}
const vai_executar = 'joaozinho';

console.log(vai_executar &&  oi());

// || -> true || false -> vai retornar "o valor verdadeiro"

console.log(0 || false || null || 'luis Augusto' || true) 

// por que ele exibiu 'luis Augusto' pq o OR(||) precisa de apenas uma
// expressão verdadeira para que ele retorne o valor verdadeiro
// ele retorna o primeiro valor verdadeiro que o JavaScript encontrou

const corU = null; // pelo fato de um elemento falso ele não sera selecionado
const corUsuario = 'vermelho' // mas quando é um elemento verdadeiro ele será selecionado por primeiro
const corPadrão = corUsuario || 'preto'
console.log(corPadrão)

const a = 0
const b = false
const c = false
const d = null
const e = NaN
console.log(a || b || c || d || e)
// se tudo for false, é o último elemento que será mostrado

// Operador !

const algo_de_errado = true;
const não_esta_certo = false;
// o operador ! ele inverte uma expressão por exemplo 
// o que (não esta certo) fica certo quando adiciona esse operador
let consertar = algo_de_errado && !não_esta_certo;
console.log(consertar) 

console.log(!true); // true porém sé vc ponhar ! atráz da espressão fica false
console.log(!!false);
// também da para inverter duas vezes o valor porém é bem pouco utilizavel

