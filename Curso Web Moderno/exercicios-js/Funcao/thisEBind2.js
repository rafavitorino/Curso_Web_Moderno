function pessoa(){
    this.idade = 0

    const self = this //Colocando o this numa constante dá pra driblar esse problema de contexto!!

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 1000)//dispara uma outra função depois de um certo intervalo em MILISEGUNDOS
}

new pessoa //instanciar a função