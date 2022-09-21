let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let divisao = 0;
let impar = 0;


for(index = 0; index < numbers.length; index += 1){
    divisao = numbers[index] % 2

    if(divisao === 1){
        impar += 1;
    }
}

if(impar > 0){
    console.log(impar + ' Números Impares');
}else{
    console.log('nenhum valor ímpar encontrado');
}