const div = document.querySelector('div');

const p = document.querySelector('p');


let Text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere cupiditate quis ducimus dolor commodi accusamus delectus atque quasi! Omnis, odio necessitatibus facilis consectetur totam aliquam? Sequi non reprehenderit praesentium?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus iure, fugit nisi eveniet accusamus, quos ratione repellat vel, adipisci alias sapiente? Libero deserunt sequi harum laborum culpa, suscipit magni.'

 

document.addEventListener('click',function(e){
    const el = e.target;
    
    if(el.classList.contains('min')){
        p.style.color = 'blue';
        p.innerHTML = `${Text1.toLowerCase()}`  
    }
    if(el.classList.contains('mai')){
        p.style.color ='red';
        p.innerHTML = `${Text1.toUpperCase()}`
         
    }
    if(el.classList.contains('normal')){
        p.style.color = 'black';
        p.innerHTML = `${Text1}`;
    }
})
 



