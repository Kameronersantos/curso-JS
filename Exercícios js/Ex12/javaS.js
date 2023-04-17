 
// Eu temtem resolver esse exercicio dessa forma 

// const bloco = document.querySelector('.atualize h1');

 
// bloco.addEventListener('click', function(){
//     bloco.innerHTML = `${getallDate()}`
//     console.log(getmes());
    
// })

// function getallDate() {
//     const data1 = new Date();
//    const dia = zeroEsquerda(data1.getDate());
//    const ano = zeroEsquerda(data1.getFullYear());
//    const horas = (data1.getHours())
//    const minutos = (data1.getMinutes())
//    return  `${dayOfWeak()}, ${dia} de ${monthOfYear()} de ${ano} <br> ${horas}:${minutos}`
//    };
// function zeroEsquerda(num) {
//     return num > 10 ? num : `0${num}`;
// }

// function getDay() {
// const data = new Date();
// let Dia = data.getDay();
// return Dia
// };

// function dayOfWeak() {
// let allDays = '';
// switch(getDay()){
//  case 0:
//  allDays = 'Domingo';
// return allDays
//  case 1:
//  allDays = 'Segunda-freira';
// return allDays
// case 2:
//  allDays = 'Terça-freira';
// return allDays
// case 3:
//  allDays = 'Quarta-freira';
// return allDays
// case 4:
//  allDays = 'Quinta-freira';
// return allDays
// case 5: 
//   allDays = 'Sexta-freira';
// return allDays
// case 6:
//  allDays = 'Sabado';
// return allDays
// default:
// allDays = '';
// return allDays
// }
// }


// function getmes() {
// const data2 = new Date(); 
// let mês = data2.getMonth() +1;
// return mês;
// }

// function monthOfYear() {
// let NameOfMonth = '';
// switch(getmes()) {
// case 1: 
// NameOfMonth = 'Janeiro';
// return NameOfMonth;
// case 2: 
// NameOfMonth = 'Fevereiro';
// return NameOfMonth;
// case 3: 
// NameOfMonth = 'Março';
// return NameOfMonth;
// case 4: 
// NameOfMonth = 'Abril';
// return NameOfMonth;
// case 5: 
// NameOfMonth = 'Maio';
// return NameOfMonth;
// case 6: 
// NameOfMonth = 'Junho';
// return NameOfMonth;
// case 7: 
// NameOfMonth = 'Julho';
// return NameOfMonth;
// case 8: 
// NameOfMonth = 'Agosto';
// return NameOfMonth;
// case 9: 
// NameOfMonth = 'Setembro';
// return NameOfMonth;
// case 10: 
// NameOfMonth = 'Outrubro';
// return NameOfMonth;
// case 11: 
// NameOfMonth = 'Novembro';
// return NameOfMonth;
// case 12: 
// NameOfMonth = 'Dezenbro';
// return NameOfMonth;
// default:
// return NameOfMonth = '';
// }
// }


// forma de resolver esse exercicio sem Switch

const bloco = document.querySelector('.atualize h1');
const data = new Date();

function pegaMonth(num_mes) {
    const meses = ['Janeiro', 'Fevereiro', 'março','abril','maio','junho','julho'
    ,'Agosto','Setembro','Outrubro','Novembro','Dezembro'];
    return meses[num_mes];
}
function pegadays(num_dia) {
    const dia = ['Domingo','Segunda','Terça','Quarta','Quinta','sexta','Sabado'];
    return dia[num_dia];
};
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
 }

function CriaDate() {
  const DiaSemana = data.getDay();
  const numeroMes = data.getMonth();
  
  const nomedia = pegadays(DiaSemana);
  const NomeMes = pegaMonth(numeroMes);
 return (`${nomedia} ${data.getDate()} de ${NomeMes} de
 ${data.getFullYear()} <br> ${data.getHours()}: ${zeroEsquerda(data.getMinutes())}`)
}
     bloco.innerHTML = `${CriaDate()}`;