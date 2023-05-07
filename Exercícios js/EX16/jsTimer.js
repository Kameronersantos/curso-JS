  const sec = document.querySelector('#relogio');

  const Iniciar = document.querySelector('.iniciar')

  const Pausar = document.querySelector('.pausar')

  const Reniciar = document.querySelector('.reniciar')

  function gethour(seg) {  // essa função formata o timer a ficar zerado
 const data = new Date(seg * 1000); 
    return data.toLocaleTimeString('pt-br',{hour12:false,
 timeZone:'GMT' }) // timeZone 'GMT' ele conside 01/01/1970 
// que equivale 00:00:00(para saber o pq disso vai no arquivo Objeto-date.js)
}

function InicieMeuRelogio(){ // inicia a o gethour()
    time = setInterval(function(){
        segundos++ // aqui o segundo repete de acordo com a conta da explicação de baixo
     sec.innerHTML = gethour(segundos) // segundos * 1000 para teteminar quantos segundos contara nesse caso contara 0 vezes mil milesegundos
    // para dar 1 segundo
    // veja abaixo da função o que acontece ao acresentar mais zeros 
 },1000)}

    function PararMeuRelogio(){  // essa função para o gethour()
        const pauseTime = setTimeout(function(){
            clearInterval(time)
        }) 
        return pauseTime;}
  

  function RenicieMeuRelogio(){ // essa função reneicia o gethour()
    clearInterval(time);
    sec.innerHTML = gethour(0)}

let segundos = 0; // essa variavel determina o numero que vai começar

let time; // quando vc for manipular uma variavel em varias funçãoes crie ela fora dos blocos é não acresente nenhum valor só acrenta valores dentro da função(lenbra-se cada caso é um caso muitas vezes não é necessario fazer isso)

Iniciar.addEventListener('click',function(e){ // Iniciar
    clearInterval(time)
    InicieMeuRelogio()
    sec.style.color = 'green'
        })
        Pausar.addEventListener('click',function(e){ // Pausar
            
            PararMeuRelogio()
            sec.style.color = 'red'
        })
        Reniciar.addEventListener('click',function(e){ // Reniciar
            
            RenicieMeuRelogio()
            sec.style.color = 'black'
            segundos = 0;
        })
        
        // Essa é a forma mais melhor é mais rapida também
        
         document.addEventListener('click',function(e){ // da para fazer que todo o documento siga um único evento nesse caso o evento é o de clicar
        
           const el = e.target // O target ele consegue detectar todo o movimento que acontece no seu documento
                    if(el.classList.contains('reniciar')){ 
                // conteiner() busca o elemento que possui class do parametro nesse caso 'reniciar'
                RenicieMeuRelogio()
                sec.style.color = 'black'
                segundos = 0;   
                };
                if(el.classList.contains('iniciar')){
                    clearInterval(time)
                    InicieMeuRelogio()
                    sec.style.color = 'green'
                };
                if(el.classList.contains('pausar')){
                    PararMeuRelogio()
                    sec.style.color = 'red'
                    
                };
        
         });
        // 1000 milsegundos equivale 1 segundo 
        // 10000 milsegundos equivale 10 segundo 
        // 100000 milsegundos equivale 1 minuto e 40 segundos
        // 1000000 milsegundos equivale 16 minuto e 40 segundos
// 1000000 milsegundos equivale  2 horas 46 minuto e 40 segundos
