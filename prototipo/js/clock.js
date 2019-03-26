var date = new Date();
clock();
displayDate();
setInterval(clock, 60000);

function clock() {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
}

function displayDate() {
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    document.getElementById("Date").innerHTML = day + "/" + month + "/" + year;
}