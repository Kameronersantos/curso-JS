// propridades de acesso é getter, O getter também é o processo de leitura
// quando a propridade de acesso o valor é configurado se-chama setter
// setter necissita de um parametro mas o getter não

var p = {
    x:10,
    y:20,

    get r() {return Math.sqrt(this.x + this.y*this.y)},

    set r(nevalue) {
        var oldvalue = Math.sqrt(this.x + this.y*this.y);
        var ratio = nevalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
        

    },
    get theta() {return math.atan2(this.y, this.x);}
    
};

var q = (p);
p.x = 1, q.y = 1;
console.log(q.r);


var serialnum =  {
$n: 0,

get next() { return this.$n++;},

set next(n) {
    if(n != this.$n) this.$n = n;
    else throw "número de série só pode ser para um valor maior";
}
};

var m = (serialnum);
m.next = 2, m.$n = 8;
console.log(m.$n);


var aleatorio = {
    get octet() {return Math.floor(Math.random()*256);},
    get uint16() {return Math.floor(Math.random()*65536);},
    get int16() {return Math.floor(Math.random()*65536)-32768;},
    get e_se(){
        if(this.octet == this.uint16){
            for(var n = this.octet; n < 256; n++) {
                return true
            };
        } else {
            return false
        };
    
    }

};
console.log(Object.getOwnPropertyDescriptor(aleatorio,"octet")) // Aqui vc pode ver os atributos de cada propridade do objeto

// atributo de propridade também como definir uma propridade
var o = {} 
Object.defineProperty(o,"x", {value: 1, writable: true, enumerable: false, configurable: true}) 
o.x;
Object.keys(o)

Object.defineProperty(o, "x", {writable: false});



Object.defineProperty(o,"x",{value: 2});

console.log(o.x)

Object.defineProperty(o, "x",{get: function(){return 0;}});

console.log(o.x)

// caso se for modificar mais de uma propridade

var d = Object.defineProperties({}, {
    x: {value:1, writable: true , enumerable:true, configurable:true},
    y: {value:1, writable: true , enumerable:true, configurable:true},
    r:{
        get: function(){return Math.sqrt(this.x*this.y + this.y*this.y)},
        enumerable:true,
        configurable:true
        
    }
});

// copiando atributos de uma propriedade

Object.defineProperty(Object.prototype, 
   "extend", {          // define Object.prototype.extend
    writable: true,
    enumerable:false,   // torna o  não enumeralvel         
    configurable: true,
    value: function(o) { // O seu valor é esta function           // obtêm todas as props próprias, até as não enomeráveis
        var nomes = Object.getOwnPropertyNames(o);
        // itera por elas
        for( var i = 0; i < nomes.length; i++) {
            // Pula as propriedades que ja estão nesse objeto
            if(nomes[i] in this) continue;
            // Obtém a discrição da propridade de o 
            var desc = Object.getOwnPropertyDescriptor(o,nomes[i]);
            // A utiliza para criar propridades em this 
            Object.defineProperty(this, nomes[i], desc);
        }
    }
   } );

   