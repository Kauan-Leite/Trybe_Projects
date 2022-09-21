let bgColor = document.getElementById('searchFundo');
let colorText = document.getElementById('searchTexto');
let fontSize = document.getElementById('searchFont');
let lineSpace = document.getElementById('searchLinhas');
let fontFamily = document.getElementById('searchFamily');
let button = document.getElementById('reset');
let body = document.body;

body.style.backgroundColor = localStorage.getItem('preferBackColor')
body.style.color = localStorage.getItem('preferColorText')
body.style.fontSize = localStorage.getItem('preferFontSize')
body.style.lineHeight = localStorage.getItem('preferLineSpace')
body.style.fontFamily = localStorage.getItem('preferFontFamily')


bgColor.addEventListener("change", changeColorBackground);

colorText.addEventListener("change", changeColorText);

fontSize.addEventListener("change", changeFontSize);

lineSpace.addEventListener("change", changeLineSpace);

fontFamily.addEventListener("change", changeFontFamily);

button.addEventListener("click", resetConfigs);


function changeColorBackground(){
    body.style.backgroundColor = bgColor.value;
    localStorage.setItem('preferBackColor', bgColor.value);

};

function changeColorText(){
    body.style.color = colorText.value;
    localStorage.setItem('preferColorText', colorText.value);
}

function changeFontSize(){
    body.style.fontSize = fontSize.value + 'px';
    localStorage.setItem('preferFontSize', fontSize.value + 'px');

}

function changeLineSpace(){
    body.style.lineHeight = lineSpace.value + 'px';
    localStorage.setItem('preferLineSpace', lineSpace.value + 'px');

}

function changeFontFamily(){
    body.style.fontFamily = fontFamily.value;
    localStorage.setItem('preferFontFamily', fontFamily.value);
}

function resetConfigs(){
    localStorage.clear();
    document.location.reload(true);
}