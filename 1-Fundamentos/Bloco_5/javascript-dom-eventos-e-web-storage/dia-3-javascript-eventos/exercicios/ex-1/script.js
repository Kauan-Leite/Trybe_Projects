function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays(daysNumber) {
    let daysList = document.getElementById('days');


    for(let index = 0; index < daysNumber.length; index += 1){
        let number = daysNumber[index];
        let numbersListItem = document.createElement('li');

        numbersListItem.innerHTML = number;

        switch (number){
            case 24:
            case 25:
            case 31:
                numbersListItem.classList.add("day-holiday");
                break;
            
            case 4:
            case 11:
            case 18:
            case 25:
                numbersListItem.classList.add("day-friday");
                break;
            default:
                numbersListItem.classList.add("day");
                break;
        }
        daysList.appendChild(numbersListItem);
    };
}

addDays(dezDaysList);

  // Exercicio 2 e 3

  function buttonFeriado(Feriados){
    let botao = document.createElement("button");
    botao.innerHTML = "Holidays";
    botao.setAttribute('id', 'btn-holiday')

    let container = document.getElementsByClassName("buttons-container")[0];

    container.appendChild(botao);

    let cont = 0;
    botao.addEventListener("click", function (){
        let holidays = document.getElementsByClassName("day-holiday");

        if (cont == 0){
            for(index = 0; index < holidays.length; index += 1){
                holidays[index].style.backgroundColor = "green";
                holidays[index].style.color = "white";
            }
            cont +=1;
        } else if (cont == 1){
            for(index = 0; index < holidays.length; index += 1){
                holidays[index].style.backgroundColor = "rgb(238,238,238)";
                holidays[index].style.color = "#666";
            }
            cont = 0;
        }

    });


  }
    buttonFeriado();

     // Exercicio 4 e 5

  function friday(sextaFeira){
    let botao = document.createElement("button");
    botao.innerHTML = "Sexta-Feira";
    botao.setAttribute('id', 'btn-friday')

    let container = document.getElementsByClassName("buttons-container")[0];

    container.appendChild(botao);

    let cont = 0;
    botao.addEventListener("click", function (){
        let friday = document.querySelectorAll(".day-friday");

        if (cont == 0){
            for(index = 0; index < friday.length; index += 1){
                friday[index].innerHTML = "Mufasa";
            }
            cont +=1;
        } else if (cont == 1){
            for(index = 0; index < friday.length; index += 1){
                friday[index].innerHTML = friday[index];
            }
            cont = 0;
        }

    });


  }
  friday();

