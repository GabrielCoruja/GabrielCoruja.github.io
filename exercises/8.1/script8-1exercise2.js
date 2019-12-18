const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu";

let variavel = longestWord.split(" ");
let arrayOfString = '';

for (let index = 0; index < variavel.length; index++) {
    if (variavel[index].length > arrayOfString.length) {
        arrayOfString = variavel[index];
    }
}
console.log(arrayOfString);