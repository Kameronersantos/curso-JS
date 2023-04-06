var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.querySelector('p#res')

let valores = []

function indados(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else{
    return false
  }  
}
function inlista(n,l) {
if(l.indexOf(Number(n)) != -1) {
  return true
} else {
  return false
}
}

function adicionar() {
    if(indados(num.value) && !inlista(num.value , valores)){

     (valores.push(Number(num.value))) 
     let item = document.createElement('option')
     item.text = ` valor ${num.value} foi adicionado`
     lista.appendChild(item)
     res.innerHTML = ""

    } else {
      window.alert('valor invalido ele ja foi adicionado')
         
    }
    num.value = ''
    num.focus()

}

function finalizar() {

  if(valores.length == 0 ) {
 window.alert('adicione valores para finalizar')
  }else {
    let tot = valores.length
    res.innerHTML = ''
    res.innerHTML += `<p> ao todo, temmos tantos ${tot} </p>`
    let maior = valores[0]
    let menor = valores[0]
    var soma = 0
    var media = 0 
    for(pos in valores) {
      soma += valores[pos]

      if(valores[pos] > maior) {
        maior = valores[pos]
      
      if(valores[pos] < menor)
      menor = valores[pos]
      
      } 
      media = soma / tot
    }
    res.innerHTML = ''
    res.innerHTML += `<p> ao todo, temos  ${tot} numeros cadastrados </p>`
    res.innerHTML += `<p>O numero maior da lista ${maior} </p> `
    res.innerHTML += `<p>O numero menor da lista ${menor} </>`
    res.innerHTML += `<p> A soma de todos é ${soma}</p>`
    res.innerHTML += `<p>A media de todos é ${media}</p>`
  }
 
}

