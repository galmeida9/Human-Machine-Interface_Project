/*-----------------------------------------------------------------------------------
Disable/Enable Chat
-----------------------------------------------------------------------------------*/
function disableChat() {
    document.getElementsByClassName("chatScreen")[0].style.display = "none";
    document.getElementsByClassName("recentChat")[0].style.display = "none";
}

function enableChat() {
    document.getElementsByClassName("chatScreen")[0].style.display = "block";
    document.getElementsByClassName("recentChat")[0].style.display = "block";
}