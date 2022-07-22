const slides = document.getElementsByClassName("slide");

const anim = document.querySelector("#slide-container");

const images = ["/images/VolumeCanyon1080Web.jpg"
                , "/images/VolumePetals1080Web.jpg"
                , "/images/VolumeTest1080Web.jpg"];

let bgIndex = 1;
let slideIndex = 1;

anim.onanimationiteration = () => {
    changeBG();
    changeSlide();
};

function changeBG() {
    document.body.style.backgroundImage = "url(" + images[bgIndex] + ")";

    bgIndex++;

    if (bgIndex > images.length - 1) {
        bgIndex = 0;
    }
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slides.length - slideIndex].style.display = "flex";
}