var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

// to change css background :)
// body.style.background = "red";

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    // otherways
    // css.innerHTML
    // css.createTextNode
    css.textContent = body.style.background + ";";
    
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
function setRandomColor() {
    body.style.background = "linear-gradient(to right, " 
    + getRandomColor()
    + ", " 
    + getRandomColor()
    + ")";
    css.textContent = body.style.background + ";";
}

// similar to click, mousenter, keypress
// input
// any time the input value changes
// we can detect that


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomColor);