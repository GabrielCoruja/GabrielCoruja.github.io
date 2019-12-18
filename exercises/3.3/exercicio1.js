
function word(polidrome){

    let palavra = polidrome.split('').reverse().join('');
  
    if (polidrome == palavra){
    return true;
    }
    else {
    return false;
    }
  }
  x = 'arara'
  console.log(word(x));
  
  
  