// tratando e Lançando erros (try, catch, throw)
// console.log(NãoExisto) // quando logo uma variavel que não existe. 
// fala que não está definida (variavel) is not defined
// ao logar um erro mostra em qual linha está o erro é também em qual arquivo está acontecendo o erro
// existe o lugar onde pode descobrir do que sé trata o erro 
// esse lugar é ReferenceError:(qual foi o erro que ocorreu)

try{ // try -> significa tentar
console.log(NãoExisto)  // o try vai tentar executar esse bloco
} catch(e) { // o catch ele pega o erro é ele adiciona em um parametro
    console.log('NãoExisto não existe') // nunca exibi o erro para o usuario final 
    // posso logar esse erro em um arquivo de log ou salvar o erro na base de dados
    // console.log(e) 
    // sem trate o erro da forma que achar melhor exemplo: se a variavel não exite vc cria ela,
    // ou mostra pro usuario que ocorreu um erro desconhecido
}


function soma(x,y){
    if(typeof x !== 'number'|| typeof y !== 'number') {
        throw new SyntaxError('x é y precisam ser numeros') // essa é uma forma de lançar erro
        // throw new ReferenceError('x é y precisam ser numeros') // aqui lança ReferenceError como o JavaScript faz
        // vc pode lançar qualquer coisa que tenha a ver  com Erro
    }
    return x + y;
}
try{
    console.log(soma(5,5))
    console.log(soma('5',5)) // é sé não ocorrer nemhum erro só o bloco try será executado

} catch(e) {
    // console.log(e) // aqui eu trato o meu erro não lance esse erro para o seu usuario
    console.log('lance uma coisa mais amigavel para o seu usuario') // é quando ocorrer o erro o catch será executado

}
 // exemplo de erro
function factorial(x){
    if(x < 0) throw new Error("x não pode ser negativo");
    for(var f = 1; x > 1; f *= x, x--) /* vazio*/;
    return f
}

console.log(factorial(1))



// lançando e tratando erros(try, catch, finally)
console.log('#######')
try{
//  console.log(a)
 console.log('abri um arquivo') // aqui será executado quando não tiver erro
 console.log('manipulei o arquivo gerou erro') // ao manipular arquivos podem gerar Erros no sistema  
 console.log('fechei o arquivo') // exemplo: vc pode abrir um arquivo é 
//  depois vc não conseguir fecha-lo corretamente ou não conseguir de maneira alguma fechar
 
 try{ // da para fazer um outro (try,catch,finally) dentro de um try
 console.log(b)
 } catch(err) {
  console.log('deu Erro aqui')
} finally{
 console.log('Também sou FINALLY')
    
 }
}catch(erro){
 console.log('tratando o Erro') // aqui vc ia tratar o erro é não daria para vc fechar o arquivo aqui
 //  aqui será executado quando tiver erro
}finally{
 console.log('FINALLY: sempre serei executado') // então aqui vc fecharia o arquivo
// aqui sempre será executado mesmo quando tiver ERRO
}

function returnaHora(data) {
    if( data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de data')
    }
 if(!data){
    data = new Date();
 }

 return data.toLocaleTimeString('pt-br',{
  
 })

};  // instanceof se algum valor é paracido com o parametro

try{
    const data1 = new Date('01-01-1970 12:00:00')
    const data = returnaHora(1);
    console.log(data)
} catch(err){
    // tratar Erro
} finally{
    console.log('tenha um bom dia')
}

// exemplo (try,catch,finally)

try {
    
    var n = Number(prompt("entre com um numero positivo",""));
    var f = factorial(n);
    alert(n + "! =" + f);
}
catch(ex) {
    alert(ex)
}

// exemplo 2 (try,catch,finally) 
// 
var t = 5
while(t < 50) {
    try {console.log('legal')}
    finally{t++}
}