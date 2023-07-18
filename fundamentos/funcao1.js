//função sem retorno

function imprimirSoma(a,b){
    console.log(a+b);
}

imprimirSoma(2,3);

imprimirSoma(2,10,4,5);


//Função com retorno
//atribuindo um valor padrão
function soma(a, b = 0){
    return a+b;
}

console.log(soma(2,3));

console.log(soma(2));

console.log(soma());