
// function isArrayLike(o){
//     if(o && typeof o === "object" && isFinite(o.length) && o.length >= 0 && o.length===Math.floor(o.length)&& o.length < 4294967296) {
//         return true;
//     } else {
//         return false;
//     }
// };
// function somar(a) {
//     if(isArrayLike(a)) {
//         var total = 0
//         for(var i = 0; i < a.length; i++){
//             var elemento = a[i];
//             if(elemento == null) continue;
//             if(isFinite(elemento)) total += elemento;
//             else throw new Error("soma(): elementos deve ser um numero infinito");

//         }
//         return total
//     }
        
//     else throw new Error("soma():argument deve ser parecido com array")
// }

// var ar = [1,2,3,4];
// console.log(somar(ar))
console.log('');