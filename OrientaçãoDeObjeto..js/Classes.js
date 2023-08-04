class Pessoa {
 constructor(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
 }
 falar(){
    console.log(`${this.nome} esta falando `)
 }
 Comer(){
    console.log(`${this.nome} esta comendo `) // é os métodos são automaticamente ponhado no prototype _proto_
}
Beber(){
     console.log(`${this.nome} esta Bebendo `) // as funções feitas por classes os seus métodos não
    //  precisam de virguala
 }
};

const p1 = new Pessoa('kame','rone');
const p2 = new Pessoa('jão','só');    // todos objetos criados pode usar o métedo pai
const p3 = new Pessoa('maria','manuela');
const p4 = new Pessoa('Zé','mane');
console.log(p1)
p1.Beber()
p1.Comer()
p1.falar()

// função fabrica ou Factor Function

function CriaPessoa(nome,sobrenome,) {
    const PessoaPrototype = {  // essa também é uma forma de ponhar metodos em um prototype
        falar(){
            console.log(`${this.nome} esta falando `)
        },
        Comer(){
            console.log(`${this.nome} esta comendo `)
        },
        Beber(){
            console.log(`${this.nome} esta Bebendo `)
        }
    };
        return Object.create(PessoaPrototype,{ // aqui vc cria o proto é adiciona os métodos nele
    
            nome: {value: nome}, // é os outros argumentos do Object.create são os valores da função
            sobrenome: {value: sobrenome},
        })
        
    };

    // função construtora 

    function Pessoa(nome,sobrenome) {

        const metodo = function() {  //  essa função só pode ser usada dentro da função // atributos privados
        let n = 123456;
        let a = [];
        a.push(n)
            console.log(metodo(a))
        }
        this.nome = nome; // aqueles que possui (this) são chamados de atributos ou metodos publicos
        this.sobrenome = sobrenome;
        this.metodo = () => { // essa pode ser exibida fora da função  
            console.log('oi eu sou um método')
        }
    };
