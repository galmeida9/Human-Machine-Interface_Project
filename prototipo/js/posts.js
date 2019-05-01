var imgToPost;
var videoToPost;
var typeOfPost = 0; /* {0:video, 1:image; 2:location; 3:voice input} */
var predictedText=["Estou a adorar descobrir Lisboa e especialmente os pastéis de Belém.",
                    "Não esperava gostar tanto de Bruxelas, surpreendeu-me imenso.",
                    "Gostava de poder ficar mais tempo em Paris para passear mais."]
var textToPost;


/*-----------------------------------------------------------------------------------
Disable/Enable Posts
-----------------------------------------------------------------------------------*/
function disablePosts() {
    document.getElementsByClassName("postScreen")[0].style.display = "none";
    document.getElementsByClassName("newPost")[0].style.display = "none";
    document.getElementsByClassName("locationShare")[0].style.display = "none";
    document.getElementsByClassName("textToSpeech")[0].style.display = "none";
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
    document.querySelectorAll(".postedVideo").forEach(function(element) {
        element.pause();
    });
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
        if (mode == "photo") { imgToPost = source; typeOfPost = 1; }
        else { videoToPost = source; typeOfPost = 0;}
    }
}


/*-----------------------------------------------------------------------------------
Post img/Video
-----------------------------------------------------------------------------------*/
function post(){
    var lastPost = document.getElementsByClassName("postItem")[0];
    var newPost = document.createElement("div");
    newPost.classList.add("postItem");
    
    if (typeOfPost == 1) 
        newPost.innerHTML = "<p class='postItemText darkmodeText'><img class='user' src='resources/user.png'> <b>You</b> posted</p><img class='postedImg' src=" + imgToPost + " onclick=" + "viewImg('" + imgToPost + "')" + "><br>";
    else if (typeOfPost == 0)
        newPost.innerHTML = "<p class='postItemText darkmodeText'><img class='user' src='resources/user.png'> <b>You</b> posted</p><Video class='postedVideo' src=" + videoToPost + " onclick=" + "viewVideo('" + videoToPost + "')" + "><br>";
    else if (typeOfPost == 2)
        newPost.innerHTML = "<p class='postItemText darkmodeText'><img class='user' src='resources/user.png'> <b>You</b> posted</p><img class='postedImg' src='resources/tecnico_location.png' onclick=" + "viewImg('resources/tecnico_location.png')" + "><br>";
    else
        newPost.innerHTML = "<p class='postItemText darkmodeText'><img class='user' src='resources/user.png'> <b>You</b> posted</p><p class='postItemText darkmodeText'>" + textToPost + "<br>";

    lastPost.insertAdjacentElement("beforebegin", newPost);
    if (nightmodeOn == 1) {
        document.querySelectorAll(".darkmodeText").forEach(function(element) {
            element.style.color = 'white';
        });
        document.getElementsByClassName("user")[0].src="resources/user_white.png";
    }
    disablePhotos();
    backButton();
    backButton();
    if (typeOfPost != 2) backButton();

    console.log(currentpage);
}


/*-----------------------------------------------------------------------------------
Open Share Location Screen
-----------------------------------------------------------------------------------*/
function openShareLocation() {
    document.getElementsByClassName("newPost")[0].style.display = "none";
    document.getElementsByClassName("locationShare")[0].style.display = "block";
    currentpage = "locationShare";
    typeOfPost = 2;
}

/*-----------------------------------------------------------------------------------
Open Text to Speech Screen
-----------------------------------------------------------------------------------*/
function openTextToSpeech() {
    document.getElementsByClassName("newPost")[0].style.display = "none";
    document.getElementsByClassName("textToSpeech")[0].style.display = "block";
    currentpage = "textToSpeech";
    typeOfPost = 2;
}

/*-----------------------------------------------------------------------------------
Open Voice Input Confirmation Screen
-----------------------------------------------------------------------------------*/
function openShowVoiceInput() {
    var text = Math.round(Math.random() * 2);
    document.getElementsByClassName("textToSpeech")[0].style.display = "none";
    document.getElementsByClassName("showVoiceInput")[0].style.display = "block";
    document.querySelectorAll(".predictedText").forEach(function(element) {
        element.innerHTML = predictedText[text];
        textToPost = predictedText[text];
    });
    currentpage = "showVoiceInput";
    typeOfPost = 3;
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
