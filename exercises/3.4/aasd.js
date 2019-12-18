function generate(){
    var max = 20;
    var random = [];
    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);
        if(random.indexOf(temp) == -1){
            random.push(temp);
            console.log(temp)
        }
        else
         i--;
    }
    return random
}

console.log( generate() );