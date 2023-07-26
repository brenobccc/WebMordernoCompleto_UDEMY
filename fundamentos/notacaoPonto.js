console.log(console)

console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    //torna público
    this.nome = nome
    this.exe = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj2.nome)


obj3.exe();