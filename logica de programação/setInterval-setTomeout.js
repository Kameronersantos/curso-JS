function MostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-br', {hour12: false})
};

function funçãoDoIntervalo(){ // essa é uma forma de de criar uma função para O setInterval porém não é a melhor forma
    console.log(MostraHora()) // para executar uma função precisa dos parênteses
}
// setInterval(function() {
//     console.log(MostraHora()) // fazer uma função dentro do setInterval
// é a melhor opção
// }, 1000);
// setInterval vai comfigurar o intervalo de tempo
// para que alguma função seja executada em determinado momento

// setInterval(funçãoDoIntervalo, 1000) // quando ta sem parênteses vc só ta passando a referencia da função

const time = setInterval(function(){console.log(MostraHora())},1000); 
// da para colocar setInterval em uma variavel


setTimeout(function(){clearInterval(time)},50000) // Essa função só executa um evento só uma vez 
// é vc determina o quando vai ser executado

// clearInterval ele para a função setInterval
// clearTimeout  ele para a função setTimeout

// setTimeout(function(){console.log('parei')}, 5000)

// exemplo 

function InicieMeuRelogio(){ // inicia a o gethour()
    time = setInterval(function(){
        segundos++ // aqui o segundo repete de acordo com a conta da explicação de baixo
     sec.innerHTML = gethour(segundos) // segundos * 1000 para teteminar quantos segundos contara nesse caso contara 0 vezes mil milesegundos
    // para dar 1 segundo
    // veja abaixo da função o que acontece ao acresentar mais zeros 
 },1000)}
