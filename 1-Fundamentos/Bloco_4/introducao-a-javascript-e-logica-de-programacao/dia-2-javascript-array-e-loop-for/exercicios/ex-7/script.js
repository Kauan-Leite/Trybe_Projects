let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numberSmaller = 1000;

for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] < numberSmaller){
        numberSmaller = numbers[index];
    }
}

console.log(numberSmaller);