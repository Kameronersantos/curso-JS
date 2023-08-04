const falar = { // aqui são os metodos criados para função criaPessoa
    falar(){
        console.log(`${this.nome} esta falando `)
    }
}
const Beber = {
    Beber(){
        console.log(`${this.nome} esta Bebendo `)
    }
}
const Comer = {
    Comer(){
        console.log(`${this.nome} esta comendo `)
    },
}

const PessoaPrototype2 = {...Beber, ...Comer,...falar}; // isso chama-se de mix de composição de Objetos
const PessoaPrototype1 = Object.assign({},Comer,Beber,falar) // dessas formas vc adiciona metodos em um 
// Objeto


function CriaPessoa(nome,sobrenome,) {
// const PessoaPrototype = {  // essa também é uma forma de ponhar metodos em um prototype
//     falar(){
//         console.log(`${this.nome} esta falando `)
//     },
//     Comer(){
//         console.log(`${this.nome} esta comendo `)
//     },
//     Beber(){
//         console.log(`${this.nome} esta Bebendo `)
//     }
// };
    return Object.create(PessoaPrototype2,{ // aqui vc cria o proto é adiciona os métodos nele

        nome: {value: nome}, // é os outros argumentos do Object.create são os valores da função
        sobrenome: {value: sobrenome},
    })
    
};



const p1 = CriaPessoa('Artur','Morgan');
const p2 = CriaPessoa('Maria','dos Santos');
p1.Beber();
p1.Comer();
p2.falar();

// vc pode usar tanto FactorFunction ou Construtor Function as duas trâs o mesmo resultado mas pratique com as duas 
// em caso vc trabalhe com equipes que tem preferencias ou com a Construtor Function ou FactorFunction 