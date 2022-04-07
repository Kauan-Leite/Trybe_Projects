const number1 = 27;
const number2 = 56;
const number3 = 35;

if(number1 > number2 && number1 > number3){
    console.log("O 1°Número é maior");
} else if(number2 > number1 && number2 > number3){
    console.log("O 2°Número é maior");
} else if(number3 > number1 && number3 > number2){
    console.log("O 3°Número é maior");
} else{
    console.log("Insira Números Diferentes");
}