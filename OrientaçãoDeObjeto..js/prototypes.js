/*O javaScript é baseado em prototipos para passar propriedades e métodos de um objeto para outro.

Definição de prototipo 
prototipo é um termo usado para sé refirir ao que já foi criado pela primeira vez 
para servir de modelo ou molde para servir de futuras produçôes.

Todos os objeto tem uma refencia interna para um prototipo (_proto_) que vem da propriedade prototype
da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro do objeto, primeiro o motor 
JS vai tentar encontrar esse membro no próprio objeto depois a cadeia de prototipos é usada até o 
topo(null) até encontrar (ou não) tal membro
*/



// Constrututa => molde (classes)
function Pessoa3(nome,sobrenome) {       // isso daqui é uma função 
    this.nome = nome;                    
    this.sobrenome = sobrenome;  // tudo isso tem uma referencioa na propriedade _proto_

    // this.NomeCompleto = () => {this.nome + ' ' + this.sobrenome}; // primeiro o motor 
  //  JS vai tentar encontrar esse membro no próprio objeto. é sé eu comentar o this.NomeCompleto 
//    o Js vai usar o Pessoa3.prototype.NomeCompleto(que é a melhor coisa a sé fazer)
};

// instância
// Quando vc faz Pessoa1 = new Pessoa3('Luiz', 'O') vc está criando uma instância
// Pessoa3.prototype === Pessoa3._proto_ 
Pessoa3.prototype.NomeCompleto = function() { // com isso a performase é melhorada drasticamente do programa pq
    // não vai sé criado um metodo após ser criado um objeto 
    return this.nome + ' ' + this.sobrenome
}

const Pessoa1 = new Pessoa3('Luiz', 'O') // Pessoa3 => função construtora  // é esses objetos vem da função Pessoa3
const Pessoa2 = new Pessoa3('Maria', 'A') // Pessoa3 => função construtora

// a cadeia dos prototypes
// o JS procura no 1 não acha o método procura no 2 é no 3 não acha então ele volta underfined
// mas sempre faço os metodos no 2 para que a performace do seu criente sejá das melhores
            //   1              2                     3
// exemplo: Pessoa1 -> Pessoa3.prototype --> Object.prototype
console.dir(Pessoa1);
console.dir(Pessoa2);
