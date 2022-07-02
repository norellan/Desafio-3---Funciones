const aKey = document.querySelector('#a-blue');
const wKey = document.querySelector('#w-red');
const dKey = document.querySelector('#d-yellow');
const sKey = document.querySelector('#s-green');

var cuadro = document.querySelector('#cuadro');
var colorGlobal = "";

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
    colorGlobal = "blue";
    } else if (event.key === 'w') {
    colorGlobal = "red";
    } else if (event.key === 'd') {
    colorGlobal = "yellow";
    } else if (event.key === 's') {
    colorGlobal = "green";
    } else {
        colorGlobal="";
    }
    console.log(colorGlobal);
})

function changeColor(elem){
    if (colorGlobal == "") {
        elem.style.backgroundColor = "gray"
        return;
    }
    
    elem.backgroundColor = colorGlobal;  

}

aKey.addEventListener('click', () => changeColor(aKey));

wKey.addEventListener('click', () => changeColor(wKey));

dKey.addEventListener('click', () => changeColor(dKey));

sKey.addEventListener('click', () => changeColor(sKey));

cuadro.addEventListener('click', function(){
    cuadro.style.backgroundColor = colorGlobal;
})
