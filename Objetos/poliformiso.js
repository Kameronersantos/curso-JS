// isso que vamos fazer seria a super class
function Conta(agencia,conta,saldo){
   this.conta = conta;
   this.agencia = agencia;
   this.saldo = saldo;
};

Conta.prototype.saque = function(saldoRetirado) {
    if(saldoRetirado > this.saldo) {
        console.log(`Saldo insufisiente ${this.saldo}`) 
        return;
    }
    this.saldo -= saldoRetirado
    this.verSaldo()
};
Conta.prototype.depositar = function(saldodepositado) {
    this.saldo = this.saldo += saldodepositado 
    this.verSaldo() 
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag./banco: ${this.agencia} conta: ${this.conta} saldo:R$ ${this.saldo.toFixed(2)}`)
};

const kamerone = new Conta(82,54673,200);
kamerone.saque(100)
kamerone.depositar(12.3)


function ContaCorrente(agencia,conta,saldo) {
    Conta.call(this,agencia,conta,saldo)
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.saque = function(valor) {
    if(valor >= 100) { console.log('passou do limite');
     return
    }
    if(valor > this.saldo) {  console.log(`saldo insuficiente ${this.saldo}`);
    return
    };
    this.saldo -= valor
    this.verSaldo()
};

const conta1 = new ContaCorrente(23,87654,200.99);
conta1.saque(100)

/* Poliformismo é usada em funções construtoras onde os mesmos metodos podem ter funcioalidades diferentes 
No exemplo a cima pode sé ver que há dois tipos de método saque um para função construtora Conta é outro 
Para função construtora ContaCorrente. E esse método foi criado iniciamente pela função construtora Conta
e foi repassado para função construtora ContaCorrente dessa forma.

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

É dessa forma a função construtora ContaCorrente pode usar todos os argumentos e métodos da função Conta.
mas não só isso, a função ContaCorrente pode modificar os métodos da Conta onde só a própria função Conta
Corrente pode utilizar. 

Esse é o método saque da função construtora Conta

Conta.prototype.saque = function(saldoRetirado) {
    if(saldoRetirado > this.saldo) {
        console.log(`Saldo insufisiente ${this.saldo}`) 
        return;
    }
    this.saldo -= saldoRetirado
    this.verSaldo()
};

É esse é o método saque da função função Conta Corrente

ContaCorrente.prototype.saque = function(valor) {
    if(valor >= 100) { console.log('passou do limite');
     return
    }
    if(valor > this.saldo) {  console.log(`saldo insuficiente ${this.saldo}`);
    return
    };
    this.saldo -= valor
    this.verSaldo()
};

Perceba que o métodos foi criado para função construtora Conta é a ContaCorrente só tá reltilisando mas 
Como é possivel modificar esse método na ContaCorrente é não afetar a função Conta isso não é algo facil
de explicar mas o que da para se entender está a aqui

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

Eu creio que ao fazer isso O prototype de conta não tem mais ligações com o prototype da ContaCorrente apenas
os argumentos que tem na função Conta. É no argumentos que vc cria na função contaCorrente é métodos não são
adicionados no prototype da função conta. E sé vc não modificar o método da função conta para função contaCorrente
ela só utiliza o método que já foi criado pela função Conta. Isso quer dizer que as duas funções utilizam o mesmo 
método 


*/ 