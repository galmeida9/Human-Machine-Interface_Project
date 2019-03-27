var timeout;
clock();
displayDate();

function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;

    timeout = setTimeout(clock, 1000);
}

function displayDate() {
    var date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    document.getElementById("Date").innerHTML = day + "/" + month + "/" + year;
}