
function pegueiSuaMae(){
    vezes = 0
    setInterval(
        () => {
            vezes++
            console.log("Peguei sua mãe " + vezes + " vezes")
        }, 1000
    )
}

pegueiSuaMae()

