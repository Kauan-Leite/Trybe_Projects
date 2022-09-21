let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = array[0];

for(index = 0; index < array.length; index += 1){
    if(array[index].length > maior.length){
        maior = array[index];
    }
}

console.log("Maior Palavra:" + maior);

for(index = 0; index < array.length; index += 1){
    if(array[index].length < menor.length){
        menor = array[index];
    }
}

console.log("Menor Palavra:" + menor);