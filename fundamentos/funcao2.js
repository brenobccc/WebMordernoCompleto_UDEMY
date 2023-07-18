const imprimirSoma = function (a,b = 0){
    console.log(a+b);
}

imprimirSoma(2,3);


//arrow function
 const soma = (a,b) => {
    return a + b;
 }


 console.log(soma(4,5))

 //retorno implícito

 const subtracao = (a,b) => a-b

 console.log(subtracao(1,5))
 //retorna uma função que tem somente uma linha de código.


 const printer = (a) => console.log(a);


 printer("BrenDbrito");