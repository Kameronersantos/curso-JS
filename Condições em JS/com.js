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

    
