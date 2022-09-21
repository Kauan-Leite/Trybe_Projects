let skills = ['HTML', 'CSS', 'JS', 'REACT', 'SQL'];
let organize = skills.sort();

const changeX = frase =>{
  let nome = frase;
  let fraseRetornada = `Tryber ${nome} aqui!`
  return(nome);
}
changeX('Bebeto')

const aboutMe = (nome) => {
  console.log(`Tryber ${nome} aqui!
  Minhas cinco principais habilidades são:
  *${organize[0]}
  *${organize[1]}
  *${organize[2]}
  *${organize[3]}
  *${organize[4]}`);
}

aboutMe();