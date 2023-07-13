// define-property / define-properties
//    singular    /   Plural
// a grande diferença do define-property para o define-properties 
// é que o define-property é para uma chave é o define-properties é para varias chaves

// define-property 

function Produto(nome,preço,estoque) {
    // this.nome = nome;
    // this.preço = preço;
    // this.estoque = estoque; // aqui o parâmetro estoque não está sendo executado
    Object.defineProperty(this,'estoque',{
      enumerable: true,  // aqui vc exibe um parâmetro que não está sendo executado // exibe a chave

      value: function(){
        return estoque
      },  // aqui vc adiciona um valor para esse parâmetro // valor

      writable: false, // aqui vc modifica sé o parâmetro vai ser alterado ou não // pode alterar o valor
    // true significa que ele pode ser alterado é false ele não pode ser alterado

      configurable: true // sé o Object.defineProperty do estoque é configuravel
    })

    // Object.defineProperty(this,'estoque',{ // quando o comfigurable é true isso quer dizer que posso comfigurar em 
    //     // outro lugar do codigo quando ele é falso do erro e fala que não pode ser definido
    //     enumerable: true,
    //     value: 6,
    //     writable: true,
    //     configurable: false
        
    // })

    // define-properties

    Object.defineProperties(this, { // Object.defineProperties consegue fazer a mesma coisa que o Object.defineProperty
        // porém com todas as chaves que o objeto tem 
       nome: {
        enumerable: true,
        value: nome,
        writable: true,
        configurable: true
       },
       preço: {
        enumerable: true,
        value: preço,
        writable: true,
        configurable: true
       },

    })

};

const P1 = new Produto('Camiseta',35.99,4);
console.log(P1.estoque()) // o value pode retornar uma função
P1.estoque = 5000
console.log(Object.keys(P1)) // sé caso o enumerable for false a chave estoque deixa de exitir 
// Object.keys(P1) ele cria um array com as chaves do objeto da função construtora Produto
for(let chaves in P1) {
  console.log(chaves)  // aqui é outra forma de mostrar a chaves que vc tem no objeto
}
delete P1.estoque; // não apaga pq o comfigurable não deixa aleterar a chave
console.log(P1)

