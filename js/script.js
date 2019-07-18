var button = document.getElementsByClassName("showHide")[0];
var navigation = document.getElementsByClassName("navigation-menu")[0];
button.addEventListener("click",function(){
    if(navigation.style.display == "none"){
        navigation.style.display = "block";
    }else{
        navigation.style.display = "none";
    }
});

var mediaCondition = window.matchMedia("(min-width: 1024px)")

function navigationMenuDesktop(mediaCondition){
    if(mediaCondition.matches){
        navigation.style.display = "block";
    }else{
        navigation.style.display = "none";
    }
}

navigationMenuDesktop(mediaCondition)
mediaCondition.addListener(navigationMenuDesktop);