const soma = function (x, y) {
    return x + y
}

const printResult = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

printResult(3, 4)

printResult(3, 4, (x,y) => x - y)