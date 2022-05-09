const button = document.getElementById('btn');
const contador = document.getElementById('clickCount');

let count = 0;
let addCont = () => {
  count += 1;
  contador.innerHTML = count;
}
button.addEventListener('click', addCont);