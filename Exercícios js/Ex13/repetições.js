var c = 3
do {
    console.log (`passo ${c}`)
    c++
} while(c <= 10)


/*while(c <=10) {
    console.log ('comer pizza')
    c++
}*/

 const obg = {
    somar(min,max ){ // getter é setter não pode ter parâmetro
        const s = max + min
        if(min > 100) return Number((Math.random() * (100 - 0)).toFixed(0)) + max
        if(max < 1000) return Number((Math.random() * (2000 - 1000) + 1000).toFixed(0)) + min
       if(min <= 100) return s;
       if(max >= 1000) return s;

       
    },
   
 };

 console.log(obg.somar(100,300));