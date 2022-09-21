// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

let numFatorial = 10;
let resultado = numFatorial;

for (let index = 1; index < numFatorial; index += 1) {
    resultado *= index;
}
console.log(resultado);