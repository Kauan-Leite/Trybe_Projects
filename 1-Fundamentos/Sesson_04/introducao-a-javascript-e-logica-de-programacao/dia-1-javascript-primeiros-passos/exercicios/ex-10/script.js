const custoProduto = 20;
const valorProduto = 54;

const custoTotal = custoProduto + custoProduto * 0.2;

if(custoProduto >= 0 && valorProduto >= 0 ){

    let lucro = valorProduto - custoTotal;
    console.log(lucro*1000);

} else{
    console.log("Insira Valores Maiores que 0");
}

