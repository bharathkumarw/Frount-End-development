
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const slideoutMenu = document.getElementById("slideoutmenu");
    const button = document.getElementById("button");

    menu.addEventListener("click", function () {
        if (slideoutMenu.style.left === "-250px") {
            slideoutMenu.style.left = "0";
        } else {
            slideoutMenu.style.left = "-250px";
        }
    });
    button.addEventListener("click", function () {
    
        window.location.href = "login.html";
    });
});





 