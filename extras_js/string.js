// function contar(x,f){
//     if(x == 0) return false
//     for(let i = x; i <= f; i++){
//         console.log(x++)
//     }
// }
// contar(1,100)

let umaString = "Uma \"string\"" // caso vc precisar de aspas duplas (que bem dificíl)
 let umasString = "uma \\barra invertida" // pra usar \ no texto use \\ 
           //0123456
     let p ="O rato roeu a roupa do rei de roma. " // cada elemento replesenta um índice
 console.log(p[5]) 
 console.log(p[8]) // underfined
 console.log(p[-1])  //undefined
 console.log(p.charAt(4)) // chama o elemento mas quando o elemento não existe não da Underfined
 console.log(p.concat(' par'));

 console.log(p + " inpar");
 console.log(`${p} par e inpar`) // essa versão é melhor

 console.log(p.indexOf('palavra')) // ele pega o indice inicial da palavra
 console.log(p.indexOf('a',3), 'indexOf') // também podemos explicificar qual posição esta a palavra ou letra que nos queremos
 console.log(p.lastIndexOf('a'), 'indexOf') // ele começa no fim é vai até o inicio
 console.log(p.indexOf('a'));
 console.log(p.match(/[a-z]/g)) // localiza todas minusculas é isso que esta dentro do parêntese é uma expressão regular
 console.log(p.match(/[a-z]/)) // da detalhes sobre elemento
 console.log(p.search(/[o]/)) // faz a mesma coisa que o indexOf porém pode ser usar expressões regulares 
 console.log(p.replace('roma','roma')) // ele subtitui uma palavra pela outra
 console.log(p.replace(/r/g, '#')) // com expressões regulares vc pode alterar palavras ou letras em toda String
 console.log(p.length) // para ver o tamanho da variavel
 console.log(p.slice(7,11)) // com slice posso pegar elementos de uma variavel com o indice 
 console.log(p.slice(-6,-2)); // aqui uso índice negativo que trará os útimos elementos da variavel 
 console.log(p.substring(p.length -6, p.length -2)) // faz a mesma coisa que o slice só que usa muito mais codígo 
 console.log(p.split('r',4)) // agente divide as String com a letra ou espaço porem no caso da letra ela não aparece quando é colocada como argumento
 console.log(p.toUpperCase()) // fica todas as letras Maiusculas
 console.log(p.toLowerCase())// fica todas as letras minusculas



    
