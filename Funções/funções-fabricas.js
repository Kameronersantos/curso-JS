// funções fabrica (factory function)


function criaProduto(marca,seventia){
    return {
        marca,seventia, 
        patrociono:'globo', // como essa chave vai ser necessario usar o this para funcionar
        fala: function(asunto){ // uma função dentro de objeto chama-se de metodo
            return `${marca} é uma ${seventia} ${asunto} ${this.patrociono}` 
            // dessa forma não é necessario de this pq vc tem 
            // marca, senventia no parâmetro
        }
    }
};
const empresa1 = criaProduto('Neste','Fabrica de chocolate')
console.log(empresa1.fala('muita famosa no Brasil graças a'))

console.log(' ')

// no JavaScript (this) se refere a quem está chamando a função que a (empresa1)
// this.patrociono é igual a falar empresa.patrociono 
// toda ves que alguma coisa. um metodo que chama essa coisa é o this
//  exemplo: pessoa.criaPessoa()
// para o valores serem chamados o metodo pricisa disso( this.nome,this.sobrenome, this.idade);
// é se isso não acontecer esses valores darão erro (nome is not defined)

function p(nome,sobrenome,a,p) { 
    return  {
    nome,
    sobrenome, 
    criaPessoa() {
        return `${this.nome} ${this.sobrenome}  `
    },
    peso: p,
    altu: a, // a vantagen de usar função dentro de um objeto é que os valores pode ser usados para
    // varios argumetos fora do objeto  tipo IMC aqui ele pode ser usado em uma lista de pessoa
    // é para isso é necessario fazer uma unica função IMC e se vc fazer esse tipo de função 
    // fora do objeto vai ter que fazer varias funções IMC 

    // isso se chama getter 
    get IMC() { // Ao colocar get o IMC vai fingir ser um atributo
        //  por causa disso IMC não vai ser considerado uma função
        const indice = this.peso / (this.altu ** 2);
        return indice.toFixed(2);
    },

     IMC1() { 
        const indice = this.peso / (this.altu ** 2);
        return indice.toFixed(2);
    },

    // getter e setter juntos
   get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    },

    // setter

    set nomeCompleto(valor) {
        valor = valor.split(' ') // aqui o valor cria espaço é adiciona os valores em um array
        this.nome = valor.shift(); // para extrair o primeiro nome do valor mas vc só consegue fazer isso 
        // console.log(valor) // aqui o valor é dividido é retorna um array
        // após o valor sé tornar um array
        this.sobrenome = valor.join(' ') // aqui juntou o nome com o sobrenome
    }
    
}
};



const p1 = p('Kamerone Russelliam','Santos', 1.6, 63)
const p2 = p('odair','Santos', 1.7, 73)
console.log(p1.criaPessoa());
console.log(p2.IMC); // se vc deixar IMC com parênteses após colocar o get atrás dele vai dar erro pq
// ele não é mais uma função
p2.IMC = 29; // o getter não da para ser atribuido o valor sé vc fizer isso não acontece erro mas 
// o valor que vc quer atribuir não muda também

console.log(p1.IMC1()); // sem o get atrás o IMC1 É uma função
console.log(p1.nomeCompleto, ', nome e sobrenome antes de adicionar o Julio Consielo Almeida'); 
p1.nomeCompleto = 'Julio Consielo Almeida' // o set aceita mudanças de atributo o valor é mudavel
// é se vc tiver a mesmo metodo com getter é setter a mudança de atributo será executada 
// isso só não acontecerá caso vc só tiver usando o getter
console.log(p1.nomeCompleto,',  Aqui mudou nome completo'); 
console.log(p1.sobrenome,',  Aqui tem o sobrenome'); 
console.log(p1.nome,',  Aqui tem o nome'); 



console.log('')


// isso seria a mesma coisa que funçoes dentro do objeto faz pórem inferior
function imc(peso,altu) {
    const indice = peso / (altu ** 2);
    return indice.toFixed(2);
}
const pes1 = {no:'ferreira',sb:'Almeida',peso: 85,altura:1.7};
console.log(imc(pes1.peso,pes1.altura))

// atribuição via desestruturação
const {marca: m, seventia: s} = empresa1;
console.log(m,s)
