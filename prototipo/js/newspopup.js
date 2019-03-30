var filterpopup = document.getElementById("filterpopup");
var btn = document.getElementById("filter");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    filterpopup.style.display = "block";
}

span.onclick = function() {
    console.log("ola");
    filterpopup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == filterpopup) {
        filterpopup.style.display = "none";
    }
}