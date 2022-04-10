// Números de 0 a 50
let numbers = [];
let maiorPrimo = 0;

for(index = 0; index <= 50; index += 1){
    numbers.push(index);
}

// Percorrer o Array

for(index = 0; index < numbers.length; index += 1){

    let primo = true;

    for(let divisor = 2; divisor < numbers[index]; divisor += 1){
        if(numbers[index] % divisor === 0){
            primo = false;
            break;
        }
    }

    if(primo == true){
        if(numbers[index] > maiorPrimo){
            maiorPrimo = numbers[index]
        }
    }
}

// Mostrar o Maior Número Primo

console.log("O Maior Número Primo é: " + maiorPrimo);


