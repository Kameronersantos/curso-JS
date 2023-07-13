// O metodo splice ele faz o mesmo que pop,push,shift,umshift é algumas coisas mas 

// negativos         -6             -5              -4       -3         -2        -1
// positivo          0               1               2         3         4        5
const marcas = ['Coca Cola', 'Guaraná Antartica', 'Biz', 'Bradesco', 'Klabin','Danone'];


// marcas.splice(indice,delete,elmen1,elmen2,elmen3)
// o primeiro argumento é o indice que eu quero começar a mexer 
// o segundo argumento é quantos elementos eu quero remover do meu array
// é o terceiro argumento e diante é os elmentos

const danonão_grosso = marcas.splice(5,1); // a diferença de adicionar o metodo splice em variavel é que 
// retorna um array ao lugar de uma string pq o splice pode remover mais de um elemento 
const acabou_O_papel = marcas.pop()
console.log(marcas)
console.log(danonão_grosso) // usando o splice o ['danone'] está em um array
console.log(acabou_O_papel) // usando o pop a Klabin é uma string

const nomes4 = ['debora','Miranda','Maria','vinicius', 'Diego','debora','Miranda','Maria','vinicius', 'Diego','vinicius', 'Diego'];

const removidos = nomes4.splice(1,Number.MAX_VALUE) // da pra usar o Number.MAX_VALUE pra ir no valor maximo que tem no array 
// para poder remover a partir do primeiro argumento exemplo: no primeiro argumneto é 1. É o array tem 12 elementos os 11 vão ser removidos
console.log(nomes4,removidos)
console.log(Number.MAX_VALUE) // representa o valor maximo que o javascript vai

const adicionar = nomes4.splice(0,0,'Kamerone','Vanessa','pedro','joão') // o terceiro argumento é a onde vc pode adicionar outros elementos no array e a partir do indice que vc escolhe no primeiro argumneto os elementos vão ser adicionados depois
console.log(nomes4)

const trocar = nomes4.splice(2,2, 'Gabriel','joana');// o terceiro argumento também pode ser usado para troca
console.log(nomes4,trocar)

// simular o pop 
const pop = nomes4.splice(-1,1)
console.log(nomes4,pop)
// simular o shift
const shift = nomes4.splice(0,1)
console.log(nomes4,shift)
// simular o push 
const push = nomes4.splice(nomes4.length,0,'debora') // para simular use varialvel.length
console.log(nomes4)
// // simular o umshift
const umshift = nomes4.splice(0,0,'Kamerone')
console.log(nomes4)