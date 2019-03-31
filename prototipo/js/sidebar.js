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

function menuButton() {
    if (isOpen == 0) openNav();
    else closeNav();
}

function backButton() {
  if (isOpen == 1) closeNav();
  else {
      if (currentpage == "news") {
          document.getElementsByClassName("newsscreen")[0].style.display = "none";
          document.getElementsByClassName("mainscreen")[0].style.display = "block";
          closeNav();
          currentpage = "home";
      }
      else if (currentpage == "newsStories") {
        document.getElementsByClassName("newsStory")[0].style.display = "none";
        document.getElementsByClassName("news")[0].style.display = "block";
        currentpage = "news";
        el2.scrollLeft = 0;
        el2.scrollTop = 0;
        el.scrollLeft = 0;
        el.scrollTop = 0;
    }
    else if (currentpage == "newspopup") {
        document.getElementById("filterpopup").style.display = "none";
        document.getElementsByClassName("news")[0].style.display = "block";
        currentpage = "news";
    }
  }
}

function openNews() {
    document.getElementsByClassName("newsscreen")[0].style.display = "block";
    document.getElementsByClassName("mainscreen")[0].style.display = "none";
    document.getElementsByClassName("newsStory")[0].style.display = "none";
    document.getElementsByClassName("news")[0].style.display = "block";
    closeNav();
    currentpage = "news";
}