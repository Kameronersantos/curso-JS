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

for(let mostrar = 0;mostrar<valores.length;mostrar ++) {
    console.log(`a posição ${mostrar} tem o valor ${valores[mostrar]}`)
}
