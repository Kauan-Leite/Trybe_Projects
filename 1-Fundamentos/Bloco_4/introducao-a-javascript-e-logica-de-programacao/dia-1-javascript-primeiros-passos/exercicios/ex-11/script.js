const salarioBruto = 3000;
let descontoInss;
let aliquotaFixaIR;
let aliquotaFinalIR;
let parcela;
let salarioBase
let salarioLiquido;

// INSS
if(salarioBruto <= 1556.64){
    descontoInss = salarioBruto * 8/100;
    salarioBase = salarioBruto - descontoInss;

} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    descontoInss = salarioBruto * 9/100;
    salarioBase = salarioBruto - descontoInss;

} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    descontoInss = salarioBruto * 11/100;
    salarioBase = salarioBruto - descontoInss;

}else if(salarioBruto > 5189.82){
    descontoInss = 570.88;
    salarioBase = salarioBruto - descontoInss;
}

// Imposto de Renda
if(salarioBase <= 1903.98){
    aliquotaFixaIR = 0;
    salarioLiquido = salarioBase;
    console.log("Salário Liquido: R$", salarioLiquido);


} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    aliquotaFixaIR = 7.5 / 100;
    parcela = 142.80;

    aliquotaFinalIR = salarioBase * aliquotaFixaIR - parcela;
    salarioLiquido = salarioBase - aliquotaFinalIR;
    console.log("Salário Liquido: R$", salarioLiquido);



} else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquotaFixaIR = 15 / 100;
    parcela = 354.80;

    aliquotaFinalIR = salarioBase * aliquotaFixaIR - parcela;
    salarioLiquido = salarioBase - aliquotaFinalIR;
    console.log("Salário Liquido: R$", salarioLiquido);

} else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquotaFixaIR = 22.5 / 100;
    parcela = 636.13;

    aliquotaFinalIR = salarioBase * aliquotaFixaIR - parcela;
    salarioLiquido = salarioBase - aliquotaFinalIR;
    console.log("Salário Liquido: R$", salarioLiquido);

} else if(salarioBase > 4664.68){
    aliquotaFixaIR = 27.5 / 100;
    parcela = 869.36;

    aliquotaFinalIR = salarioBase * aliquotaFixaIR - parcela;
    salarioLiquido = salarioBase - aliquotaFinalIR;
    console.log("Salário Liquido: R$", salarioLiquido);

}
