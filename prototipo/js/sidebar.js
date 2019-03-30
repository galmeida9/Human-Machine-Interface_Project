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
  }
}

function openNews() {
    document.getElementsByClassName("newsscreen")[0].style.display = "block";
    document.getElementsByClassName("mainscreen")[0].style.display = "none";
    closeNav();
    currentpage = "news";
}