let maior = 0;
function receiveArray(){
    let numbers = [1, 7, 12, 14, 1, 10];

    for(index = 0; index <= numbers.length; index += 1){

        if(numbers[index] >= maior){
            maior = index;
        }

    }
    console.log(maior);
}

receiveArray();