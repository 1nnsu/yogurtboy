

document.addEventListener("DOMContentLoaded", function(e){
    banner();
    menu_yogurt();
    // menu_dessert(); 디저트 메뉴 슬라이더 추가시 주석 풀기
    review1();
    review2();
;})

const banner = () => {
    var swiper = new Swiper(".banner_swiper", {
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        speed: 5000,
        loopedSlides: 5,
        allowTouchMove: false,
    });
}


// 메뉴 슬라이드

const menu_yogurt = () => {
    var swiper = new Swiper(".yogurt_swiper", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".y_circle",
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            depth: 50,
            modifier: 1,
            slideShadows: false,
        },
        loopedSlides: 5
        });
}

const menu_dessert = () => {
    var swiper = new Swiper(".dessert_swiper", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".y_circle",
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            depth: 50,
            modifier: 1,
            slideShadows: false,
        },
        loopedSlides: 5
        });
}
// 리뷰 슬라이드

const review1 = () => {
    var swiper = new Swiper(".sec9_swiper1", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 4.5,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 4000,
        loopedSlides: 5,
        spaceBetween: 40,
        allowTouchMove: false,
        });
}

const review2 = () => {
    var swiper = new Swiper(".sec9_swiper2", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 4.5,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 4000,
        loopedSlides: 5,
        spaceBetween: 40,
        allowTouchMove: false,
        });
}

