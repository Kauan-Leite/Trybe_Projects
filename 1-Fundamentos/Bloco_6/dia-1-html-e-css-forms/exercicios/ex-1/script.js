const form = document.getElementById('trybeTrip')
const sendButton = document.getElementById('enviar');

const createButton = document.createElement('button');
createButton.type = 'reset'


createButton.innerHTML = 'Limpar';

form.appendChild(createButton);



function btn (event){
    event.preventDefault();




}
// sendButton.addEventListener('click', btn)