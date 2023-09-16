//Typing effect :
document.addEventListener("DOMContentLoaded", function () {
    var app = document.querySelector('#typing');
    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
    });

    typewriter.deleteAll()
        .typeString('Software Engineer')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Creative')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Passionate')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Curious')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Sociable')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Enthusiastic')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Eager to Learn')
        .pauseFor(2500)
        .deleteAll()
        .start();
});


//Sliders :
const leftSlider = document.querySelector('#work #slideLeft');
const rightSlider = document.querySelector('#work #slideRight');
const slides = document.querySelector('#work #slides');

var nbSlides = slides.querySelectorAll('li').length;
var totalWidth = document.querySelector('#work #slider').offsetWidth
var selectedSlide = 0;

rightSlider.addEventListener('click', () => {
    selectedSlide++
    if (selectedSlide >= nbSlides) {
        selectedSlide = 0;
    }
    var translation = -selectedSlide * totalWidth
    slides.style.transform = `translateX(${translation}px)`;
    console.log(translation)
})

leftSlider.addEventListener('click', () => {
    selectedSlide--
    if (selectedSlide < 0) {
        selectedSlide = nbSlides - 1;
    }
    var translation = -selectedSlide * totalWidth
    slides.style.transform = `translateX(${translation}px)`;
})


const upSlider = document.querySelector('#about #slideUp');
const downSlider = document.querySelector('#about #slideDown');
const slides2 = document.querySelector('#about #slides2');

var nbSlides2 = slides2.querySelectorAll('li').length;
var totalWheight = document.querySelector('#about #slider2').offsetHeight;
var selectedSlide2 = 0;

upSlider.addEventListener('click', () => {
    selectedSlide2--
    if (selectedSlide2 < 0) {
        selectedSlide2 = nbSlides2 - 1;
    }
    var translation = -selectedSlide2 * totalWheight
    console.log(selectedSlide2 * totalWheight)
    slides2.style.transform = `translateY(${translation}px)`;

})

downSlider.addEventListener('click', () => {
    selectedSlide2++
    if (selectedSlide2 >= nbSlides2) {
        selectedSlide2 = 0;
    }
    console.log(selectedSlide2 * totalWheight)
    var translation = -selectedSlide2 * totalWheight
    slides2.style.transform = `translateY(${translation}px)`;
})

//Contact scroll :
const contactButton = document.querySelector('#contactButton');
const contactSection = document.querySelector("#contact");

contactButton.addEventListener('click', () => {
    contactSection.scrollIntoView({behavior: "smooth"});
});


//Quote animation : 
const quote = document.querySelector('#flip')
const quoteArray = ["Creation", "Discovery", "Freedom", "Innovation", "Adventure", "Passions", "Exploration", "Relationships"]
var i = 0

setInterval(function () {
    quote.classList.add("flip-horizontal-bottom");
    setTimeout(function () {
        quote.textContent = quoteArray[i];
        (i + 1 < quoteArray.length) ? i++ : i = 0;
    }, 100);
    setTimeout(function () {
        quote.classList.remove("flip-horizontal-bottom");
    }, 1000);

}, 3000);


//Copy adress mail :
const emailBouton = document.querySelector('#copyMail')
emailBouton.addEventListener('click', () => {
    const email = "mathis.corrio@gmail.com"
    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Mail copied ✔️")
        })
        .catch(() => {
            alert("❌ Error : impossible to interact with your clipboard ❌ \n Here my mail : 📧 mathis.corrio@gmail.com 📧")
        })
})


//Download résumé :
const resumeDownloadButton = document.querySelector("#résuméDownload")
resumeDownloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = "src/MathisCorrio.pdf";
    link.download = 'MathisCorrio.pdf';
    link.dispatchEvent(new MouseEvent('click'));
})

