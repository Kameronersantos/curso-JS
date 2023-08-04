// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

// essa é a forma certa de sé fazer

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', { // apartir de vc usar o this é o cpfLimpo no Object.defineProperty() 
    // em todos os métodos terá que escrever eles juntos this.cpfLinpo
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() { // a forma correta é usar o prototype para funções que atulizam bancos de dados
// para o servidor não ter gastos desnecessarios é ter uma agilidade maior  
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia()) return false; 

  const cpfParcial = this.cpfLimpo.slice(0, -2); 
  // O slice inicia no índice 0 é termina no penultimo índice
  // 070.987.720-03
// (0) é o inidice 0 é (0) é o penúltimo índice
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2; // aqui não soma aqui comcatena
  
  return novoCpf === this.cpfLimpo; // aqui verifica sé o novoCpf é igual a o cpf passado para a função construtora
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);// tranforma uma string em array "palavra" usando from ficaria assim 
  // ['p','a','l','a','v','r','a'];
  let regressivo = cpfArray.length + 1; // para que analize seja feita é necessario acresentar mais espaço 
  // por isso o tamnho do array tem que aumentar 
   const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val)); // o regressivo é a quantidade de elementos dentro do array e ele 
    // é mutiplicado pelos valores do array
    regressivo--; // aqui inverte a ordem dos numeros vem do maior para o menor
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito); // só é possivel concatenar quando é uma string
};

ValidaCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // esse metodo é para não ter sequencia
  //  de numeros como exemplo: 111.111.111-11
  return sequencia === this.cpfLimpo; // o método repeat ele repete o numero 
  // é sé todos os elementos forem igual a o primeiro elmento no metodo valida retorna false
  // é se sequencia for igual a o cpf vindo da função construtora então é uma sequencia 
  // é isso provoca no metodo valida um retorno de false 
};

const cpf = new ValidaCPF('070.987.720-0');
console.log(cpf)
if(cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}
