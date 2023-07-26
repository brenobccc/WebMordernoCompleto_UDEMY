//Função em JS é First-Class Object (Citizens)
//Higher-order function 

//criar de forma literal
function func1() { }

// Armazenar uma função em uma variável
const func2 = function () {//(função anônima)

}

// Armazenar em um array
const array = [function(a,b){return a+b}, func1,func2]

console.log(array[0](1,2));


//Armazenar em um atribuito de objeto
const obj = {}
obj.falar = function () {return 'Opa'}

console.log(obj.falar());


//Passar função com param
function run(fun){
    fun();
}


run(()=>{console.log("oi")});

// Uma função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a + b + c);
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)

cincoMais(4)

