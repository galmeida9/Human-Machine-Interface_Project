function menuButton() {
    if (isOpen == 0) openNav();
    else closeNav();
}

function backButton() {
    if (isOpen == 1) closeNav();
    else {
        if (currentpage == "news") {
            disableWrapper();
            disableNews();
            enableMainScreen();
            closeNav();
            currentpage = "home";
        }
        else if (currentpage == "newsStories") {
            document.getElementsByClassName("newsStory")[0].style.display = "none";
            document.getElementsByClassName("news")[0].style.display = "block";
            currentpage = "news";
            el.scrollLeft = 0;
            el.scrollTop = 0;
        }
        else if (currentpage == "newspopup") {
            document.getElementById("filterpopup").style.display = "none";
            document.getElementsByClassName("news")[0].style.display = "block";
            currentpage = "news";
        }
        else if (currentpage == "weather") {
            document.getElementsByClassName("weatherScreen")[0].style.display = "none";
            document.getElementsByClassName("news")[0].style.display = "block";
            currentpage = "news";
            el.scrollLeft = 0;
            el.scrollTop = 0;
        }
        else if (currentpage == "posts") {
            disableWrapper();
            disablePosts();
            enableMainScreen();
            currentpage = "home";
            el.scrollLeft = 0;
            el.scrollTop = 0;
        }
        else if (currentpage == "viewPost") {
            document.getElementById("viewPost").style.display = "none"
            document.getElementById("viewVideoLarge").pause();
            document.querySelectorAll(".postedVideo").forEach(function(element) {
                element.muted = true;
                element.play();
            });
            currentpage = "posts";
        }
        else if (currentpage == "newPost") {
            document.getElementsByClassName("newPost")[0].style.display = "none";
            document.getElementsByClassName("recentPosts")[0].style.display = "block";
            document.querySelectorAll(".postedVideo").forEach(function(element) {
                element.muted = true;
                element.play();
            });
            currentpage = "posts";
        }
        else if (currentpage == "settings") {
            disableSettings();
            disableWrapper();
            enableMainScreen();
            currentpage = "home";
        }
        else if (currentpage == "selectPost") {
            document.getElementsByClassName("newPost")[0].style.display = "block";
            document.getElementsByClassName("selectPost")[0].style.display = "none";
            disablePhotos();
            disableVideos();
            currentpage = "newPost";
        }
        else if (currentpage == "confirmationPopup") {
            document.getElementById("confirmationPopup").style.display = "none";
            currentpage = "selectPost";
        }
        else if (currentpage == "locationShare") {
            document.getElementsByClassName("locationShare")[0].style.display = "none";
            document.getElementsByClassName("newPost")[0].style.display = "block";
            currentpage = "newPost";
        }
        else if (currentpage == "textToSpeech") {
            document.getElementsByClassName("textToSpeech")[0].style.display = "none";
            document.getElementsByClassName("newPost")[0].style.display = "block";
            currentpage = "newPost";
        }
        else if (currentpage == "showVoiceInput") {
            document.getElementsByClassName("textToSpeech")[0].style.display = "block";
            document.getElementsByClassName("showVoiceInput")[0].style.display = "none";
            currentpage = "textToSpeech";
        }
        else if (currentpage == "chat") {
            disableWrapper();
            disableChat();
            enableMainScreen();
            currentpage = "home";
        }
    }
}