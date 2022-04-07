let estadoPessoa;

estadoPessoa = "lista";

switch (estadoPessoa){
    case "aprovada":
        console.log("Parabens Voce esta Aprovado(a)!")
        break;
    case "lista":
        console.log("Lista, não sei o que é mas é isso :)")
        break;
    case "reprovada":
        console.log("Moio, tu foi Reprovado :(")
        break;
    default:
        console.log("Não se aplica")
        break;
}