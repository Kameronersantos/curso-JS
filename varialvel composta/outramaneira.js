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