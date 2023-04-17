const data = new Date('1997-05-26 00:00:00');
// const diaSemana = data.getDay(); // para fazer o teste do break deixe o const diaSemana como comentario
const diaSemana = 1 // é tire essa const do comentario
console.log(diaSemana);
let diaSemanaTexto;
// Quando vc tem varios valores na varialvel vc usa o Switch()
// O parâmetro do Swich deve ser aquela que vc vai checar
// no Switch avaliação do codígo não é automatica como no (if)
// temos que mostrar para o JavaScript que terminou a avaliação
// para executar um bloco de codígo vc digita abaixo da variavel (break)

switch(diaSemana) {
    case 0: // em caso do valor checado for 0
    diaSemanaTexto = 'Domingo' // esté bloco será executado É a verialvel mostrará esse valor
    break; 
    case 1: // sempre coloque dois pontos (:) depois do case para dar certo
    diaSemanaTexto = 'Segunda'
   // break; // sem o break o javaScript ele procura até achar a outra palavra break
    case 2:
    diaSemanaTexto = 'terça'
    break;
    case 3:
    diaSemanaTexto = 'Quarta'
    break;
    case 4:
    diaSemanaTexto = 'Quinta'
    break;
    case 5:
    diaSemanaTexto = 'Sexta'
    break;
    case 6:
    diaSemanaTexto = 'Sabado'
    break;
    default: // quando vc quiser um valor padrão digite (default) // é semelhante com o else
    diaSemanaTexto = ''
    //  em baixo de (default) não nessecita do break pq default é a ultima condição
}
console.log(diaSemana,diaSemanaTexto); // teste era para aparecer 1 segunda porém o bloco desse
// resultado não foi executado pq não tinha o break dai o javaScript procurou o break mais proximo
// que é o da terça. Por isso o break é importante é vc não deve esquecer de utilizar jamais

// switch dentro da função
const data1 = new Date('1999-5-23 21:45:20');
const weakday = data1.getDay();
let WeakDayText = getWeakDayText(weakday);
console.log(weakday,WeakDayText)

function getWeakDayText(Dia_Semana){
    let diaSemanaTexto; // essa variavel não existe fora dessa função
switch(Dia_Semana) {
    case 0: // em caso do valor checado for 0
    diaSemanaTexto = 'Domingo' // esté bloco será executado É a verialvel mostrará esse valor
    return diaSemanaTexto; 
    case 1: // sempre coloque dois pontos (:) depois do case para dar certo
    diaSemanaTexto = 'Segunda'
    return diaSemanaTexto;
     case 2:
    diaSemanaTexto = 'terça'
    return diaSemanaTexto; // o return pode fazer o mesmo papel do break
    case 3:
    diaSemanaTexto = 'Quarta'
    return diaSemanaTexto;
    case 4:
    diaSemanaTexto = 'Quinta'
    return diaSemanaTexto;
    case 5:
    diaSemanaTexto = 'Sexta'
    return diaSemanaTexto;
    case 6:
    diaSemanaTexto = 'Sabado'
    return diaSemanaTexto;
    default: // quando vc quiser um valor padrão digite (default) // é semelhante com o else
    diaSemanaTexto = ''
    return diaSemanaTexto;
}
}