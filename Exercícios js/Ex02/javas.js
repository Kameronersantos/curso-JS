// capturar evento de submit do formulario
function resultado() {
const form = document.querySelector('.form');
// para capturar evento de submit do formulario 
form.addEventListener('submit', calcular ); // <- vc utiliza isso

/* form.addEventListener( 'submit', function(e) {
e.preventDefault()
}); */ //  <- também pode utilizar isso

function calcular(evento) { evento.preventDefault()

let p = (document.getElementById('peso'));
let a = (document.getElementById('altura'));

if(a.value.length == 0 && p.value.length == 0) {
    alert('prencha os dados por favor')
} else {
    let pe = Number(p.value);
    let al = Number(a.value);
    let imc = pe / (al * al);
    let res = document.getElementById('calculo');

    if(imc <= 18.6) {
        res.innerHTML = `<p> O seu imc é ${imc} é você está abaixo do peso<p/>` 
    } else if (imc > 18.6 && imc <= 24.9) {
        res.innerHTML = `<p> O seu imc é ${imc} é você está com peso normal<p/>`
    } else if (imc > 25 && imc <= 29.9) {
        res.innerHTML = `<p> O seu imc é ${imc} é você está com Sobrepeso <p/>`
    } else if (imc > 30 && imc <= 34.9) {
        res.innerHTML = `<p> O seu imc é ${imc} é você está com Obesidade grau 1 <p/>`
    } else if (imc > 35 && imc <= 39.9) {
        res.innerHTML = `<p> O seu imc é ${imc} é você está com Obesidade grau 2 <p/>`
    } else if ( imc >= 40 && imc < 100 ) {
        res.innerHTML = `<p> O seu imc é ${imc} é você está com Obesidade grau 3 <p/>`
    } else {
        res.innerHTML = `<p> ${imc} não há escala para esse quantidade de peso <p/>`
    }
 
}
}    
};
resultado();