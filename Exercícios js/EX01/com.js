function coverter(x) {
    switch( typeof x) {
        case 'number':
            return x.toString(16)
        case 'string':
            return '"' +x + '"';
        default: 
            return Number(x);
           
    }
    
}
var n = typeof coverter();
console.log(n)

function contar(x,f){
    if(x == 0) return false
    for(let i = x; i <= f; i++){
        console.log(x++)
    }
}
contar(1,100)   
