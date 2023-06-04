function criaCalculadora(){
   let variavel; // é possivel cria variaveis ou funções antes do return é elas pode ser usadas no objeto
// retornado a variavel let pode ser passada sem nenhum valor para um objeto ao contrario do const que necessita de um 
// valor para ser passado
    return {
    variavel,
    display: document.querySelector('.display'), // vc pode usar uma propriedade como variavel é pagar algum elemento html 

    inicia(){
     this.clickBotões(); // quando vc precisar referenciar um metodo em outro metodo use o this. exemplo: this.btnParaBotões
    //  console.log(this) // objeto 
    this.presionaEnter();
    this.presisonaSpace();
    },
    presionaEnter(){
        this.display.addEventListener('keyup', e => {
           if(e.keyCode === 13) {  // para um metodo adiciona um valor em um teclado sempre faça que o lugar que vai fazer isso
            // tenha foco exemplo: para essa função funcionar foi usado this.display.focus();
             this.calcular();
           }
        });
    },
    presisonaSpace(){
        this.display.addEventListener('keydown', e =>{
            if(e.keyCode === 8) { // essa precisou de this.display.focus(); também
                e.preventDefault();
                this.clearDisplay();
            }
        });
    },
    calcular(){
        let conta = this.display.value;
        try{
            conta = eval(conta)
            if(!conta) {
             alert('conta invalida');
            return;
        }
            this.display.value = String(conta)
        } catch (e){
          alert('conta invalida');
           return;
        }
    },

    clearDisplay(){
        this.display.value = ''; 
    },

    deleteDisplay(){
        this.display.value = this.display.value.slice(0,-1)
    },


    clickBotões(){  // o this da calculadora chama até essa função
        document.addEventListener('click',function(e){
            const el = e.target;
            // console.log(this) // document // quem chama o método é o this nesse caso é o document que está chamando
            // é esse é o comportamento natural do javaScript é para mundar, use o (bind(this)) ou a ARRON fuction
            if(el.classList.contains('btn-num')){
               this.btnParaBotões(el.innerText) // esse this está sendo chamado pelo document
               // innerText é do botão tipo <buttom>O innerText está aqui</buttom>
            }
            if(el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }
            if(el.classList.contains('btn-del')) {
                this.deleteDisplay()
            }
            if(el.classList.contains('btn-equ')) {
                this.calcular()
            }

            console.log(this) // com bind o this não é mas do document é sim do objeto criado por mim
            
             this.display.focus(); // é o focus tem que estar no lugar onde a maior quantidade de eventos está

        }.bind(this)); // aqui fala para o javaScript não usar this de document mas sim usar o seu this
    },
     

    btnParaBotões(valor){
       this.display.value += valor
    },
     

    
};
};
const calculadora = criaCalculadora() // aqui uma variavel recebe a função para o método delá ser executado depois
calculadora.inicia() // aqui vc executa o método onde vai executar outros metodos