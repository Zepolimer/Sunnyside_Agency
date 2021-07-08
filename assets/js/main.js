let menuNav = document.querySelector(".menuWrapper");
let burgerBtn = document.querySelector(".burgerMenu");

burgerBtn.addEventListener('click', () => {
    if(menuNav.style.display==="flex") {
        menuNav.style.display="none";
    } else {
        menuNav.style.display="flex";
    }
})