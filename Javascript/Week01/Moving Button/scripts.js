var button = document.getElementById("ourButton");
button.onmouseover = ourButtonClicked;

function ourButtonClicked(){
    var x = Math.floor(Math.random()*500);
    var y = Math.floor(Math.random()*500);
    button.style.top = x + 'px';
    button.style.left = y + 'px';
}


console.log(button);