const p = {
    // aqui dentro é o corpo do objeto
    nome: 'Luiz',// isso aqui é a chave para acessar o valor do corpo do objeto
    sobrenome: 'Sanches'
};

const chaves = 'sobrenome'
console.log(p.nome,p.sobrenome) // essa é forma de acessar com o ponto o objeto
console.log(p['nome'],p[chaves]) // essa é forma de acessar com cochetes o objeto essa vcforma é mas util quando
// vc não sabe que dados vc tá pegando exemplo quando o arquivo está numa base de dados é muitos nesses casos 
// vc não sabe o que tem na variavel chaves por isso nesse caso utilize cochetes

const p1 = new Object(); // aqui vc criou um objeto com função contrutora 
p1.nome = 'Otavio'; // é depois vc adicionou chaves com valores 
p1.idade = 64; 
p1.sobrenome = 'Pinhero';
// delete p1.idade // aqui vc deletou a chave idade 

p1.falarNome = function() { // da para criar funções dentro de um objeto 
    return (`${this.nome} está falando o seu nome`) // mas quando for representar alguma chave dentro do 
    // corpo do objeto usa-se (this.) exemplo  this.nome, this.sobrenome 
};
p1.SomarIdade = function() { // funções dentro de objetos são chamados de métodos
    const date = new Date()
    return date.getFullYear() - this.idade // é pussivel manipular qualquer valor dentro do objeto usando uma função
}
console.log(p1.nome,p1.sobrenome,p1)
console.log(p1.SomarIdade())
console.log(p1.falarNome())

for(let chave in p1 ) {
    console.log(p1[chave]) // aqui eu consigo ver todas as chaves do meu objeto é os valores

}

// Factory Function / é a Constructor Function / Classes Function

// Factory Function 

function criaPessoa(nome,sobrenome,idade) {
    return {
        nome,
        idade,
        sobrenome,
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome
        },

        idadeMaxima() {
            const d = new Date();
            return d.getFullYear() - this.idade
        }
    }
}
const p2 = criaPessoa('joão','Augosto',35)
console.log(p2.nomeCompleto) // com get não precisa de comchetes
console.log(p2.idadeMaxima()) // sem get precisa de comchetes

// Constructor Function


function Pessoa(nome,sobrenome,idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

    // só posso manipular esse objeto antes do  Object.freeze(this) em caso eu tenha ele 

    // Object.freeze(this) // todo o objeto que sair dessa função vai ser travado isso quer dizer que o valor não 
    // vai mudar 
};

const p3 = new Pessoa('Wagner', 'Beneduto',25);
// para travar o valor do objeto é 
Object.freeze(p3) // aqui o objeto não vai mudar o valor também funciona com array

p3.sobrenome = 'Maguinho' // não altera pq o Object.freze(This) está funcionado caso vc quer que altere deixe em comentario o Object.freze(This)
delete p3.idade // não da para deletar criar ou modificar com Object.freze(This) funcionado
p3.fala = function() {console.log('oi');}; // 
// p3.fala()
//  variavel(p3) endereço(nome) Valor(Sergio)
   p3.nome =     'Sergio' // p3 ele está apontando para um endereço de memoria é o javascrpit busca o endereço de memoria 
// que tem aquele valor. resuindo: a variaavel aponta para o endereço de memoria é depois aponta para o valor

// variavel(p3)  endereço('outra coisa')
// p3 = 'outra coisa' // isso que vc não pode

// coisas que vc não pode fazer com const é o p3 -> (novoEndereçoDeMemoria)


console.log(p3) // ao fazer o cconsole.log no p3 vc vai ver quem construiu o objeto

// é essa construtora sé chama Pessoa 
//  o que a palavra (new) faz primeiro ela vai criar um novo objeto vazio depois vai pegar a palavra this dentro
// da função Pessoa é vai repassar para o objeto criado é depois a função retorna o objeto em sí

