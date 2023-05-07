const itens = document.querySelector('.Tarefas');
const AdiBottum = document.querySelector('.adicionar');
const lis = document.querySelector('.lista')

function criaLista() {  // cria o elemento lista
    const li = document.createElement('li');
  return li;
}
// keypress esse evento identifica qual tecla vc está apertando
itens.addEventListener('keypress', function(e){
   if(e.keyCode === 13) {
     if(!itens.value) return; // está é uma forma mais curta de (itens.value.length === 0)
     criaTarefa(itens.value)
      
   // o keyCode é uma forma de conseguir adicionar funções para cada teclas do teclado
   }
})


function linparTexto(){ // aqui linpa o texto do input
 itens.value = '';
  itens.focus();
}

function BotãoApagar(li){
  li.innerText += ' ';
  const botao = document.createElement('button');
  botao.setAttribute('class', 'Apagar'); // setAttribute pode adicionar uma class, id , name como primeiro parâmetro é o segundo é o valor dos mesmos
   botao.setAttribute('title', 'Apagar essa tarefa'); // title significa o titulo do elemento que o seu mouse está em cima, Exemplo: sé o seu mouse estiver em cima do botão apagar vai aperecer a mensagem "Apagar essa tarefa"
  botao.innerText = 'Apagar';
  li.appendChild(botao)
}

function criaTarefa(textInput){  // aqui cria a lista de tarefas
     const li = criaLista();
     li.innerHTML = `${textInput}`;
    lis.appendChild(li)
    linparTexto();
    BotãoApagar(li);
    SalvarTarefas();
}

AdiBottum.addEventListener('click', function(){ // aqui adiciona a funcionalidade de clicar o botão no adicionar tarefa é executa 
// sé caso não tiver o texto no input retorna nada sé caso tiver adiciona na lista
    if(!itens.value) return; // está é uma forma mais curta de (itens.value.length === 0)
    criaTarefa(itens.value)
})

document.addEventListener('click', function(e){ // apaga o botão junto com li
 const el = e.target;
 if(el.classList.contains('Apagar')) {
   el.parentElement.remove() // parentElement mostra quem é o pai do alemento clicado // remove ele remove tanto o elemento pai quanto o elemento filho
   SalvarTarefas();
 }
})

function SalvarTarefas(){
  const liTarefas = lis.querySelectorAll('li');
 const listaDeTarefas = [];

 for(let l of liTarefas){
let tarefaTexto = l.innerText 
tarefaTexto = tarefaTexto.replace('Apagar','').trim();// trim remove espaço entre as STRINGS
listaDeTarefas.push(tarefaTexto)
}
const tarefasJSOM = JSON.stringify(listaDeTarefas)
localStorage.setItem('tarefas',tarefasJSOM) // localStorage  é um lugar onde vc pode salvar coisas dentro do navegador é tipo uma mine base de dados dentro do navegador // o localStorage é global pode ser usado em todo codígo
}

function adicionaTarefasDalvas(){
const Tarefas = localStorage.getItem('tarefas');
const ListaTarefas = JSON.parse(Tarefas)

for(let t of ListaTarefas ){
  criaTarefa(t)
}
 }
adicionaTarefasDalvas();