
// coisas importates dos exercícios: vc encontra esse Ex 2
// if(imc >= 39.9) return nivel[5]; 
// if(imc >= 34.9) return nivel[4]; // porém sé o codigo
// if(imc >= 29.9) return nivel[3]; // for simples é curtos
// if(imc >= 24.9) return nivel[2]; // como esse não precisa 
// if(imc >= 18.5) return nivel[1]; // usar {} mas não é recomendado
// if(imc < 18.5) return nivel[0];

// const imc = peso / altura ** 2; // calculo IMC
let n = 2;
const quadrado = n ** 2; // aqui verifica n ao quadrado

p.classList.add('paragrafo-resultado'); // O add -> adiciona nomes para class 
p.classList.add('bad'); // o ClassList -> cria uma class para qualquer elemento

resultado.appendChild(p); // appendChild() ele insere o elemento criado por javaScript no elemento html  
//  ele insere (p) criado por javaScript no elemento a html que é o (resultado) 
 
// vc encontra esse Ex 9

const form = document.querySelector('.form'); // AQUI vc utiliza o querySelector ele é melhor getElementById getElementByClass
// getElementByName no querySelector recebe dois tipos de argumnetos o primeiro tipo é a class ou id ou name
const form1 = document.querySelector('p'); // ou o elemento como: p,div,section,h1,span,article etc....
// 
form.addEventListener('submit',recebeEventoForm); // o addEventListener ele escuta é adiciona o evento chamado
// ele adiciona na variavel que com diz a elemento Html exmplo: a variavel form representa o elemento formulario que 
// recebe o evento submit(para saber o que esse evento faz vai na pasta logica de programação com arquivo eventos)
// o segundo argumento é de que função vai vir 
form1.addEventListener('click', function(){}); // em muitos casos a função já é feita dentro do bloco addEventListener
// é existe varios tipos de eventos como: abort,animationcancel,blur,change,click,etc....
 
 