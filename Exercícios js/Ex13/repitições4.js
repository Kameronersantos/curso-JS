var numero = [1,2 , 3]
if(0 in numero) {
    do {
        console.log(`${numero[0]} x ${numero[0]} = ${numero[0] * numero[0]}  `)
    } while (numero[0]++ < 10)
} else {
    console.log(false)
}

for(var let = 1; let <= 10 ; let+= numero[2]) {
    console.log(`${let} x ${let} = ${let*let}`)
}