
//criando automaticamente
//coleção de chave/valor
const prod1 = {}//objeto de forma literal
prod1.nome = 'Celular Ultra Mega'

console.log(JSON.stringify(prod1))

prod1.preco = 4998.90

console.log(prod1)


prod1['Desconto Legal'] = 0.40;//evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        t: {
            b: 5
        }
    }
}


console.log(JSON.stringify(prod2))

//JSON: Formato textual. '{ "nome": "breno" }'

//JSON: TEXTO
//OBJETO: ATRIBUTO, ETC.

//Quando atribuir valor de objeto, é feita atribuição de referência
//quando atribuo com tipos primitios, é por valor.