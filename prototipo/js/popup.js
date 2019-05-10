window.onclick = function(event) {
    var post = document.getElementById("viewPost");
    var confirmation = document.getElementById("confirmationPopup");
    var chat = document.getElementById("personPopup");

    if (event.target == filterpopup) {
        filterpopup.style.display = "none";
        currentpage = "news";
    }

    else if (event.target == post) {
        post.style.display = "none";
        document.getElementById("viewVideoLarge").pause();
        document.querySelectorAll(".postedVideo").forEach(function(element) {
            element.play();
        });
        currentpage = "posts";
    }

    else if (event.target == confirmation) {
        confirmation.style.display = "none";
        currentpage = "selectPost";
    }
    else if (event.target == chat) {
        chat.style.display = "none";
        currentpage = "chat";
    }
}