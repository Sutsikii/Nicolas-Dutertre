// Menu Responsive
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


// typing animation
var typed = new Typed(".typing", {
    strings: ["Sutsiki","Développeur","Étudiant","Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
