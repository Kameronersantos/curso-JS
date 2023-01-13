function contar() {
    var inicio2 = document.querySelector('input#Início')
    var fim = document.getElementById('Fim')
    var passo = document.getElementById('Passo')
    var res = document.getElementById('res')
   
  if (fim.value.length == 0 || inicio2.value.length == 0 || passo.value.length == 0 ) {
    res.innerHTML = 'Impossivel contar'

  } else {
    res.innerHTML = 'Contando <br>'
    var f = Number(fim.value)
   var p = Number(passo.value)
   var i = Number(inicio2.value)
    if ( p <=0 ) {
      window.alert('Passo invalido consiterado FALSO')
      p = 1
    }
   if (i < f) {
      for(let r = i;  r <= f; r += p) {
        res.innerHTML += `${r}  \u{1F449}`
    } 
  } else {
      for(let r = i; r>= f ; r -= p) {
          res.innerHTML += `${r} \u{1F449}`
      }

    }
   res.innerHTML += `\u{1F3C1}`
   
    
  }
  
 }