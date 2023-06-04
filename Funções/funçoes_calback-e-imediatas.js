// funções callback
// na web quando a gente trabalha nos precisimos conectar na base de dados, buscar recursos da base de dados,
// exibir coisas na tela, buscar recursos em API, carregar um arquivo JSON,
//  RESUMINDO: é preciso fazer coisas na internet que não tem como controlar quanto tempo elas vão demorar
// exemplo: não da para saber quanto tempo o JavaScript vai levar para ir na base de dados, buscar os dados nécessarios
// é retornar com esses dados

function aleatorio(max = 3000,min = 1000) {
 const num = Math.random() * (max - min) + min
    return num
};
 
function f1(callback){
    setTimeout(function(){
        console.log('f1') 
        if(callback) callback();
    },aleatorio())
};
function f2(callback){
    setTimeout(function(){
        console.log('f2') 
        if(callback) callback();
    }, aleatorio())
};
function f3(callback){
    setTimeout(function(){
        console.log('f3') 
        if(callback) callback();
    },aleatorio())
};

// function callback é como a aquela boneca russa que quando vc abre tem outra mais pequena é assim por diante
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('Olá, Mundo!'); 
//         });
//     });
// }); // porém essas funções dificilmente seria executadas na ordem 
// a não ser sé vc fazer uma função que impede que isso acontece, essa função chama-se callback

// f2();
// f3();
// console.log('Olá, Mundo!') // só o Olá, Mundo! seria executado em primeiro por não estar dentro setTimeout
// o setTimeout é uma simulação de tempo de alguma coisa da internet

f1(f1callback);

function f1callback(){
    f2(f2callback);
};

function f2callback(){
    f3(f3callback);
};

function f3callback(){
    console.log('Olá, Mundo!');
};

// funções imediatas ou (IIFE) -> Immediately invoked function express

(function(idade,peso,altura){ // esse tipo de função é executada imediatamente e não toca o escopo global
 const sobrenome = 'antonio'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    };

    function falaNome(){
        console.log(criaNome('luiz'))
    };
    
    falaNome();
    console.log(idade,peso,altura)
    
}) 
(25,'75 Kg',54);

// para essa função funcionar tem que tar dentro de um parênteses (function(){})
// para chamar esse tipo de função só precisa mostrar o parênteses vazio assim -> ()