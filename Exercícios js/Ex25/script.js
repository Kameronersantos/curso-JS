const idade1 = document.querySelector('.number');
const nome1  = document.querySelector('.text');


const dados = [
     {n:'Kamerone',novo:'./imagens/HomemNB.jpg',meiaIdade:'./imagens/HomemAB.jpg',velho:'./imagens/HomemVB.jpg'},
     {n:'Julia',novo:'./imagens/mulherN.jpg',meiaIdade:'./imagens/mulherA.jpg',velho:'./imagens/mulherV.jpg'},
     {n:'Cirilo',novo:'./imagens/HomemNN.jpg',meiaIdade:'./imagens/HomemAN.jpg',velho:'./imagens/HomemVN.jpg'},
];


const [pe,pe2 ,pe3] = dados;

function linpa() {
     nome1.value = '';
     idade1.value = '';
};


function conclusão() {
     if(!nome1.value || !idade1.value ) {
          return alert('Adicione dados por favor')
     } else {
          const f = document.createElement('img')
          
          f.setAttribute('Class','foto');
          let i = Number(idade1.value)
          let n = String(nome1.value)
          if(n === pe.n) {
               if(i >= 15 && i <= 30)  f.setAttribute('src', pe.novo);
               if( i > 30 && i <= 50)  f.setAttribute('src', pe.meiaIdade);
               if ( i > 50 && i < 100)  f.setAttribute('src', pe.velho); 
                 
          } else if (n === pe2.n) {
               if(i >= 15 && i <= 30)  f.setAttribute('src', pe2.novo);
               if( i > 30 && i <= 50)  f.setAttribute('src', pe2.meiaIdade);
               if ( i > 50 && i < 100) f.setAttribute('src', pe2.velho);    
          } else if (n === pe3.n) {
               if(i >= 15 && i <= 30) f.setAttribute('src', pe3.novo);
               if( i > 30 && i <= 50) f.setAttribute('src', pe3.meiaIdade);
               if ( i > 50 && i < 100) f.setAttribute('src', pe3.velho);
     }; 
     let imagems = document.querySelector('.imagens');
     imagems.innerHTML = ''; // aqui apaga a imagem anterior
     imagems.appendChild(f) // é aqui adiciona a imagem nova
         
};


}
const gerarFotos = document.querySelector('.gerar');
gerarFotos.addEventListener('click',function(){
     conclusão();
     linpa();
})