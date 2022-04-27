const form = document.getElementsByClassName('d-grid')[0];
const sendButton = document.getElementById('enviar');


const createButton = document.createElement('button');
createButton.type = 'reset'

createButton.classList.add('btn');
createButton.classList.add('btn-danger');
createButton.innerHTML = 'Limpar';

form.appendChild(createButton);



function btn (event){
    event.preventDefault();




}
sendButton.addEventListener('click', btn)