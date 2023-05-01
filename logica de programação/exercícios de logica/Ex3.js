 
function umAcem() { 
for(let i = 0; i < 100; i++)  {       
  console.log(i,analizarN(i))
    }   }
 
    
    

function analizarN(n){
    if( isNaN(n) === true ) {
            return n;
     } else if (n % 3 === 0 && n % 5 === 0) {
                return 'FizzBuzz'
    } else if (n % 3 === 0) {  // para saber se um numero é divisivel por outro é so ver sé o resto dele é zero
                return 'Fizz'
     } else if (n % 5 === 0) {
                return 'Buzz'
     } else {
        return n
     }        
}


umAcem()







let div3 = (n1) => n1 % 3 === 0 ? 'fizz' : n1;

let div5 = (n1) => n1 % 5 === 0 ? 'Buzz' : n1;




    

// console.log(teste)

function FizzBuzz(num){
    if(typeof num !== 'number') return num; // essa é outra forma de descobrir sé o valor é um numero ou não
    if( num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if( num % 3 === 0) return 'Fizz';
    if( num % 5 === 0) return 'Buzz';
    return num;     
}

for(let ind = 100; ind <= 200; ind++) {
    console.log(ind, FizzBuzz(ind))
}
console.log( 'm',FizzBuzz('m'))
