// Funções recursivas
// Funções recursivas a função chama ela mesma
// o navegador ele tem um limite sobre recursividades 
// exemplo: sé vc fizer mil recorsividades o navegador vai falar olha tem alguma coisa errada com o seu codigo
// é vai travar o seu codígo
function recursivas(max){
    if(max  >= 10) return;
    max++;
    console.log(max); // essa função executa o codígo dela até aqui 
    recursivas(max) // é depois ela sé chama de volta
};
// é faz mesma coisa que o for esse tipo de função pode ser usado para repetição de alguma coisa

recursivas(0)
//  A unica coisa que vc deve sé precupar quando ela deve parar de se chamar

function recursivasLimite(max){
    if(max  >= 100000) return;
    max++;
    console.log(max); // essa função executa o codígo  dela até aqui 
    recursivasLimite(max) // é depois ela sé chama de volta
};
// recursivasLimite(1) // quando aparecer um erro chamado Maximum call stack size exceeded siginifica que vc chegou no limite
// o node vai achar que o seu codígo tem um loop infinito é vai parar o seu codígo