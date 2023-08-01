const notas = [7.7, 5.5, 9.0, 6.5, 28, 7.2, 4.5]

// Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
 

//Com callback
notasBaixas = notas.filter((v) => v < 7)


console.log(notasBaixas);