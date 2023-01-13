try {

    var n = Number(prompt("entre com um numero positivo",""));
    var f = factorial(n);
    alert(n + "! =" + f);
}
    catch(ex) {
        alert(ex)
    }


var t = 5
while(t < 50) {
    try {console.log('legal')}
    finally{t++}
}