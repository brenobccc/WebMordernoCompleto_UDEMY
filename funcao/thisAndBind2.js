function Pessoa() {
    this.idade = 0


    //dispara uma outra função em um determinado intervalo de tempo.
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa