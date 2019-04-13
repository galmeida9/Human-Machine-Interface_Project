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