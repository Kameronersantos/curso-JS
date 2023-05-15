
// coisas importates dos exercícios: vc encontra esse Ex 2
if(imc >= 39.9) return nivel[5]; 
if(imc >= 34.9) return nivel[4]; // porém sé o codigo
if(imc >= 29.9) return nivel[3]; // for simples é curtos
if(imc >= 24.9) return nivel[2]; // como esse não precisa 
if(imc >= 18.5) return nivel[1]; // usar {} mas não é recomendado
if(imc < 18.5) return nivel[0];

const imc = peso / altura ** 2; // calculo IMC
let n = 2;
const quadrado = n ** 2; // aqui verifica n ao quadrado

p.classList.add('paragrafo-resultado'); // O add -> adiciona nomes para class 
p.classList.add('bad'); // o ClassList -> cria uma class para qualquer elemento
p.classList.remove('bad') //  ele remove uma class
p.classList.contains('paragrafo-resultado') // contains ele verifica se existe uma class com o valor dentro do (parênteses)

botão.setAttribute('class', 'Apagar'); // setAttribute pode adicionar uma class, id, name e title como primeiro parâmetro é o segundo é o valor dos mesmos
botão.setAttribute('title', 'Apagar essa tarefa'); // title significa o titulo do elemento que o seu mouse está em cima, Exemplo: sé o seu mouse estiver em cima do botão apagar vai aperecer a mensagem "Apagar essa tarefa"
 
// O setAttribute() em muitos cassos é melhor que o classList por um fato obvio O classListe só pode usar class
// é o setAttribute pode usar id,name,class,title é etc..


resultado.appendChild(p); // appendChild() ele insere o elemento criado por javaScript no elemento html  
//  ele insere (p) criado por javaScript no elemento a html que é o (resultado) 
 
// vc encontra esse Ex 9

const form = document.querySelector('.form'); // AQUI vc utiliza o querySelector ele é melhor getElementById getElementByClass
// getElementByName no querySelector recebe dois tipos de argumnetos o primeiro tipo é a class ou id ou name
const form1 = document.querySelector('p'); // o segundo é os elementos como: p,div,section,h1,span,article etc....
//                            class do elemento Pai   elemento filho dentro do elemento Pai
const para1 = document.querySelectorAll(' .paragrafo     p'); // da para selecionar class, id e name de um elemento pai é da para chamar elemento filho dentro do elemento pai exemplo:

/**    
 * <div class="paragrafo"> // esse é o elemento pai
 *  <p>oi</p>  // aqui são os elementos filhos dentro do elemento pai
 *  <p>oi</p>
 *  <p>oi</p>     
 * </div>
 */

form.addEventListener('submit',recebeEventoForm); // o addEventListener ele escuta é adiciona o evento chamado
// ele adiciona na variavel que com diz a elemento Html exmplo: a variavel form representa o elemento formulario que 
// recebe o evento submit(para saber o que esse evento faz vai na pasta logica de programação com arquivo eventos)
// o segundo argumento é de que função vai vir 
form1.addEventListener('click', function(){}); // em muitos casos a função já é feita dentro do bloco addEventListener
// é existe varios tipos de eventos como: abort,animationcancel,blur,change,click,etc....
 
// vc encontra esse Ex 12

const h1 = document.querySelector('.atualize h1');
const data3 = new Date()
h1.innerHTML = data3.toLocaleDateString('pt-br', {weekday:'short',year:'numeric',month:'long',day:'2-digit',hour:'numeric',minute:'numeric',second:'numeric',hour12:false,
timeZone:'GMT' });
// toLocaleDateString ele localiza a data é transforma em uma String, 
// é o primeiro parâmetro é em qual idioma que vc localizar a data 
//  o segundo é entre blocos nesse caso vc pode mostrar varias coisas vai depender do que vc quer
// por exemplo: caso vc for mostrar o a dia da semana(weekday),dia(day),ano(year),mês(month),hora(hour),minuto(minute), etc...
// esses tem dois parâmetros diferentes day,hour,minute,year,second que são: numeric ou  2-digit
// weekday mostra três parâmetros: long, narrow e short
// month tem 5 parâmetros long, narrow, short, numeric e 2-digit

// vc encontra esse Ex 14

//tagC.innerTexto = `${texto}` Vc usa (innerTexto) quando vc ten certeza que os valores que vc pegou seja 100% texto em caso tenha algum 
// ElementoHTML use innerHTML
  tagC.innerHTML = `${texto}`
  const texto1 = document.createTextNode('oi'); // essa é uma outra forma de criar um texto
  const RecebeTexto = tagC.appendChild(texto1); // é assim que vc chama o texto criado é bem igual ao chamar uma função

// vc encontra esse Ex 15

  const estiloFundo = getComputedStyle(document.body)
// getComputedStyle ele pega etilo css dos elementos html
const backgroudCor = estiloFundo.backgroundColor;
console.log(backgroudCor)// getComputedStyle ele pega qualquer estilo css da sua pagina 
// por exemplo: em uma das suas paginas o font-family: é PT Sans essa fonte esta só h1 mas eu 
// quero que essa font esteja na pagina inteira ao apertar um botão dai eu uso o getComputedStyle
const estilo = getComputedStyle(document.body);
const fontFamilha = estilo.fontFamily;
botão.style.fontFamily = fontFamilha // aqui teria o PT Sans


