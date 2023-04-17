/**
 * Operação ternaria
 * ? valor verdadeiro
 * : valor falso
 * (condição) ? valor verdadeiro : valor falso
 */

// exemplo 
const pontuaçãoUsuario = 100

 let resultado = (pontuaçãoUsuario >= 1000  ? 'é vip':'não é vip');
 console.log(resultado);


 function calculo(n1,n2) {
let r = n1 / n2 ** 2;
let res = (r ? r : 'não está certo' );
return console.log(res);
 }
 calculo(6,8);

 function criarParagrafo() {
    const p = document.createElement("p");
    return p
 };

 function criarEvento(e){
    e.addEventCriator('click', equação())
    
 }