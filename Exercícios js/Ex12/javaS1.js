// essa é a maneira mais longa

// const h1 = document.querySelector('.atualize h1');
// const data3 = new Date();

// function diaSemana(Dia_semana) {
//     let allDays = '';
//     switch(Dia_semana){
//      case 0:
//      allDays = 'Domingo';
//     return allDays
//      case 1:
//      allDays = 'Segunda-freira';
//     return allDays
//     case 2:
//      allDays = 'Terça-freira';
//     return allDays
//     case 3:
//      allDays = 'Quarta-freira';
//     return allDays
//     case 4:
//      allDays = 'Quinta-freira';
//     return allDays
//     case 5: 
//       allDays = 'Sexta-freira';
//     return allDays
//     case 6:
//      allDays = 'Sabado';
//     return allDays
//     default:
//     allDays = '';
//     return allDays
//     }
// }
// function getNomeMes(Nome_mes) {
//         let NameOfMonth = '';
//         switch(Nome_mes) {
//         case 1: 
//         NameOfMonth = 'Janeiro';
//         return NameOfMonth;
//         case 2: 
//         NameOfMonth = 'Fevereiro';
//         return NameOfMonth;
//         case 3: 
//         NameOfMonth = 'Março';
//         return NameOfMonth;
//         case 4: 
//         NameOfMonth = 'Abril';
//         return NameOfMonth;
//         case 5: 
//         NameOfMonth = 'Maio';
//         return NameOfMonth;
//         case 6: 
//         NameOfMonth = 'Junho';
//         return NameOfMonth;
//         case 7: 
//         NameOfMonth = 'Julho';
//         return NameOfMonth;
//         case 8: 
//         NameOfMonth = 'Agosto';
//         return NameOfMonth;
//         case 9: 
//         NameOfMonth = 'Setembro';
//         return NameOfMonth;
//         case 10: 
//         NameOfMonth = 'Outrubro';
//         return NameOfMonth;
//         case 11: 
//         NameOfMonth = 'Novembro';
//         return NameOfMonth;
//         case 12: 
//         NameOfMonth = 'Dezenbro';
//         return NameOfMonth;
//         default:
//         return NameOfMonth = '';
//         }
//  }
//  function CriaDate() {
//     const DiaSemana = data3.getDate();
//     const numeroMes = data3.getMonth();
//     const horas = data3.getHours();
//     const Minutos = data3.getMinutes();
//     const nomedia = diaSemana(DiaSemana);
//     const NomeMes = getNomeMes(numeroMes);
//     return (`${nomedia} ${data3.getDate()} de ${NomeMes} de
//     ${data3.getFullYear()} <br> ${data3.getHours()}:${data3.getMinutes()}`)
//  }
//     h1.innerHTML = `${diaSemana(data3.getDay())} ${data3.getDate} de ${getNomeMes(data3.getMonth())} `;

// é essa é a maneira mais curta é melhor

const h1 = document.querySelector('.atualize h1');
const data3 = new Date();
const opções = {
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric'
};

h1.innerHTML = data3.toLocaleString('pt-br', opções);

// ou mais curto ainda

// h1.innerHTML = data3.toLocaleDateString('pt-br', {weekday:'long',year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric'});