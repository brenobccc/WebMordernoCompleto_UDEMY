var notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let indice in notas){
    console.log(indice, notas[indice])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atrib in pessoa){
    console.log(`${atrib} =  ${pessoa[atrib]}`)
}