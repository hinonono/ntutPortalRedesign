var hamburger = document.querySelector(".hamburger");
var sidebar = document.querySelector(".sidebar");
var help = document.querySelector("#help");
var topnavHelp = document.querySelector("#topnav-help");
var profile = document.querySelector("#profile");
var topnavProfile = document.querySelector("#topnav-profile");

// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    sidebar.classList.toggle("show-sidebar");
});


help.addEventListener("click", function() {
    // Do something else, like open/close menu
    topnavHelp.classList.toggle("show-topnav-box");
});

profile.addEventListener("click", function() {
    // Do something else, like open/close menu
    topnavProfile.classList.toggle("show-topnav-box");
});
