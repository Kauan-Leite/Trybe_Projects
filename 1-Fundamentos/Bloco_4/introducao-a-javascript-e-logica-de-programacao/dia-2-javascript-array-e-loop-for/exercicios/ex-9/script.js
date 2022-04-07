let numbers = [];
let divisao = [];

for(index = 0; index < 25; index += 1){
    numbers.push(index+1);
}

for(index2 = 0; index2 < 25; index2 += 1){
    divisao.push(numbers[index2] / 2);
}

console.log(divisao);