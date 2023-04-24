const elementos = [
 {tag:'p',  texto:'frase1',}, // 0
 {tag: 'div', texto:'frase2'}, // 1
 {tag:'footer', texto:'frase3'}, // 2
 {tag:'section', texto:'frase4'} // 3
];
// LEMBRE-SE quaquer coisa que vc for executar no for() só fica no for()
// for() dentro de uma função vc usa mais vezes quando a função principal for preste a ser executada
const sec = document.querySelector('.conteiner ');
const div = document.createElement('div')
 for(let i = 0; i < elementos.length; i++) {
  const {tag, texto} = elementos[i];
  let tagC = document.createElement(tag);
let textoCriado = document.createTextNode(texto)
// da para criar o texto pelo node 
  tagC.appendChild(textoCriado); // depois adicione no elemento criado
  div.appendChild(tagC);
//tagC.innerTexto = `${texto}` Vc usa (innerTexto) quando vc ten certeza que os valores que vc pegou seja 100% texto em caso tenha algum 
// ElementoHTML use innerHTML
  tagC.innerHTML = `${texto}`
 }

sec.appendChild(div)












