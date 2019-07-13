var button = document.getElementsByClassName("navigation-menu");
button.style,display = "block";
function showHide(){
    if (button[0].style.display != "none"){
        button[0].style.display = "none";
    }else{
        button[0].style.display = "block";
    }
}