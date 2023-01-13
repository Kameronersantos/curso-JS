var vazio = {};
var pontos = { x:0, y:0};
var ponto2 = {x:pontos.x, y: pontos.y+1}
var livro = {
    "titulo principal": "javaScript", "sub titulo": "O guia defitivo", "for": " todas as audiencias",


autor: {
    primeiro_nome: "david",
    segundo_nome: "Flanagam"
}
};

// objetos com arrays associativos
 Object.property
 Object["property"]

 var abbr = ""; debugger
 for(i = 0; i < 4; i++)
    abbr += customer["adress" +i] + '\n;'

function getvulue(portiforio){
    var total = 0.0;
    for(stock in portiforio) {
        var açoes = portiforio[stock];
        var preço = quotas(stock);
        total += açoes * preço
    }
    return total;
}

// objetos com new

var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp();


// criar objetos 
var o1 = Object.create({x:1 ,y:2});
console.log(o1.x
)
var o2 = Object.create(null);
console.log(o2)
var o3 = Object.create(Object.prototype);
console.log(o3)

    function herdar(p) {
        if( p == null) throw TypeError();
        if(Object.create)
        return Object.create(p);
        var t = typeof p;
        if( t !== "object" && t !== "function") throw TypeError()
        function f() {};
        f.prototype = p;
        return new f()
    }