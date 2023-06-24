const goTopBtn = document.querySelector(".scroll-up");

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);

function trackScroll() {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        goTopBtn.classList.add("scroll-up-show");
    } else {
       goTopBtn.classList.remove("scroll-up-show"); 
    }
}

function goTop() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}