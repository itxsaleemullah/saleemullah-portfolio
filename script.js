/*==========================================================
    1. MOBILE MENU
==========================================================*/

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.onclick = () => {

        /* Open / close mobile navigation */
        navbar.classList.toggle("active");

        /* Change hamburger icon to X */
        const icon = menuIcon.querySelector("i");

        if (icon) {
            icon.classList.toggle("bx-x");
        }

    };

}


/*==========================================================
    2. TYPING ANIMATION
==========================================================*/

const typedElement = document.querySelector(".multiple-text");

if (typedElement) {

    const typed = new Typed(".multiple-text", {

        strings: [
            "Data Analyst",
            "MERN Stack Developer",
            "Big Data Engineer"
        ],

        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1200,

        loop: true

    });

}


/*==========================================================
    3. SELECT SECTIONS AND NAVIGATION LINKS
==========================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(
    ".navbar a"
);


/*==========================================================
    4. HEADER
==========================================================*/

const header = document.querySelector(".header");


/*==========================================================
    5. SCROLL EVENT
==========================================================*/

window.addEventListener("scroll", () => {


    /*------------------------------------------------------
        CLOSE MOBILE MENU WHEN USER SCROLLS
    ------------------------------------------------------*/

    if (navbar) {
        navbar.classList.remove("active");
    }


    /* Change mobile menu icon back to hamburger */
    if (menuIcon) {

        const icon = menuIcon.querySelector("i");

        if (icon) {
            icon.classList.remove("bx-x");
        }

    }


    /*------------------------------------------------------
        STICKY HEADER
    ------------------------------------------------------*/

    if (header) {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }


    /*------------------------------------------------------
        ACTIVE NAVIGATION LINK
    ------------------------------------------------------*/

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = sectionId;

        }

    });


    /*------------------------------------------------------
        REMOVE ACTIVE CLASS FROM ALL NAV LINKS
    ------------------------------------------------------*/

    navLinks.forEach(link => {

        link.classList.remove("active");

    });


    /*------------------------------------------------------
        ADD ACTIVE CLASS ONLY TO CURRENT SECTION LINK
    ------------------------------------------------------*/

    if (currentSection) {

        const activeLink = document.querySelector(
            '.navbar a[href="#' + currentSection + '"]'
        );


        if (activeLink) {

            activeLink.classList.add("active");

        }

    }

});


/*==========================================================
    6. CLOSE MOBILE MENU AFTER CLICKING A NAV LINK
==========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }


        if (menuIcon) {

            const icon = menuIcon.querySelector("i");

            if (icon) {
                icon.classList.remove("bx-x");
            }

        }

    });

});


/*==========================================================
    7. SCROLL REVEAL ANIMATION
==========================================================*/

if (typeof ScrollReveal !== "undefined") {

    ScrollReveal({

        reset: false,

        distance: "80px",

        duration: 2000,

        delay: 150

    });


    /*------------------------------------------------------
        TOP ANIMATION
    ------------------------------------------------------*/

    ScrollReveal().reveal(
        ".home-content, .heading",
        {
            origin: "top"
        }
    );


    /*------------------------------------------------------
        BOTTOM ANIMATION
    ------------------------------------------------------*/

    ScrollReveal().reveal(
        ".home-img, .services-container, .projects-container, .contact form",
        {
            origin: "bottom"
        }
    );


    /*------------------------------------------------------
        LEFT ANIMATION
    ------------------------------------------------------*/

    ScrollReveal().reveal(
        ".home-content h1, .about-img",
        {
            origin: "left"
        }
    );


    /*------------------------------------------------------
        RIGHT ANIMATION
    ------------------------------------------------------*/

    ScrollReveal().reveal(
        ".home-content p, .about-content, .skills-container, .contact-info",
        {
            origin: "right"
        }
    );

}