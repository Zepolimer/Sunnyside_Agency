let menuNav = document.querySelector(".menuWrapper");
let burgerBtn = document.querySelector(".burgerMenu");

burgerBtn.addEventListener('click', () => {
    if(menuNav.style.display==="none") {
        menuNav.style.display="flex";
    } else {
        menuNav.style.display="none";
    }
})