const numbersSelected = () => {
  const numbers = [2, 9, 16, 25, 41, 55];
  return numbers;
}

const sorteioNumbers = () => {
  let randomNumbers = [];

  for (let index = 0; index < 6; index += 1){
    randomNumbers[index] = parseInt(Math.random() * 60);
  }

  let organize = randomNumbers.sort((a,b)=>a-b);
  return organize;
}

const comparar = () => {
  let game = numbersSelected();
  let gabarito = sorteioNumbers();
  let acertos = 0;

  for(let index = 0; index < gabarito.length; index += 1){
    if(game[index] === gabarito[index]){
      acertos += 1;
    }
  }

  return acertos;
}

comparar();