// setter é para comfigurar o valor é getter para obter o valor 
function Produto1(nome,marca,preço,estoque) {
  this.marca = marca
  this.preço = preço
  this.estoque = estoque

  let nomePrivado = nome // quando vc usa o objeto this no defineProperties é this no inicio da função é o valor 
// retorna em um metodo get isso pode causar um loop no seu programa para isso não acontecer use uma variavel para
// não acontecer isso
  Object.defineProperties(this,{
      nome:{
         enumerable: true,
        //  writable: false,
        //  value: nome, // vai ser usado getter para pegar o valor
         configurable: false,
         get: function(){
            return nomePrivado
         },
         set: function(valor){ // o valor como parâmetro é tudo o que vc adiciona na chave
            try {
            nomePrivado = valor
           if(typeof valor === 'number') throw new TypeError('Number não pode ser considerado como um valor dessa chave adiciona uma String por favor');
               return valor 

           } catch(e) {
              console.log('Aguarde um momento estamos resolvendo um problema tecnico')
           }
        }
         
      },
     marca: {
        enumerable: true,
        // writable: true, // o setter vai ter o trabalho para modificar o valor
        // value: marca,
        configurable: false
     },
     preço:{
        enumerable: true,
        // writable: true,
        // value: preço,
        configurable: false
     },
     estoque:{
        enumerable: true,
        // writable: true,
        // value: estoque,
        configurable: false
     },
  });
};

const pr2 = new Produto1('Camiseta','adidas',50.99,5);
console.log(pr2);
pr2.nome = "camiseta";
console.log(pr2.nome)

// como funcionaria getter e setter na Factory Function

function criaProduto(preço) {
    return {
        get preço() {
            return preço
        },
        set preço(valor){
            valor = valor.replace('Havainas', 'Sandalias')
            preço = valor;
             
        }
    }
};

const cp1 = criaProduto('havainas');
cp1.preço = 'Havainas'
console.log(cp1.preço)
