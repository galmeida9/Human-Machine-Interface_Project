var nightmodeOn = 0;

/*-------------------------------------------------------------------------------------
Toggle night mode
--------------------------------------------------------------------------------------*/
function nightmode() {
    var i;
    if (nightmodeOn == 0) {
        document.getElementsByClassName("scrollable")[0].style.background = 'black';
        document.getElementsByClassName("news")[0].style.color = 'white';
        for (i = 0; i < numberOfNews; i++) {
            document.getElementsByClassName("newsTitle")[i].style.color = 'white';
        }
        document.getElementsByClassName("newsPart")[0].style.color = 'white';
        document.getElementsByClassName("newsPart")[1].style.color = 'white';
        document.getElementById("filter").src = "resources/filter_white.png";
        document.getElementById("nightmodeIcon").src = "resources/night_mode_on.png";
        document.getElementsByClassName("popupcontent")[0].style.background = 'black';
        document.getElementsByClassName("popupcontent")[0].style.color = 'white';
        document.getElementsByClassName("weatherToday")[0].style.color = 'white';
        document.getElementsByClassName("weatherToday")[1].style.color = 'white';
        for (i = 0; i < numberOfCategories; i++) {
            document.getElementsByClassName("popupCategory")[i].style.color = 'white';
            document.getElementsByClassName("newsCheckmark")[i].src = "resources/check_white.png";
        }
        for (i = 0; i < 6; i++) {
            document.getElementById(weatherDays[i]).style.color = 'white';
            document.getElementById(days[i]).style.color = 'white';
        }
        document.getElementById("weatherTitle").style.color = 'white';
        nightmodeOn = 1;
    }

    else if (nightmodeOn == 1) {
        document.getElementsByClassName("scrollable")[0].style.background = 'white';
        document.getElementsByClassName("news")[0].style.color = 'black';
        for (i = 0; i < numberOfNews; i++) {
            document.getElementsByClassName("newsTitle")[i].style.color = 'black';
        }
        document.getElementsByClassName("newsPart")[0].style.color = 'black';
        document.getElementsByClassName("newsPart")[1].style.color = 'black';
        document.getElementById("filter").src = "resources/filter.png";
        document.getElementById("nightmodeIcon").src = "resources/night_mode_off.png";
        document.getElementsByClassName("popupcontent")[0].style.background = 'white';
        document.getElementsByClassName("popupcontent")[0].style.color = 'black';
        document.getElementsByClassName("weatherToday")[0].style.color = 'black';
        document.getElementsByClassName("weatherToday")[1].style.color = 'black';
        for (i = 0; i < numberOfCategories; i++) {
            document.getElementsByClassName("popupCategory")[i].style.color = 'black';
            document.getElementsByClassName("newsCheckmark")[i].src = "resources/check.png";
        }
        for (i = 0; i < 6; i++) {
            document.getElementById(weatherDays[i]).style.color = 'black';
            document.getElementById(days[i]).style.color = 'black';
        }
        document.getElementById("weatherTitle").style.color = 'black';
        nightmodeOn = 0;
    }

    document.getElementById("filterpopup").style.display = "none";
}