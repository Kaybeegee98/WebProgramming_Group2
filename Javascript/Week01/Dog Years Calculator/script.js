var button = document.getElementById("ourButton");
button.onclick = ourButtonClicked;

function ourButtonClicked(){
    var age = document.getElementById("age").value;
    var dogAge = Number(age) * 7;
    alert("Yep, that's " + dogAge +" dog years!");
    document.getElementById("ourButton").innerHTML = "Woof, let's do it again!";
}


console.log(button);