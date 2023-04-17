// Objeto Date

// para ter mais conhecimento sobre o objeto Date 
// vai para esse link -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// Date() é uma função construtora junto com (new) interliga com a função construtora sem ele Date() 
// não funcionara
// função construtora sempre começara com a letra Mauscula (Date)
const tresHoras = 60 * 60 * 3 * 1000 // Esse é o calculo para o resultado ser 1 hora
const dataUnix = new Date(0 + tresHoras); // A data 0 é 01/01/1970 : O Timestamp unix ou epoca unix
console.log(dataUnix.toString()); // dessa forma mostrara a data atual da versão Americana
// essas datas são contadas por milecimos de segundos des 01/01/1970 que é o marco zero
//                     a   m  d  h  m  s  ms
const data = new Date(2023,2,17,15,60,60,999); // tanto segundos como minutos vão até 59 
// se ponhar 60 vai adicionar outra hora ou outro minuto é milisegundos vai até 999
console.log(data.toString());
/**
 * a -> ano
 * m -> mês
 * d -> dias
 * h -> horas
 * m -> minutos
 * s -> segundos
 * ms -> milisegundos
 */
// tem como mandar uma string como data isso se-chama DateString
const data1 = new Date('2023-03-24 20:45:30'); // assim é mais usado
console.log(data1.toString());
console.log('Dia', data1.getDate()); // pega o dia do mês
console.log('mês', data1.getMonth() + 1); // pega o mês para pegar o mês certo é getMonth + 1 // mês começa do 0
console.log('ano', data1.getFullYear()); // pega o ano 
console.log('hora', data1.getHours()); // pega as horas 
console.log('minuto', data1.getMinutes()); // pega os minutos
console.log('segundo', data1.getSeconds()); // pega os segundos
console.log('milesegundos', data1.getMilliseconds()); // pega os millesegundos
console.log('Dia da semana', data1.getDay()); // pega numero do dia da semana // 0 - Domingo 6 - Sábado


function zeroEsquerda(num){
    return num >= 10 ? num :`0${num}` 
}
// função para formatar data
function formataData(data2){
  const dia = zeroEsquerda(data2.getDate());
  const mês = zeroEsquerda(data2.getMonth() +1) ;
  const ano = zeroEsquerda(data2.getFullYear());
  return `${dia}/${mês}/${ano}`
};

const data2 = new Date()
const DataBrasil = formataData(data2);
console.log(DataBrasil)