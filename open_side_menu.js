document.addEventListener("DOMContentLoaded", function() {
    const toggleNavButton = document.getElementById("toggleNavButton");
    const closeNavButton = document.getElementById("closeNavButton");
    const navBar = document.getElementById("navBar");

    toggleNavButton.addEventListener("click", function() {
        navBar.classList.toggle("open");
    });

    closeNavButton.addEventListener("click", function() {
        closeNavBar()
    });
});

function closeNavBar(){
    navBar.classList.remove("open");
}