const porcentagemNota = 40;


if(porcentagemNota >= 0 && porcentagemNota <= 100){
    if(porcentagemNota >= 90){
        console.log("Nota: A");
    } else if(porcentagemNota >= 80){
        console.log("Nota: B");
    } else if(porcentagemNota >= 70){
        console.log("Nota: C");
    } else if(porcentagemNota >= 60){
        console.log("Nota: D");
    } else if(porcentagemNota >= 50){
        console.log("Nota: E");
    } else if(porcentagemNota < 50){
        console.log("Nota: F");
    }
} else{
    console.log("Insira um Valor entre 0 e 100");
}