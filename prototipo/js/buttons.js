function menuButton() {
    if (isOpen == 0) openNav();
    else closeNav();
}

function backButton() {
    if (isOpen == 1) closeNav();
    else {
        if (currentpage == "news") {
            document.getElementsByClassName("scrollable")[0].style.display = "none";
            document.getElementsByClassName("newsscreen")[0].style.display = "none";
            document.getElementsByClassName("mainscreen")[0].style.display = "block";
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
            document.getElementsByClassName("scrollable")[0].style.display = "none";
            document.getElementsByClassName("postScreen")[0].style.display = "none";
            document.getElementsByClassName("mainscreen")[0].style.display = "block";
            currentpage = "home";
            el.scrollLeft = 0;
            el.scrollTop = 0;
        }
        else if (currentpage == "viewPost") {
            document.getElementById("viewPost").style.display = "none"
            document.getElementById("viewVideoLarge").pause();
            document.querySelectorAll(".postedVideo").forEach(function(element) {
                element.play();
            });
            currentpage = "posts";
        }
        else if (currentpage == "newPost") {
            document.getElementsByClassName("newPost")[0].style.display = "none";
            document.getElementsByClassName("recentPosts")[0].style.display = "block";
            document.querySelectorAll(".postedVideo").forEach(function(element) {
                element.play();
            });
            currentpage = "posts";
        }
        else if (currentpage == "settings") {
            document.getElementsByClassName("settings")[0].style.display = "none";
            document.getElementsByClassName("scrollable")[0].style.display = "none";
            document.getElementsByClassName("mainscreen")[0].style.display = "block";
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
    }
}