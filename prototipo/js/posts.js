var imgToPost;
var videoToPost;
var img = 0;


/*-----------------------------------------------------------------------------------
Disable/Enable Posts
-----------------------------------------------------------------------------------*/
function disablePosts() {
    document.getElementsByClassName("postScreen")[0].style.display = "none";
    document.getElementsByClassName("newPost")[0].style.display = "none"
    document.getElementById("viewPost").style.display = "none";
    document.getElementById("viewVideoLarge").pause();
    document.getElementById("confirmationPopup").style.display = "none";
    document.querySelectorAll(".postedVideo").forEach(function(element) {
        element.pause();
    });
    disablePhotos();
    disableVideos();

}

function enablePosts() {
    document.getElementsByClassName("postScreen")[0].style.display = "block";
    document.getElementsByClassName("newPost")[0].style.display = "none"
    document.getElementsByClassName("recentPosts")[0].style.display = "block";
    document.getElementById("viewPost").style.display = "none";
    document.getElementById("viewVideoLarge").pause();
    document.getElementById("confirmationPopup").style.display = "none";
    document.querySelectorAll(".postedVideo").forEach(function(element) {
        element.play();
        element.muted = true;
    });
    disablePhotos();
    disableVideos();
}


/*-----------------------------------------------------------------------------------
View images fullscreen
-----------------------------------------------------------------------------------*/
function viewImg(img){
    if (mouseMovement < 3 && mouseMovement > -3) {
        document.getElementById("viewPost").style.display = "block";
        document.getElementById("viewImgLarge").style.display = "block";
        document.getElementById("viewVideoLarge").style.display = "none";
        document.getElementById("viewImgLarge").src = img;
        document.querySelectorAll(".postedVideo").forEach(function(element) {
            element.pause();
        });
        currentpage = "viewPost";
    }
}


/*-----------------------------------------------------------------------------------
View videos fullscreen
-----------------------------------------------------------------------------------*/
function viewVideo(video){
    if (mouseMovement < 3 && mouseMovement > -3) {
        document.getElementById("viewPost").style.display = "block";
        document.getElementById("viewImgLarge").style.display = "none";
        document.getElementById("viewVideoLarge").style.display = "block";
        document.getElementById("viewVideoLarge").src = video;
        document.querySelectorAll(".postedVideo").forEach(function(element) {
            element.pause();
        });
        document.getElementById("viewVideoLarge").play();
        currentpage = "viewPost";
    }
}


/*-----------------------------------------------------------------------------------
Enable new post screen
-----------------------------------------------------------------------------------*/
function newPost(){
    document.getElementsByClassName("recentPosts")[0].style.display = "none";
    document.getElementsByClassName("newPost")[0].style.display = "block";
    currentpage = "newPost"
}


/*-----------------------------------------------------------------------------------
Select video or image post
-----------------------------------------------------------------------------------*/
function selectPost(mode){
    document.getElementsByClassName("newPost")[0].style.display = "none";
    document.getElementsByClassName("selectPost")[0].style.display = "block";
    if (mode == "photo") enablePhotos();
    else enableVideos();
    currentpage = "selectPost";
}


/*-----------------------------------------------------------------------------------
Confirm post
-----------------------------------------------------------------------------------*/
function postConfirmation(source, mode){
    if (mouseMovement < 3 && mouseMovement > -3) {
        document.getElementById("confirmationPopup").style.display = "block";
        currentpage = "confirmationPopup";
        if (mode == "photo") { imgToPost = source; img = 1; }
        else { videoToPost = source; img = 0;}
    }
}


/*-----------------------------------------------------------------------------------
Post img/Video
-----------------------------------------------------------------------------------*/
function postImgVideo(){
    var lastPost = document.getElementsByClassName("postItem")[0];
    var newPost = document.createElement("div");
    newPost.classList.add("postItem");
    if (img == 1) 
        newPost.innerHTML = "<p><img class='user' src='resources/user.png'> <b>You</b> posted</p><img class='postedImg' src=" + imgToPost + " onclick=" + "viewImg('" + imgToPost + "')" + "><br>";
    else
    newPost.innerHTML = "<p><img class='user' src='resources/user.png'> <b>You</b> posted</p><Video class='postedVideo' src=" + videoToPost + " onclick=" + "viewVideo('" + videoToPost + "')" + "><br>";
    lastPost.insertAdjacentElement("beforebegin", newPost);
    disablePhotos();
    backButton();
    backButton();
    backButton();
}


/*-----------------------------------------------------------------------------------
Disable/Enable photos
-----------------------------------------------------------------------------------*/
function enablePhotos() {
    document.querySelectorAll(".selectIMG").forEach(function(element) {
        element.style.display = "block";
    });
}

function disablePhotos() {
    document.querySelectorAll(".selectIMG").forEach(function(element) {
        element.style.display = "none";
    });
}


/*-----------------------------------------------------------------------------------
Disable/Enable videos
-----------------------------------------------------------------------------------*/
function enableVideos() {
    document.querySelectorAll(".selectVideo").forEach(function(element) {
        element.style.display = "block";
        element.play();
        element.muted = true;
    });
}

function disableVideos() {
    document.querySelectorAll(".selectVideo").forEach(function(element) {
        element.style.display = "none";
        element.pause();
        element.muted = false;
    });
}