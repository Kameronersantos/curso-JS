function funcao(){ // fica os parâmetros
console.log('oie')
}
funcao('Valor'); // aqui fica os argumentos
 // em caso vc não tiver parâmetro na função é chamar o escopo dela é adicionar um argumento 
// o JavaScript não entendera como erro 

function funcao1(){ // 
    console.log(arguments[0])// arguments é uma variavel que acontece só nesse tipo de função => function funcao1(){}
    // ele pega todos os argumentos que vc adiciona no escopo da função em um array
    console.log(arguments[11]) // eu posso pegar o indíce dos argumentos do escopo da função
    }
    funcao1('Valor',1,2,3,4,5,5,66,7,766,7,'Aqui mostra todos os argumentos do escopo da função'); 


function calcularArgumentos(a,b,c){ // é possivel adicionar parâmetros porém quando existir a variavel arguments o resultado
    // da função não mudara nada, mas os parâmetros (a,b,c) pegaram os primeiros três valores é quantos
    // mais parâmetros vc adicionar mais valores vc vai pegar de arguments mas arguments ainda vai possuir todos 
    // os valores
    let total = 0;
    for(let argumentos of arguments){ // arguments não funciona em ARROM FUNCTION
       total += argumentos  // com isso vc pode calcular valores sem precisar de parâmetros 
    // function funcao1(){} -> esse tipo de função tem uma variavel que sustenta todos os argumentos enviados
    // (que chama arguments)
    };
    console.log(total,a,b,c) // (a,b,c) pegou (1,2,3)
}
calcularArgumentos(1,2,3,4,5,5) 

const f = function(){ // arguments funciona com funções vindas de variaveis
    for(let v of arguments){
        console.log(v)
    }
}
f(1)

// const f1 = () => {for(let va of arguments){console.log(va)}};// arguments não funciona em ARROM FUNCTION
// f1(1)

function funcao2(a,b,c,d,e,f){ console.log(a,b,c,d,e,f)};
funcao2(1,2,3) // O javascript não gera ERRO mostra underfined pq vc não declarou o parâmetro 
// é isso não é um erro para o javaScript, isso acontece não inporta a ordem 
// pode ser mais argumentos do que parâmetros ou mais parâmetros do argumentos
// argumentos são valores que vc envia para os parâmetros

function função3(a,b = 2,c= 5){ // essa é a maneira mais atual de adicionar um valor padrão

    b = b || 0 // essa é a maneira mais antiga de não deixar a função com resutado NaN 
    // graças a isso b obeteve um valor padrão
    console.log(a + b + c) 
}
função3(3,undefined,10) // nesse caso seria 3 + underfined é o resultado seria  NaN
// em caso vc adicione um argumento que ja vem definido como padrão 
// o valor adicionado substitui o valor padrão
//  (b = 2(valorPadrão) porém 10 foi adicionado como argumento agora ficou assim b = 10(valorArgumento))
// a unica maneira de um adicionar um valor como argumento é não modificar 
// o valor padrão é se o valor for underfined

function função4({nome, sobrenome,idade}){
console.log(nome,sobrenome,idade)
}
função4({nome:'luis',sobrenome:'otavio',idade:'25'})
function função5([valor1,valor2,valor3]){
console.log( )
}
função5({nome:'luis',sobrenome:'otavio',idade:'25'})