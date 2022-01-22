const navspace = document.querySelector('nav');
const dockButton = document.querySelector("#dockbut");
const navListItem = document.querySelector("nav li");
console.log(navspace.offsetWidth);
var navBarOpened = "yes";
document.getElementById("dockbut").addEventListener("click", function (params) {
    if (navBarOpened == "no") {
        navspace.style = "width : 11vw; background-color:transparent;";
        dockButton.style = "left:0;height:36vh;";
        navBarOpened = "yes";
        for (a of document.querySelectorAll("nav hell")) {
            a.style = "display:none;";
        }
        // for (a of document.querySelectorAll("nav span")) {
        //     a.style = "right:0;";
        // }
    }
    else if (navBarOpened == "yes") {
        navspace.style = "width : 93vw; background-color:rgb(0, 252, 0);";
        dockButton.style = "left:90vw;height:100vh;";
        navBarOpened = "no";
        for (a of document.querySelectorAll("nav hell")) {
            a.style = "display:inline;";
        }
        // for (a of document.querySelectorAll("nav span")) {
        //     a.style = "right:50%;";
        // }
    }
});