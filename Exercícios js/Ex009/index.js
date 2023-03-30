function Meuescopo(){
const form = document.querySelector('.form');

// maneiras de consertar o envio do formulario
// Primeira forma
// form.onsubmit = function(evento) {
//     evento.preventDefault(); // esse evento previne o que era pra acontecer por padrão (no caso o padrão é era atualizar é a mensagem não ficava)
// alert(1);
// console.log('foi enviado')
// };

// segunda forma

// O evento onsubmit ocorre quando um formulário é enviado.
const pessoas = []
const resultdo = document.getElementById('receber')

    // o addEventListener ele escuta é adiciona o evento chamado
    //                 O evento      da onde ele vai vir
form.addEventListener(  'submit',    recebeEventoForm)
// 
function recebeEventoForm(evento) {evento.preventDefault();
    let p_nome = (form.querySelector('#nome'));
    let s_nome = (form.querySelector('#s-nome'));
    let idade = (form.querySelector('#idade'));
    let peso = (form.querySelector('#peso'));
    
    pessoas.push({
        nome: p_nome.value ,
        sobrenome: s_nome.value,
        idade: idade.value,
        peso: peso.value
    })
    console.log(pessoas)
    resultdo.innerHTML += `<p>${p_nome.value} ${s_nome.value} ${idade.value} ${peso.value}</p>`

    
}    
}
Meuescopo();







 


