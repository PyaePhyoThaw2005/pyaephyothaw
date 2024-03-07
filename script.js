// toggle icon navar

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('close');
    navbar.classList.toggle('active');
};


// scroll section link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav-links a');

window.onscroll = () =>
{
    sections.forEach(sec => {
        let top = window.scroll;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });


// sticky navar
let header = document.querySelector( 'header' );
header.classList.add("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('<ion-icon name="close"></ion-icon>');
    navbar.classList.remove('active');

};
            

// scroll reveal
ScrollReveal({
    reset: true,
    distance:'100px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});


