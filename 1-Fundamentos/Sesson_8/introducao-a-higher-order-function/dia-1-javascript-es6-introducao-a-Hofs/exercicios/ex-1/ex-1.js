const infos = (name) => {

  let conc = name.replace(' ', '');
  let lowName = conc.toLowerCase();
  const informations = {
    nomeCompleto: name,
    email: `${lowName}@trybe.com`
  }
  return informations;
}


const newEmployees = () => {
  const employees = {
    id1: infos('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: infos('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: infos('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};