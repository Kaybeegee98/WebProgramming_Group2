var button = document.getElementById("ourButton");
button.onclick = ourButtonClicked;

function ourButtonClicked(){
    alert("You are awesome!");
    document.getElementById("ourButton").innerHTML = "Hell yeah, let's do it again!";
}


console.log(button);