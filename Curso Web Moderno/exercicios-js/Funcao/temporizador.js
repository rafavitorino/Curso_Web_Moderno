function tempo(num){
    
    setInterval(
        function(){

            console.log(num)
            num++
            if(num > 10){
                stop
            }
            
        }, 1000
    )
}

tempo(1)