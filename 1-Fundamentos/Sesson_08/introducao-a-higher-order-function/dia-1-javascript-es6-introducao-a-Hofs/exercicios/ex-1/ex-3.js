const gabarito = () => {
  const rightAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  return rightAnswer;
}

const respostasStudent = () => {
  const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
  return respostas;
}

const verifyHof = () => {
  const corretas = gabarito();
  const respostasAluno = respostasStudent();
  let pontuacao = 0;

  for (let index = 0; index < corretas.length; index += 1) {
    if(respostasAluno[index] === corretas[index]){
      pontuacao += 1;
    } else {
      pontuacao -= 0.5;
    }
  }

  return `Pontuação Final: ${pontuacao}`;
}

verifyHof();