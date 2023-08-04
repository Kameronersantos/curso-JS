const pessaos = [
    {n:'joão', id:3},
    {n:'Ferreira', id:2},
    {n:'Daniel', id:1},
];

const novasPessoas1 = {};
for(const pessoa of pessaos) {  // aqui vc consegue adicionar objetos de um array em outro array é sem o objeto map
    // nada que é falado em baixo acontece
    const {id} = pessoa;
    novasPessoas1[id] = {...pessoa};
};
console.log(novasPessoas1)
const novasPessoas = new Map();

for(const pessoa of pessaos) {  // aqui vc consegue adicionar objetos de um array em outro array
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa}); // com objeto map vc faz na ordem numerica as chaves do objeto 
    // é a ordem dos objetos em sí é a chaves são numbers 
};

console.log(novasPessoas)
console.log(novasPessoas.get(2)) // quando eu querer um dos objetos dentro do array eu utilizo o get


// é possivel inteirar sobre o map em um array
for(const [indentified, {id,n}] of novasPessoas){ // pegar o indentificador nomes, etc
    console.log(indentified,id,n)
};

// Object inteiro
for(const p of novasPessoas){
    console.log(p)
};

for(const p of novasPessoas.values()){ 
    // keys pega as chaves
    // values pega os valores
    console.log(p) // só as chaves
};

// em caso vc quer eliminar uma das chaves 
novasPessoas.delete(2) // deleta a chave 2