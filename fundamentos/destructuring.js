//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//usando destructuring
const { nome, idade } = pessoa;

console.log(nome)
console.log(idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome = true } = pessoa;
console.log(sobrenome)

const { endereco: { logradouro, numero, cep } } = pessoa;


console.log(logradouro);