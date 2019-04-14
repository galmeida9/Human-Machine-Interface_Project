var imgToPost;

function viewImg(img){
    if (mouseMovement < 3 && mouseMovement > -3) {
        document.getElementById("viewPost").style.display = "block";
        document.getElementById("viewImgLarge").style.display = "block";
        document.getElementById("viewVideoLarge").style.display = "none";
        document.getElementById("viewImgLarge").src = img;
        currentpage = "viewPost";
    }
}

function viewVideo(video){
    if (mouseMovement < 3 && mouseMovement > -3) {
        document.getElementById("viewPost").style.display = "block";
        document.getElementById("viewImgLarge").style.display = "none";
        document.getElementById("viewVideoLarge").style.display = "block";
        document.getElementById("viewVideoLarge").src = video;
        currentpage = "viewPost";
    }
}

function newPost(){
    document.getElementsByClassName("recentPosts")[0].style.display = "none";
    document.getElementsByClassName("newPost")[0].style.display = "block";
    currentpage = "newPost"
}

function selectIMG(){
    document.getElementsByClassName("newPost")[0].style.display = "none";
    document.getElementsByClassName("selectIMG")[0].style.display = "block";
    currentpage = "selectIMG";
}

function imgConfirmation(img){
    document.getElementById("confirmationPopup").style.display = "block";
    currentpage = "confirmationPopup";
    imgToPost = img;
}

function postImg(){
    var lastPost = document.getElementsByClassName("postItem")[0];
    var newPost = document.createElement("div");
    newPost.classList.add("postItem");
    newPost.innerHTML = "<p><img class='user' src='resources/user.png'> João posted</p><img class='postedImg' src=" + imgToPost + " onclick=" + "viewImg('" + imgToPost + "')" + "><br>";
    lastPost.insertAdjacentElement("beforebegin", newPost);
    backButton();
    backButton();
    backButton();
}