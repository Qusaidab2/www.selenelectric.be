/* =========================================================
   SELEN ELECTRIC
   JAVASCRIPT
========================================================= */


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navigation =
    document.getElementById("navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener(
        "click",
        function () {

            navigation.classList.toggle("open");

        }
    );


    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove("open");

            }
        );

    });

}


/* =========================================================
   GALLERY LIGHTBOX
========================================================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


if (
    galleryItems.length &&
    lightbox &&
    lightboxImage
) {

    galleryItems.forEach(function (item) {

        item.addEventListener(
            "click",
            function () {

                const image =
                    item.getAttribute("data-image");

                lightboxImage.src = image;

                lightbox.classList.add("open");

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    function closeLightbox() {

        lightbox.classList.remove("open");

        document.body.style.overflow =
            "";

    }


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {

                closeLightbox();

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("open")
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Merci pour votre message ! " +
                "Le formulaire doit encore être connecté " +
                "à un service d'envoi d'e-mails."
            );

        }
    );

}
