var filterpopup = document.getElementById("filterpopup");
var btn = document.getElementById("filter");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    filterpopup.style.display = "block";
    currentpage = "newspopup";
}

span.onclick = function() {
    filterpopup.style.display = "none";
    currentpage = "news";
}

window.onclick = function(event) {
    if (event.target == filterpopup) {
        filterpopup.style.display = "none";
        currentpage = "news";
    }
}