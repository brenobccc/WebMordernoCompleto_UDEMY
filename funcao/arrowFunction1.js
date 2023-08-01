let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2 //return implícito

dobro(4)


let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um param
console.log(ola())
