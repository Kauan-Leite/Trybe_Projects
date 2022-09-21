let peca = "reu";


let pecaXadrez = peca.toLowerCase();

switch(pecaXadrez){
    case "peao":
        console.log("Em Frente");
        break;
    case "bispo":
        console.log("Linha Reta nas Diagonais");
        break;
    case "torre":
        console.log("Linha Reta na Vertical e Horizontal");
        break;
    case "cavalo":
        console.log("Em L")
        break;
    case "rainha":
        console.log("Linha Reta na Vertical, Horizontal e Diagonal")
        break;
    case "rei":
        console.log("1 Casa Para Qualquer Lado")
        break;
    default:
        console.log("Peça Desconhecida")
        break;
}


