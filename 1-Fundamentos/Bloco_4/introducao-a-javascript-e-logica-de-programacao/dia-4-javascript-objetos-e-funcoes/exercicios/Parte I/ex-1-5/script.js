let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

//   console.log('Bem vinda,' + ' ' + info.personagem);

    // for(let keys in info){
    //     console.log(keys);
    // }

    for(let keys in info){
        if(info[keys] != info2[keys]){
            console.log(info[keys] + ' e ' + info2[keys]);
        } else {
            console.log('Ambos ' + keys);
        }
    }
