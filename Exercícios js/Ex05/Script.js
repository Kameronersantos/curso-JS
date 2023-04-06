function Calcular() {
var numero = document.getElementById('num')
var tab = document.getElementById('tabuada')

if (numero.value.length == 0 ) {
    window.alert('[ERRO] ensira um numero para dar certo')
} else {
    let n = Number(numero.value)
    
    tab.innerHTML = ''
    for( let t = 1 ; t <= 10 ; t ++ ) {
        let item = document.createElement('option')
        item.value = `tab${t}` // para o javaScript não  é tão importante mas para outras linguagen é   
        item.text = `${n} x  ${t} = ${n*t}`
        tab.appendChild(item)
    }

} 
}