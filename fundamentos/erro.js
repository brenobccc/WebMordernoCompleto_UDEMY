function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        throw {
            nome: e.name,
            msg: e.message,
            date: new Date()
        }
        // throw new Error('...')
        /*
            throw 10
            throw true
            throw 'mensagem'
        */

    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Breno' }
imprimirNome(obj);