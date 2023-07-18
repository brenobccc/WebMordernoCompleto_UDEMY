let valor 
console.log(valor)

valor = null //ausência de valor
//null -> não aponta pra nenhum espaço de memória.  
console.log(valor)
console.log(valor!=null ? valor.toString() : '')

const  produto = {}

console.log(produto.preco)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined; //evitar


console.log(!!produto.preco)
console.log(produto)