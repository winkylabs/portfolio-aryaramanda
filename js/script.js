/* ==========================================
RESPONSIVE NAVBAR
========================================== */

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    menu.classList.toggle("active");

});


/* ==========================================
AUTO CLOSE MENU
========================================== */

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

hamburger.classList.remove("active");

menu.classList.remove("active");

});

});


/* ==========================================
   PREMIUM TYPING ANIMATION
   Mengetik dan menghapus teks
========================================== */

const words = [
    "Web Developer",
    "UI/UX Designer",
    "Illustrator"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingElement.textContent =
            currentWord.substring(0,charIndex--);

    }else{

        typingElement.textContent =
            currentWord.substring(0,charIndex++);

    }

    let speed = 90;

    if(isDeleting){

        speed = 45;

    }

    if(!isDeleting && charIndex === currentWord.length + 1){

        isDeleting = true;

        speed = 1800;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();

/* ==========================================
   COUNTER ON VIEWPORT
========================================== */

const numbers =
document.querySelectorAll(".number");

const counterSection =
document.querySelector(".counter");

let counterPlayed = false;

function startCounter(){

    if(counterPlayed) return;

    const top =
    counterSection.getBoundingClientRect().top;

    if(top < window.innerHeight-100){

        counterPlayed=true;

        numbers.forEach(counter=>{

            const target=
            +counter.dataset.target;

            let count=0;

            const step=Math.ceil(target/80);

            const update=()=>{

                count+=step;

                if(count<target){

                    counter.innerText=count;

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=
                    target+"+";

                }

            };

            update();

        });

    }

}

window.addEventListener(
"scroll",
startCounter
);

startCounter();

/* ==========================================
   SKILL PROGRESS ANIMATION
========================================== */

const progressBars =
document.querySelectorAll(".progress-bar");

const skillSection =
document.querySelector(".skills");

let skillPlayed = false;

window.addEventListener("scroll",()=>{

    const top =
    skillSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 120 && !skillPlayed){

        progressBars.forEach(bar=>{

            bar.style.width =
            getComputedStyle(bar)
            .getPropertyValue("--progress");

        });

        skillPlayed = true;

    }

});

/* ==========================================
   PREMIUM SCROLL REVEAL
========================================== */

const revealItems = document.querySelectorAll(".reveal");

function revealAnimation(){

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealAnimation);

revealAnimation();

/* ==========================================
   STAGGER ANIMATION
========================================== */

const staggerGroups = [

    ".skills-grid",

    ".service-grid",

    ".project-grid",

    ".gallery-grid",

    ".counter"

];

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.2

});

staggerGroups.forEach(selector=>{

    const element=document.querySelector(selector);

    if(element){

        observer.observe(element);

    }

});

/* ==========================================
PROJECT FILTER
========================================== */

const filterButtons=document.querySelectorAll(".filter-btn");

const cards=document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

button.classList.add("active");

const filter=button.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else{

if(card.classList.contains(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

}

});

});

});

/* ==========================================
   CV MODAL
========================================== */

const openCv = document.getElementById("openCv");
const cvModal = document.getElementById("cvModal");
const closeCv = document.getElementById("closeCv");

if (openCv && cvModal && closeCv) {

    openCv.addEventListener("click",(e)=>{

        e.preventDefault();

        cvModal.classList.add("show");

    });

    closeCv.addEventListener("click",()=>{

        cvModal.classList.remove("show");

    });

    cvModal.addEventListener("click",(e)=>{

        if(e.target===cvModal){

            cvModal.classList.remove("show");

        }

    });

}

/* ==========================================
   CONTACT MODAL
========================================== */

const openContact = document.getElementById("openContact");
const contactModal = document.getElementById("contactModal");
const closeContact = document.getElementById("closeContact");

openContact.addEventListener("click",(e)=>{

    e.preventDefault();

    contactModal.classList.add("show");

});

closeContact.addEventListener("click",()=>{

    contactModal.classList.remove("show");

});

contactModal.addEventListener("click",(e)=>{

    if(e.target===contactModal){

        contactModal.classList.remove("show");

    }

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================= */

const scrollTopBtn = document.getElementById("scrollTop");
const heroSection = document.getElementById("home");

function updateScrollTopVisibility() {
  if (!scrollTopBtn || !heroSection) return;

  const heroBottom = heroSection.getBoundingClientRect().bottom;
  const hasPassedHero = heroBottom < window.innerHeight * 0.7;

  if (hasPassedHero) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
}

window.addEventListener("scroll", updateScrollTopVisibility);
window.addEventListener("resize", updateScrollTopVisibility);
updateScrollTopVisibility();

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});