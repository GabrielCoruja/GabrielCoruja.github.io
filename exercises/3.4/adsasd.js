let array = ["um","dois","três","quatro","cinco","seis","sete","oito","nove","dez"];
let random = [];
for (let i = 0; i < 10;i++){

let aleatorios = array[Math.floor(Math.random() * (array.length))];
if(random.indexOf(aleatorios) == -1){
    random.push(aleatorios)
    console.log(aleatorios)
}else{
    i--;
}
}
