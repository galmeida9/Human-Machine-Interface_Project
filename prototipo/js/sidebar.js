var isOpen = 0;

function openNav() {
    document.getElementById("menu").style.width = "113px";
    document.getElementById("menu").style.zIndex = 10;
    isOpen = 1;
}
  
function closeNav() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("menu").style.zIndex = -1;
    isOpen = 0;
}

function openNews() {
    document.getElementsByClassName("settings")[0].style.display = "none";
    document.getElementsByClassName("scrollable")[0].style.display = "block";
    document.getElementsByClassName("newsscreen")[0].style.display = "block";
    document.getElementsByClassName("postScreen")[0].style.display = "none";
    document.getElementsByClassName("newPost")[0].style.display = "none"
    document.getElementsByClassName("mainscreen")[0].style.display = "none";
    document.getElementsByClassName("newsStory")[0].style.display = "none";
    document.getElementsByClassName("news")[0].style.display = "block";
    document.getElementsByClassName("weatherScreen")[0].style.display = "none";
    document.getElementById("filterpopup").style.display = "none";
    document.getElementById("viewPost").style.display = "none";
    document.getElementById("viewVideoLarge").pause();
    el.scrollLeft = 0;
    el.scrollTop = 0;
    closeNav();
    currentpage = "news";
}

function openPosts(){
    document.getElementsByClassName("mainscreen")[0].style.display = "none";
    document.getElementsByClassName("settings")[0].style.display = "none";
    document.getElementsByClassName("scrollable")[0].style.display = "block";
    document.getElementsByClassName("newsscreen")[0].style.display = "none";
    document.getElementsByClassName("postScreen")[0].style.display = "block";
    document.getElementsByClassName("newPost")[0].style.display = "none"
    document.getElementsByClassName("recentPosts")[0].style.display = "block";
    document.getElementById("viewPost").style.display = "none";
    document.getElementById("viewVideoLarge").pause();
    el.scrollLeft = 0;
    el.scrollTop = 0;
    closeNav();
    currentpage="posts";
}

function openSettings(){
    document.getElementsByClassName("mainscreen")[0].style.display = "none";
    document.getElementsByClassName("scrollable")[0].style.display = "block";
    document.getElementsByClassName("newsscreen")[0].style.display = "none";
    document.getElementsByClassName("popup")[0].style.display = "none";
    document.getElementsByClassName("newPost")[0].style.display = "none";
    document.getElementsByClassName("postScreen")[0].style.display = "none";
    document.getElementById("viewPost").style.display = "none";
    document.getElementsByClassName("settings")[0].style.display = "block";
    el.scrollLeft = 0;
    el.scrollTop = 0;
    closeNav();
    currentpage="settings";
}