document.body.style.color = cor // da para fazer isso com ou sem o valor do do elemento(p) 
document.body.style.backgroundPosition = 'Open Sans' 
p.style.backgroundColor = 'black' // da para mudar qualquer coisa do css desse jeito
//  por exemplo: color,fontFamily,fontSize,backgroundPosition, etc....


const para = document.querySelectorAll('.paragrafo p');
// porém se vc usar O querySelectorAll ele pega todos os elementos da class(paragrafo) ou id do html

/*<div class="paragrafo"> // esse é o elemento pai
 *  <p>oi</p>   
 *  <p>oi</p> // por meio do querySelectorAll todos elementos (p) são selecionados
 *  <p>oi</p>     
 * </div>*/

// vc encontra esse Ex 16

let time; // quando vc for manipular uma variavel em varias funçãoes crie ela fora dos blocos é não acresente nenhum valor só acrenta valores dentro da função(lenbra-se cada caso é um caso muitas vezes não é necessario fazer isso)

const data = new Date(seg * 1000);
return data.toLocaleTimeString('pt-br',{hour12:false,
    timeZone:'GMT' }) // timeZone 'GMT' ele conside 01/01/1970 
   // que equivale 00:00:00(para saber o pq disso vai no arquivo Objeto-date.js)

//  document.addEventListener('click',function(e){ // da para fazer que todo o documento siga um único evento nesse caso o evento é o de clicar
        
    // const el = e.target // O target ele consegue detectar todo o movimento que acontece no seu documento
    // que envolve o evento por exemplo: (e) represento o evento de clicar tudo que eu clicar no documento será verificado é 
    // passado para uma variavel(se caso vc quiser) ou pode adicionar em um console.log(e) para saber onde vc está clicando

    //          if(el.classList.contains('reniciar')){ 
    //      // conteiner() busca o elemento que possui class do parametro nesse caso 'reniciar'
    //      RenicieMeuRelogio()
    //      sec.style.color = 'black'
    //      segundos = 0;   
    //      };
    //      if(el.classList.contains('iniciar')){
    //          clearInterval(time)
    //          InicieMeuRelogio()
    //          sec.style.color = 'green'
    //      };
    //      if(el.classList.contains('pausar')){
    //          PararMeuRelogio()
    //          sec.style.color = 'red'
             
    //      };

 // 1000 milsegundos equivale 1 segundo 
 // 10000 milsegundos equivale 10 segundo 
 // 100000 milsegundos equivale 1 minuto e 40 segundos
 // 1000000 milsegundos equivale 16 minuto e 40 segundos
// 1000000 milsegundos equivale  2 horas 46 minuto e 40 segundos


// vc encontra na aula final na pasta logica de programação

// itens.addEventListener('keypress', function(e){
//   if(e.keyCode === 13) {
//     if(!itens.value) return; // está é uma forma mais curta de (itens.value.length === 0)
//     criaTarefa(itens.value)
     
//   // o keyCode é uma forma de conseguir adicionar funções para cada teclas do teclado
//   }
// })
// key Code  todas as teclas tem numeros é eles servem para atribuir funções neles é isso é considerado como evento
// é pode ser chamado para uma função por exemplo: um jogo de computador de aventura para o personagem poder fazer as
// coisas é necessario teclas para isso como correr aperte (R) para agachar aperte (P) como o computador sabe que vc apertou 
// esses botões facil por meio do keyCode que todas as teclas tem a tecla (R) tem a função de correr é a tecla (P) tem a função de agachar

/**
 *  personagem.addEventListener('keypresss',function(e){
 *   if(e.keyCode === 105) return Correr();
 *   if(e.keyCode === 125) return Agachar();
 * 
 *  }) 
 * 
 * 
 */

// d.focus(); ele faz que a função tenha um melhor desempenho na sua tarefa


botão.setAttribute('class', 'Apagar'); // setAttribute pode adicionar uma class, id , name como primeiro parâmetro é o segundo é o valor dos mesmos
botão.setAttribute('title', 'Apagar essa tarefa'); // title significa o titulo do elemento que o seu mouse está em cima, Exemplo: sé o seu mouse estiver em cima do botão apagar vai aperecer a mensagem "Apagar essa tarefa"

const liTarefas = lis.querySelectorAll('li');
const listaDeTarefas = [];

for(let l of liTarefas){
  let tarefaTexto = l.innerText 
  tarefaTexto = tarefaTexto.replace('Apagar','').trim();// trim remove espaço entre as STRINGS
  listaDeTarefas.push(tarefaTexto) // aqui o espaço será removido 
  // alem disso o array vazio vai receber dados de liTarefas
  // por exemplo: cada palavra que eu escrever para liTarefas vai ser adicionado no listaDeTarefas
  
  }

  const tarefasJSOM = JSON.stringify(listaDeTarefas) // JSOM.stringify ele tranforma um array em uma strigs
localStorage.setItem('tarefas',tarefasJSOM) // localStorage  é um lugar onde vc pode salvar coisas dentro do navegador é tipo uma mine base de dados dentro do navegador // o localStorage é global pode ser usado em todo codígo
// setItem ele representa a chave para vc tenha acesso a base de dados criada por LocalStorage


function adicionaTarefasDalvas(){
const Tarefas = localStorage.getItem('tarefas'); // aqui vc pega a chave que vc para ter acesso a base de dados criada
const ListaTarefas = JSON.parse(Tarefas) // JSOM.parse ele tranforma uma lista de string em um array
}