

document.addEventListener("DOMContentLoaded", function(e){
    scroll_move();
    // scroll_move_header();
    banner();
    rightMenuSlide();
    ham_btn();
    menu_yogurt();
    // menu_dessert(); 디저트 메뉴 슬라이더 추가시 주석 풀기
    review1();
    review2();
    b_menu_hide();
    b_menu_toggle();
    b_menu_scroll_top();
;})



const scroll_move = () => {
    //scroll move 
    $(".scroll_move").click(function(e){  

        e.preventDefault();       
        
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 300);
    });
}
const scroll_move_header = () => {
        $(".scroll_move").click(function(e){  
        var header_height = $('header').outerHeight(true);
        e.preventDefault();       
        $('html,body').animate({scrollTop:$(this.hash).offset().top - header_height}, 1000);
    });
}

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
        breakpoints: {
            1280: {
                spaceBetween: 20,
            },
            500: {
            },
        }
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
        breakpoints: {
            1280: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },

        }
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
        breakpoints: {
            1280: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
        }

        });
        
}
const b_menu_hide = () => {
        window.addEventListener("scroll", function () {
            
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const fixedForm = document.querySelector(".b_menu_sec");

    if (scrollTop + windowHeight >= documentHeight - 100) {
        fixedForm.classList.add("hide"); // 스크롤 끝 → 숨김
    } 
    });
}

const b_menu_toggle = () => {
    $('.open_btn').click(function(){
        $('.b_menu_sec').toggleClass('hide');
    })
}
const b_menu_scroll_top = () => {
   
     $("body").on("mousewheel", function (e) {
        var wheel = e.originalEvent.wheelDelta;
        if (wheel > 0) {
            $('.b_menu_sec').removeClass("hide");
        } 
    });  
}

// 윈도우가 리사이즈 될때 반응형 !
$(window).resize(function() {
	if($(window).width() < 900) {
	    // window 크기가 900보다 작을때
	} else {
	    // window 크기가 900보다 클때
        $('.sub_menu').removeClass('side')
        $('.sub_menu_dim').removeClass('side')
	}
})
