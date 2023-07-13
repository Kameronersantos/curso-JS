function verificar() {
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('year')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados é tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
    
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
    
        if(idade >= 0 && idade < 12) img.setAttribute('src', './imagens/menino-bebe-m.png')
            // menino
        if (idade > 12 && idade < 25)  img.setAttribute('src','./imagens/homem-jovem-m.png')
            // Homem jovem
         if (idade > 25 && idade < 50)  img.setAttribute('src','./imagens/homem-meia-idade-m.png')
             // Homem meia idade
          if(idade > 50 && idade <= 101) img.setAttribute('src','./imagens/homem-velho-m.png')
             // Homem velha 
        
        
       } else if (fsex[1].checked) {
    
        if(idade >= 0 && idade < 12) img.setAttribute('src', './imagens/menina-bebe-f.png')
            // Menina
        if (idade > 12 && idade < 25)  img.setAttribute('src','./imagens/mulher-jovem-f.png')
            // Mulher jovem
         if (idade > 25 && idade < 50)  img.setAttribute('src','./imagens/mulher-meia-idade-f.png')
             // Mulher meia idade
          if(idade > 50 && idade <= 101) img.setAttribute('src','./imagens/mulher-velha-f.png')
             // Mulher velha 
        
       }
       
       res.innerHTML = `Detectamos  com ${idade} anos`
       res.style.textAlign = 'center' 
       res.appendChild(img)
    }   
}