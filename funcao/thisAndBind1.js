const pessoa = { 
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao)
    }
}


const falar = pessoa.falar();

//falar();


//bind: Você passa um objeto no qual você quer que seja resolvido o this.
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
