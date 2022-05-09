const maiorPalavra = (frase) => {
  let separado = frase.split(" ");
  let maior = separado[0];

  for (let index = 0; index < separado.length; index += 1){
    if(separado[index].length > maior.length){
      maior = separado[index]
    }
  }
  console.log(maior);
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');