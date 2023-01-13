function factorial(x){
    if(x < 0) throw new Error("x não pode ser negativo");
    for(var f = 1; x > 1; f *= x, x--) /* vazio*/;
    return f
}

console.log(factorial(1))

/* throw ele é usado pra mostrar que uma function vai dar erro se caso tiver algo errado */