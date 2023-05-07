let itens = document.querySelector('.Tarefas');
const AdiBottum = document.querySelector('.adicionar');
const lis = document.querySelector('.lista')


AdiBottum.addEventListener('click', function(){
    if(itens.value.length === 0){
         lis.innerHTML = ''
    } else {
    const b = document.createElement('button');
    b.classList.add('apagar');
    const valorBotão = document.createTextNode('Apagar');
    b.appendChild(valorBotão)
    b.addEventListener('click', function(){
        return  lis.innerHTML = '';
    })
     lis.innerHTML += `<p>${itens.value}</p> ` 
     lis.appendChild(b) 
    itens.value = ''
    }
    
})


 
