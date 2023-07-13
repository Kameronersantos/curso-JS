const nomes2 = ['joão', 'Maria', 'Cladia'];
nomes2[2]
delete nomes2[2]; // vc não deleta o indice só o valor
console.log(nomes2)
const momes1 = new Array('Kamerone', 'Julia', 'Vanessa'); // da para criar um array desse jeito é também 
// da criar assim Number , Strings , Objetos , Imagem , Funções
const novo = momes1 // valor por referencia. Tudo que eu fizer em nomes afeta o novo é tudo que eu fizer em
// novo afeta em nomes
novo.pop() // o pop ele tira do novo é isso afeta o momes1
console.log(momes1) 

//                 0        1          2        3        4
const nomes3 = ['joão', 'Kamerone', 'Julia', 'joana', 'pedro'];
const novo1 = [...nomes3] // operador de espalhamento é agora o que eu faço em novo não afeta o nomes3
novo1.pop()

console.log(nomes3) // isso não aconteceu aqui
console.log(novo1) // o ultimo nome foi retirado aqui 

console.log(nomes3.length) // um atributo não usa parênteses um método sim
// length verifica o tamanho é não os indices é eles são 0,1,2. 
// é os elementos são 1,2,3
const removidoFinal = nomes3.pop() // O pop remove o ultimo elemento do array
console.log(nomes3);
console.log(removidoFinal); // da para adicionar o elemento removido em uma variavel
const removidoInicio = nomes3.shift() // O shift remove o inicio elemento do array
// é o shift ele desloca os indices. Exemplo: joão era indice zero ele foi removido agora o Kamerone é indice 0

// unshift e push
console.log(removidoFinal, nomes3, removidoInicio);
nomes3.push(removidoFinal) // o push ele adiciona por ultimo qualquer valor no array // é muito utilizado
nomes3.unshift(removidoInicio) // o unshift ele adiciona no inicio qualquer valor no array // não muito utilizado
console.log(nomes3); // agora está em ordem 


// slice com parametros negativos ou parametros positivos
const fatiarInicio_até_meio = nomes3.slice(1,3) // no primeiro argumento ao digitar qualquer numero. exemplo: 1
// os indices anteriores serão retirados é no segundo argumento. exemplo: 3  os indices 3 e 4 não serão mostrados
// pq a partir do proprio indice do argumento pra frente não será mostrado
const fatiarFim_até_meio = nomes3.slice(0,-2) // quando a parametros negativos principalmente o segundo.
//  exemplo: -2, ele retira o dois dos indices no final do array 


console.log(fatiarInicio_até_meio); 
console.log(fatiarFim_até_meio); 

const nome = 'Luis Otavio Miranda'
const nomes = nome.split(' '); // aqui vc pode comverter uma string em um array
const array = [ 'Luis', 'Otavio', 'Miranda' ];
const Unir = array.join(' ') // aqui vc pode transformar um array em uma string denovo
console.log(Unir)

// exercícios 
// vetores e arrays são a mesma coisa

let num = [5,6,7]

num.push(2)
num.length
num.sort()
console.log(num)
console.log(`o vetor tem  ${num.length} elementos`)
console.log(`o valor do vetor 3 é ${num[2]}`)
console.log(`o vetor mais alto é o ${num[3]}`)

for(let pos =0; pos<num.length;pos ++) {
    console.log(num[pos])
}

// outra maneira 

var valo = [8,3,6,8,1]
valo.sort()
/*for(let res in valo ){
    console.log(valo[res])
} */
let se = valo.indexOf(1)
if(se == -1) {
    console.log('O valor não encontrado  ')
} else {
    console.log(`O valor está na posição ${se}`)
}

// vetor na tela 

let valores = [4,5,2,7,8,]
valores.sort()