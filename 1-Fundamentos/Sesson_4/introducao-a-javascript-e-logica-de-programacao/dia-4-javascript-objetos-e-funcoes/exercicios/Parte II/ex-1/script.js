function verifyPalindrom(word){
    let reverse = '';
    let palindrom = false;

    for(index = word.length - 1; index >= 0; index -= 1){
        reverse += word[index]
    }
    

    if(word === reverse){
        palindrom = true;
    }

    console.log(palindrom);
}

verifyPalindrom('arara');