var button = document.getElementById("ourButton");
button.onclick = ourButtonClicked;
button.onmouseover = ourButtonHover;

var click = document.getElementById("click");
click.onclick = ourClickClicked;

function ourButtonClicked(){
    alert("You are awesome!");
    document.getElementById("ourButton").innerHTML = "Hell yeah, let's do it again!";
}

function ourButtonHover(){
    document.getElementById("ourButton").disabled = true;
}

function ourClickClicked(){
    document.getElementById("ourButton").disabled = false;
    console.log("aaaaahhhhh");
}

console.log(button);