const fatorial = numero => {
  let resultado = numero;
  for (var index = 1; index < numero; index += 1) {
    resultado *= index;
  }
  console.log(resultado)
}

fatorial(7);