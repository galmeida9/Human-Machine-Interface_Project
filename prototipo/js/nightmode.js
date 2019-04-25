var nightmodeOn = 0;

/*-------------------------------------------------------------------------------------
Toggle night mode
--------------------------------------------------------------------------------------*/
function nightmode() {
    var i;
    if (nightmodeOn == 0) {
        document.getElementsByClassName("scrollable")[0].style.background = 'black';
        document.getElementsByClassName("news")[0].style.color = 'white';
        document.getElementsByClassName("newsPart")[0].style.color = 'white';
        document.getElementsByClassName("newsPart")[1].style.color = 'white';
        document.getElementById("filter").src = "resources/filter_white.png";
        document.getElementById("nightmodeIcon").src = "resources/night_mode_on.png";
        document.getElementsByClassName("popupcontent")[0].style.background = 'black';
        document.getElementsByClassName("popupcontent")[0].style.color = 'white';
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
        document.querySelectorAll(".postItemText").forEach(function(element) {
            element.style.color = 'white';
        });
        document.querySelectorAll(".user").forEach(function(element) {
            element.src="resources/user_white.png";
        });
        document.getElementById("addPostImg").src="resources/plus_white.png";
        nightmodeOn = 1;
    }

    else if (nightmodeOn == 1) {
        document.getElementsByClassName("scrollable")[0].style.background = 'white';
        document.getElementsByClassName("news")[0].style.color = 'black';
        document.getElementsByClassName("newsPart")[0].style.color = 'black';
        document.getElementsByClassName("newsPart")[1].style.color = 'black';
        document.getElementById("filter").src = "resources/filter.png";
        document.getElementById("nightmodeIcon").src = "resources/night_mode_off.png";
        document.getElementsByClassName("popupcontent")[0].style.background = 'white';
        document.getElementsByClassName("popupcontent")[0].style.color = 'black';
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
        document.querySelectorAll(".postItemText").forEach(function(element) {
            element.style.color = 'black';
        });
        document.querySelectorAll(".user").forEach(function(element) {
            element.src="resources/user.png";
        });
        document.getElementById("addPostImg").src="resources/plus.png";
        nightmodeOn = 0;
    }
}