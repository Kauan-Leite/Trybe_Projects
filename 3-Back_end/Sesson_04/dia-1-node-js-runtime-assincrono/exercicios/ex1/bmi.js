const calcBMI = () => {
  const readline = require('readline-sync');

  const weigth = readline.questionInt('What\'s Your Weigth? ');
  const heigth = readline.questionFloat('What\'s Your Heigth? ');

  const result = weigth / (heigth * 2);

  if (result < 18.5) {
    console.log('Abaixo do Peso');
  }
  if (result >= 18.5 && result <= 24.9) {
    console.log('Peso normal');
  }
  if (result >= 25 && result <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
  }
  if (result >= 30 && result <= 34.9) {
    console.log('Obesidade grau I');
  }
  if (result >= 35 && result <= 39.9) {
    console.log('Obesidade grau II');
  }
  if (result >= 40) {
    console.log('Obesidade grau III e IV');
  }

  return result;
}

console.log(calcBMI());