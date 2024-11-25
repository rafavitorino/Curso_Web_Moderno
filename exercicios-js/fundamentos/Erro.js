function tratarErroELancar(erro){
    //throw new Error('Ocorreu um erro ')
    //throw 10
    //throw false
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (erro) {
        tratarErroELancar(erro)
    } finally {
        console.log('Final')
    }
    
}

const obj = {
    name: 'Roberto'
}
imprimirNomeGritado(obj)