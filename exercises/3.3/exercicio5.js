function repetidor(){

let repetidor = 0;
let elemento = [];
let num = 0;
let g = 0;

    for (let i = 0; i < array.length - 1; i++){
        for (let h = g; h < array.length - 1; h++){
        if (array[i] == array[h+1]){
            repetidor = array[i];
            elemento[num] = array[i];
            num++;
        }
        }
        g++;
        h = 0;
    }
    console.log(repetidor);

}

array = [2, 3, 2, 5, 8, 2, 3];

console.log(repetidor(array));
