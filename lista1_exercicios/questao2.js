/**
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 * 
 *  */
function CalcTriangulo(l1, l2, l3) {
    let cont = 0
    if (l1 == l2)
        cont++

    if (l1 == l3)
        cont++

    if (l2 == l3)
        cont++

    if (cont == 3) {
        return 'Equilátero'
    } else if (cont == 2) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

const valor = CalcTriangulo(4,4,4)

console.log(valor)
