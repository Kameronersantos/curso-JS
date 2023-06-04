let exemplo2B = () => { // notação do ObservableHQ
  
    /* Javascript */
    // Array com a lista de usuários. Cada usuário é um objeto
    var usuarios = [
      { nome: "Maria", sobrenome: "Alves", idade: 42 }, // esse objeto é usuarios[0]
      { nome: "Ana", sobrenome: "Oliveira",  idade: 29 }, // esse objeto é usuarios[1]
      { nome: "Carlos", sobrenome: "Santos", idade: 30 }, // esse objeto é usuarios[2]
      { nome: "Taleve", sobrenome: "Rodrigues", idade: 51},
    ];
  
    // A função que será repetida para cada usuário
    // o forEach envia automaticamente o parâmetro posicao, que será o index da Array
    function exibirNaTabela(usuario, posicao){
      // Como a Array começa em 0, somamos 1 para 
      // pegar o número da linha usada no seletor de css
      var numeroDaLinha = posicao + 1;
      // Selecionamos o elemento de classe "linha" que esteja na posição definida acima
      var linhaAtual = document.querySelector("#tabela2b > .linha:nth-child("+ numeroDaLinha +")");
      
      // Inserimos, dentro dessa linha, o nome do usuário no elemento de classe nome
      linhaAtual.querySelector(".nome").innerHTML = usuario.nome +' '+ usuario.sobrenome;
    }
    // exibirNaTabela(usuarios[3], 3);// Loop forEach
    // Para cada usuário na array "usuarios", execute a função "exibirNaTabela"
    usuarios.forEach(exibirNaTabela); 
    
  };
exemplo2B()

