

// é essa é a forma errada de fazer 

const cpf = "070.987.720-03"
console.log(cpf)
function linparCpf(cpfLinpo){

  return cpfLinpo.replace(/\D+/g,''); // essa expressão regular tira os sibolos da string
  // é replace subititui sibolos por um espaço vazio ou por string ou number ou nada
   
};

function NovoDigito(cpf) {
  const arrayCpf = Array.from(cpf); // tranforma uma string em array "palavra" usando from ficaria assim 
  // ['p','a','l','a','v','r','a'];
  let analizando = arrayCpf.length + 1
  const total = arrayCpf.reduce((ac,val) => {
   ac += (analizando * Number(val)); // para dar certo tem que comverter a string para number para que o acumulador 
  // funcionar é também para reduce, map, filter é necessario que string seja comvertido para number
   analizando--
   return ac
  },0);
  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito)
};
// console.log(linparCpf(cpf))
 const isSequencia = (cpfLinpo) => {
   const sequencia = cpfLinpo[0].repeat(cpfLinpo.length);
   return sequencia === cpfLinpo
 }
const cpf1 = (cpfEnviado) => {
   
  if(linparCpf(cpfEnviado) === undefined) return false
  if(linparCpf(cpfEnviado).length > 11) return false
  if(isSequencia(linparCpf(cpfEnviado))) return false
  
    const cpfParcial = linparCpf(cpfEnviado.slice(0,-2));
    
    const digito1 = NovoDigito(cpfParcial);
    const digito2 = NovoDigito(cpfParcial + digito1);

    const NovoCpf = cpfParcial + digito1 + digito2
    if(NovoCpf === linparCpf(cpfEnviado)) {
      console.log('cpf valido')
    } else {
      console.log('cpf Invalido')
    }
 
};
cpf1(cpf)



    
   
    





