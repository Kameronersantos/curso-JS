// função construtora -> objetos
// função fabrica -> objetos

// função fabrica  -> pode iniciar tanto com minuscula quanto maiscula,
// nos seus parênteses pode conter parametros ou não. Exemplo: criarPessoa(idade,nome,sobrenome)
// para ela precisa do (return) para poder chamar objetos. Exemplo: return {this.nome, this.idade, this.sobrenome};
// após adicionar um parâmetro dentro do objeto é necessario acrecentar uma virgula. Exemplo: this.nome, this.idade


// função construtora -> precisa sempre começar com letra maiuscula, 
// é entre os parênteses deve ter o new. 
// a função construtora não precisa retornar um objeto o seu escopo já é um 
// Exemplo: Pessoa(nome, sobrenome){this.nome = nome; this.sobrenome = sobrenome;}; 
// vc só pode adicionar o valor nessa função assim 
// Exemplo: const p = new Pessoa('joão','Augusto');

// o (new) ele cria o objeto vazio(const p) é falá para o this apontar para o objeto(const p) 
// é retorna o (nome, sobrenome) para a variavel(const p) é vc manualmente adiciona o valor do objeto('Kamerone', Santos)
// p1.nome = Kamerone, p1.sobrenome = Santos

// é possivel criar metodos é não exibir eles e também não é nessesario o this para isso
// quando não uso this tanto como variaveis ou funções são chamadas de atributos privados
// e não pode ser exibidas mas pode ser utilizadas dentro da função construtora 

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

const p1 = new Pessoa('Kamerone','Santos');
const p2 = new Pessoa('Maria','Fontinele');
console.log(p1.nome);
console.log(p2.nome);
p1.metodo()


