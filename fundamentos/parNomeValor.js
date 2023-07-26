//par nome/valor

const saudacao = 'Aoba';//Contexto léxico


function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}


//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.numero);


const teste = 'w'

function Go(){
    const teste = 'e';
    return teste;
}

console.log(Go());
console.log(teste);