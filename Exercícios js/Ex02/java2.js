// UMA DICA NÃO ESQUEÇA DE VERIFICAR SE OS ELEMENTOS HTML SÃO ID(#) OU CLASS(.)
// PARA NÃO TER PROBLEMAS DEPOIS

// OUTRA DICA TENTE O MAXIMO FAZER FUNÇÕES PARA CADA COISA DO SEU CODIGO
// PQ FICA MAIS FACIL ACHAR O ERRO QUANDO ACONTECER

const form = document.querySelector('.form')

// para capturar evento de submit do formulario 

form.addEventListener( 'submit', function(e) {  //  <- também pode utilizar isso
e.preventDefault();
const inputpeso = e.target.querySelector('.peso'); // -> aqui vc está só pegando o input não o valor
const inputaltura = e.target.querySelector('.altura');
// target vai me informar o elemento que está recebendo o evento
// exemplo: se for um click do mouse o (target) vai me avisar qual 
// elemento foi clicado

const peso = Number(inputpeso.value);
const altura = Number(inputaltura.value);

if(!peso) {
   setResultado('peso invalido', false); 
   return;
} 

 if(!altura) {
  setResultado('altura invalida', false);
  return;
 }
 
const imc = getimc(peso,altura);

const nivelIMc = getNivelImc(imc)


const msg = `Seu imc é ${imc} (${nivelIMc})`

 setResultado(msg,true)
 }); 

function getNivelImc(imc){
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso' ,
  'Obesidade grau 1', 'Obesidade grau 2' , 'Obesidade grau 3'];
  // ao lugar de lotar o codigo de else if vc pode colocar
  // as respostas em um Array é usar um if com return no final
  // com cada indice de acordo com respota do (imc)
if(imc >= 39.9) return nivel[5]; 
if(imc >= 34.9) return nivel[4]; // porém sé o codigo
if(imc >= 29.9) return nivel[3]; // for simples é curtos
if(imc >= 24.9) return nivel[2]; // como esse não precisa 
if(imc >= 18.5) return nivel[1]; // usar {} mas não é recomendado
if(imc < 18.5) return nivel[0];
// if(imc < 1000) { return nivel[9] } esse é recomendavel

} // função determina qual é o nivel do imc 

 function getimc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2)
 } // função faz o calculo do imc é pega ele 

function criaP() {
  const pa = document.createElement("p");
  return pa      // createElement() ele cria qualquer elemento por meio  do JavaScript
 
} // essa função tem a especialidade de criar paragrafos


function setResultado(msg, isvalid) {
    const resultado = document.querySelector('#calculo');
    resultado.innerHTML = '';
    const p = criaP();

    if(isvalid) { // p.classlist é bom pq vc consegue alterar o CSS por meio do 
      // Java Script
      p.classList.add('paragrafo-resultado'); // O add -> adiciona nomes para class 
    } else {
      p.classList.add('bad'); // o ClassList -> cria uma class para qualquer elemento
    }
   
    p.innerHTML = msg;
    resultado.appendChild(p);    // appendChild() ele insere o elemento criado por javaScript no elemento html  
                                 //  ele insere (p) criado por javaScript no elemento a html que é o (resultado) 
                                  
                                          

}; // essa função tem especialidade de colocar um pagrafo dentro da 
// div "calculo" é modificar o css

