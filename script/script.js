

document.addEventListener("DOMContentLoaded", function(e){
    banner();
    rightMenuSlide();
    ham_btn();
    menu_yogurt();
    // menu_dessert(); 디저트 메뉴 슬라이더 추가시 주석 풀기
    review1();
    review2();
    b_menu_hide();
    b_menu_toggle();
;})

const banner = () => {
    var swiper = new Swiper(".banner_swiper", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 2000,
        loopedSlides: 10,
        spaceBetween: 40,
        allowTouchMove: false,
    });
}

const rightMenuSlide =() => {
    $('.ham_btn').click(function(){
        $('.sub_menu').toggleClass('side')
        $('.sub_menu_dim').toggleClass('side')
        $(this).toggleClass('active')
        
    })
    $('.sub_menu_dim').click(function(){
        $('.sub_menu').toggleClass('side')
        $('.sub_menu_dim').toggleClass('side')
        $('.ham_btn').toggleClass('active').toggleClass('on')
    })
}

const ham_btn = () => {
    $('.ham_btn').click(function(){
        $(this).toggleClass('on');
    })
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
const b_menu_hide = () => {
        window.addEventListener("scroll", function () {
            
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const fixedForm = document.querySelector(".b_menu_sec");

    if (scrollTop + windowHeight >= documentHeight - 1) {
        fixedForm.classList.add("hide"); // 스크롤 끝 → 숨김
    } 
    });
}

const b_menu_toggle = () => {
    $('.open_btn').click(function(){
        $('.b_menu_sec').toggleClass('hide');
    })
}

