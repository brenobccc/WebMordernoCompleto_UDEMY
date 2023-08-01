const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}


fabricantes.forEach((i,j)=>console.log(i + " "+j))

fabricantes.forEach(imprimir)
