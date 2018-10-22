function dropDown(){
    document.getElementById("menu-dropdown").classList.toggle("show");
    var menu = document.getElementById("principalHeader-menu");
    menu.style.backgroundColor !== "skyblue" ?  menu.style.backgroundColor = "skyblue" : menu.style.backgroundColor = "white";
}

window.onclick = function(event){
    if(!event.target.classList.contains('menu-option-dropdown') && !event.target.classList.contains('dropdown-content')){
        var dropdown = document.getElementsByClassName("dropdown-content");
        if(dropdown[0].classList.contains('show')){
            // dropdown[0].classList.remove('show');
        }
        }
}