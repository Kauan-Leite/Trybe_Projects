document.querySelector("header").style.backgroundColor = '#036b52';

document.querySelector(".emergency-tasks").style.backgroundColor = 'pink';

let titleBGI = document.querySelectorAll(".emergency-tasks h3");

for(let index = 0; index < titleBGI.length; index += 1){
    document.querySelectorAll(".emergency-tasks h3")[index].style.backgroundColor = 'purple'
}

document.querySelector(".no-emergency-tasks").style.backgroundColor = 'yellow';

let titleBGN = document.querySelectorAll(".no-emergency-tasks h3");

for(let index = 0; index < titleBGN.length; index += 1){
    document.querySelectorAll(".no-emergency-tasks h3")[index].style.backgroundColor = 'black'
}

document.querySelector("footer").style.backgroundColor = '#036b52';