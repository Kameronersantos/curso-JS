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
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 12) {
            // Criança
            img.setAttribute('src', 'menino-bebe-m.png')
        } else if (  idade < 25)  { // homem jovem 
            img.setAttribute('src', 'homem-jovem-m.png')   
        } else if ( idade < 50) { // Homem meia idade
        img.setAttribute('src', 'homem-meia-idade-m.png')
        } else {
            // Homem velho 
         img.setAttribute('src','homem-velho-m.png')
        }
        
        
       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if(idade >= 0 && idade < 12) {
            // Menina
            img.setAttribute('src', 'menina-bebe-f.png')
        } else if (idade < 25 ) {
            // Mulher jovem
            img.setAttribute('src','mulher-jovem-f.png')
        } else if (idade < 50) {
            // Mulher meia idade
            img.setAttribute('src','mulher-meia-idade-f.png')
        } else {
            // Mulher velha 
            img.setAttribute('src','mulher-velha-f.png')
        }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.style.textAlign = 'center' 
    }   res.appendChild(img)
}