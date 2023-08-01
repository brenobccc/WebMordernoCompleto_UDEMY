// const prod1 = {
//     nome: '...',
//     preco: 45
// }

//Factory ( Fábrica de Objetos )
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva' 
    }
}

console.log(criarPessoa())


function criarProduto(name, price = 0){
    return {
        nome: name,
        preco: price
    }
}



console.log(criarProduto("Notebook",2500.00))