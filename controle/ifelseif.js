Number.prototype.between = (ini, fim) => { return (this >= ini && this <= fim) }

const printResult = (nota) => {
    if (nota.between(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.between(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.between(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.between(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

printResult(8)