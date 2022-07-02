function pintar(ele, color='yellow'){
    ele.style.backgroundColor = color
    }
    window.onload = ()=>{
    ele = document.getElementById("ele1");
    ele.addEventListener("click", () => pintar (ele)); 
        pintar(ele, 'green'); }