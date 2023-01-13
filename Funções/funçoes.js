function parinpar(n) {
    if(n % 2 == 0) {
        return 'par'
    } else {
        return 'inpar'
    }
}

let res = parinpar(11)
console.log(res)