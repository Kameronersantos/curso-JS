function Calculator(){
    this.iniciar = () => {
         buttons();
         PressEnter();
         PressBlackSpace();   
    };
    let display = document.querySelector('.display');

    const PressEnter = () => {
        display.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                fazerConta();
            };
        });
    }; 
    const PressBlackSpace = function() {
        display.addEventListener('keyup', e => {
            if(e.key === 'Backspace') {
               e.preventDefault
                apagarValores();
            }
        })
    }

    const buttons = function() {
        document.addEventListener('click', function(e){
            const el = e.target;
            if(el.classList.contains('btn-num')) retornaValores(el);
            if(el.classList.contains('btn-clear')) apagarValores();
            
            if(el.classList.contains('btn-del')) apagarUm();
            
            if(el.classList.contains('btn-equ')) fazerConta();
            
            display.focus() // cada vez que vc clica no botão ele adiciona o valor no display é muda o foco do diplay para ele
            // não ficar selecionado ao tirar o foco o ultimo botão que vc apertou vai ser apertado novamente quando clicar o 
            // Enter ou Backspace
        });
    };
    let retornaValores = (el) => display.value += el.innerText // el.innerText pega o valor dentro do elemento html

    const apagarValores = () => display.value = '' // faz o elemento que tem a class display ficar sem valor
    
    let apagarUm = () =>  display.value = display.value.slice(0, -1); // vai apagar um valor após o click
    

     const fazerConta = function(){
        let conta = display.value;
        try{
            conta = eval(conta); // eval executa o que está na caixa de texto sé for relacionado a linguagem JavaScript
            // porém use (eval) com cuidado fato dele executar tudo que relacionado a javaScript é perigoso
            // então sempre use funções para expecificar valores que vc quer que o usuario digite
            if(!conta) {
            alert('Conta invalida');
            return;
            }
           display.value = String(conta);
        } catch(e) {
            return alert('conta invalida');
        }
     };

};

const executar = new Calculator();
executar.iniciar()