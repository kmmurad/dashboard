const Menubtn = document.querySelector("#menu-btn");
const sidemenu = document.querySelector("#aside");
const closebtn = document.querySelector("#close");


Menubtn.addEventListener("click", () => {
    sidemenu.style.display = "block";
});

closebtn.addEventListener("click", () => {
    sidemenu.style.display = "none";
});




const themetoggler = document.querySelector("#theme-toggler");
const lightIcon = document.querySelector("#light-icon");
const darkIcon = document.querySelector("#dark-icon");

themetoggler.addEventListener("click", () => {
    
    document.body.classList.toggle('dark-theme-variables');

    
    if (document.body.classList.contains('dark-theme-variables')) {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline-block';
    } else {
        lightIcon.style.display = 'inline-block';
        darkIcon.style.display = 'none';
    }
});






