const valor = 'Global'
//contexto léxico é muito importante para a função ( contexto ) - Assunto relacionado a Closure
function minhaFuncao(){
    console.log(valor)
}

minhaFuncao()

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()