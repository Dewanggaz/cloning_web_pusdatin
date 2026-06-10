// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// =========================
// STICKY NAVBAR EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.padding = "0";
        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow =
        "0 2px 15px rgba(0,0,0,.08)";
    }

});

// =========================
// HERO SLIDER
// =========================

const hero = document.querySelector(".hero");

const indicators =
document.querySelectorAll(".slider-indicator span");

const slides = [

    "assets/hero1.jpg",

    "assets/hero2.jpg",

    "assets/hero3.jpg"

];

let currentSlide = 0;

function changeHeroSlide(){

    hero.style.backgroundImage =
    `url(${slides[currentSlide]})`;

    indicators.forEach(item =>
        item.classList.remove("active")
    );

    indicators[currentSlide]
        .classList.add("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
}

changeHeroSlide();

setInterval(changeHeroSlide, 5000);

// =========================
// COUNTER
// =========================

const counters =
document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
        +counter.dataset.target;

        const speed = target / 200;

        const updateCounter = () => {

            const count =
            +counter.innerText.replace(/,/g,'');

            if(count < target){

                counter.innerText =
                Math.ceil(count + speed)
                .toLocaleString();

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText =
                target.toLocaleString();

            }

        };

        updateCounter();

    });

};

startCounter();

// =========================
// SCROLL REVEAL
// =========================

const revealElements =
document.querySelectorAll(
".service-card,.stat-card,.news-card,.about-grid,.quick-card"
);

function revealOnScroll(){

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// =========================
// BACK TO TOP
// =========================

const scrollTopBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollTopBtn.style.display =
        "block";

    }else{

        scrollTopBtn.style.display =
        "none";
    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================
// DYNAMIC NEWS
// =========================

const newsContainer =
document.getElementById("newsContainer");

const newsData = [

{
image:"assets/news1.jpg",

title:"Transformasi Digital Pendidikan",

date:"10 Juni 2026",

desc:"Peningkatan layanan digital pendidikan nasional."
},

{
image:"assets/news2.jpg",

title:"Portal Data Pendidikan",

date:"08 Juni 2026",

desc:"Data pendidikan kini lebih terbuka dan terintegrasi."
},

{
image:"assets/news3.jpg",

title:"Keamanan Siber EduCSIRT",

date:"05 Juni 2026",

desc:"Penguatan keamanan sistem pendidikan digital."
}

];

function loadNews(){

    let html = "";

    newsData.forEach(news => {

        html += `

        <div class="news-card">

            <img
                src="${news.image}"
                alt="${news.title}"
            >

            <div class="news-content">

                <small>
                    ${news.date}
                </small>

                <h3>
                    ${news.title}
                </h3>

                <p>
                    ${news.desc}
                </p>

            </div>

        </div>

        `;

    });

    newsContainer.innerHTML = html;

}

loadNews();

// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-menu a"
);

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
        link.getAttribute("href");

        if(href === `#${current}`){

            link.classList.add("active");

        }

    });

});

// =========================
// PRELOADER
// =========================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// =========================
// PARALLAX HERO
// =========================

window.addEventListener("scroll",()=>{

    const offset =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    offset * 0.4 + "px";

});

console.log(newsContainer);
console.log(newsData);