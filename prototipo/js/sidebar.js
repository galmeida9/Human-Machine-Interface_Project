var isOpen = 0;


/*-----------------------------------------------------------------------------------
Open/Close menu
-----------------------------------------------------------------------------------*/
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


/*-----------------------------------------------------------------------------------
Open news
-----------------------------------------------------------------------------------*/
function openNews() {
    disableSettings();
    enableWrapper();
    disableMainScreen();
    enableNews();
    disablePosts();
    resetScroll();
    closeNav();
    currentpage = "news";
}


/*-----------------------------------------------------------------------------------
open posts
-----------------------------------------------------------------------------------*/
function openPosts(){
    disableNews();
    enablePosts();
    disableMainScreen();
    disableSettings()
    enableWrapper();
    resetScroll();
    closeNav();
    currentpage="posts";
}


/*-----------------------------------------------------------------------------------
Open Settings
-----------------------------------------------------------------------------------*/
function openSettings(){
    disableNews();
    disablePosts();
    disableMainScreen();
    enableWrapper();
    enableSettings();
    resetScroll();
    closeNav();
    currentpage="settings";
}


/*-----------------------------------------------------------------------------------
Reset scroll
-----------------------------------------------------------------------------------*/
function resetScroll() {
    el.scrollLeft = 0;
    el.scrollTop = 0;
}


/*-----------------------------------------------------------------------------------
Disable main screen
-----------------------------------------------------------------------------------*/
function disableMainScreen() {
    document.getElementsByClassName("mainscreen")[0].style.display = "none";
}


/*-----------------------------------------------------------------------------------
Disable/Enable settings
-----------------------------------------------------------------------------------*/
function disableSettings() {
    document.getElementsByClassName("settings")[0].style.display = "none";
}

function enableSettings(){
    document.getElementsByClassName("settings")[0].style.display = "block";
}


/*-----------------------------------------------------------------------------------
Disable/Enable wrapper
-----------------------------------------------------------------------------------*/
function disableWrapper(){
    document.getElementsByClassName("scrollable")[0].style.display = "none";
}

function enableWrapper(){
    document.getElementsByClassName("scrollable")[0].style.display = "block";
}