function botão(){
    alert('Vc clicou em mim')
}

const b1 = document.querySelector('.botão1')

b1.addEventListener('click',function(){
    b1.style.backgroundColor = 'red'
    b1.style.borderColor = 'red'
    alert('vc clicou em min é depois eu vou ficar vermelho')
});


const b2 =  document.createElement('button')
b2.classList.add('Botão2');
const tex = document.createTextNode('Botão2');
b2.appendChild(tex);
document.body.appendChild(b2);


document.addEventListener('click', function(e){
    let ele = e.target
    if(ele.classList.contains('Botão2')) {
        b2.setAttribute('id', 'cor');
        alert('Vc clicou em mim é depois eu vou ficar azul')
    }
});
