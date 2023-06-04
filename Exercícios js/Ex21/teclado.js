window.addEventListener(
     "keydown",
     (event) => {
       const p = document.createElement("p");
       p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
       document.querySelector(".output").appendChild(p);
       window.scrollTo(0, document.body.scrollHeight);
     },
     true
   );


 
function criarElmento(n1){
     const p = document.createElement("p");
     p.classList.add('para');
     p.innerHTML = `${n1}`;
     return document.querySelector('.output').appendChild(p);
};
 let number;
 let number1;
 let number2;
 let number3;

function primeiro() {   
 number = setInterval(function primeiro(){ criarElmento('1 ');},1000);  
   return number 
};

function segundo() {
    number1 = setInterval(function(){criarElmento('1 2');},2000); 
    return number1;   
 };
function Terceiro() {
   number2 =  setInterval(function(){criarElmento('1 2 3'); },3000); 
   return  number2
 };
function GO() {  
  number3 = setInterval(function(){ criarElmento('Go'); },4000);  
  return number3
};
function pararprimeiro(){
  return setTimeout(function(){clearInterval(number)},1000);
}
function pararsegundo(){
  return setTimeout(function(){clearInterval(number1)},3000);
}
function pararterceiro(){
  return setTimeout(function(){clearInterval(number2)},4000)
}
function pararGo(){
   return setTimeout(function(){clearInterval(number3)},5000)
}

function enter() {
     document.addEventListener('keypress', e =>{
          if(e.code =='Enter') {
              primeiro();
              pararprimeiro();
              segundo();
              pararsegundo();
              Terceiro();
              pararterceiro();
              GO();
              pararGo();
             
          };
     });
};
enter()

 
 