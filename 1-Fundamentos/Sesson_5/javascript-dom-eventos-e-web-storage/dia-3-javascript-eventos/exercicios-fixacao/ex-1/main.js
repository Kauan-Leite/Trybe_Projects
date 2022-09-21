const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

    let liA = document.getElementsByTagName("li")[0];
    let liB = document.getElementsByTagName("li")[1];
    let liC = document.getElementsByTagName("li")[2];
    let tech = document.getElementsByClassName("tech");



    liA.addEventListener("click", addLIA);
    liB.addEventListener("click", addLIB);
    liC.addEventListener("click", addLIC);


    function addLIA(evento){
        console.log("Elemento 'A' Clicado");
        liA.classList.add("tech");
        liB.classList.remove("tech");
        liC.classList.remove("tech");
        tech = document.getElementsByClassName("tech");
    }
    function addLIB(evento){
        console.log("Elemento 'B' Clicado");
        liB.classList.add("tech")
        liA.classList.remove("tech");
        liC.classList.remove("tech");
        tech = document.getElementsByClassName("tech");
    }
    function addLIC(evento){
        console.log("Elemento 'C' Clicado");
        liC.classList.add("tech")
        liA.classList.remove("tech");
        liB.classList.remove("tech");
        tech = document.getElementsByClassName("tech");
    }


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


    let text = document.querySelector("#input");


    function changeText(evento){
        tech[0].innerText = text.value;
    }

    text.addEventListener("change", changeText);


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
    let top3 = document.getElementById("my-spotrybefy");

    function anotherPage(evento){
        window.open('https://kauan-leite.github.io/', '_blank')
    }

    top3.addEventListener('dblclick', anotherPage);


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

    function inTop(evento){
        top3.style.color = "blue";
    }

    top3.addEventListener('mousemove', inTop);

    function overTop(evento){
        top3.style.color = "white";
    }

    top3.addEventListener('mouseout', overTop);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.