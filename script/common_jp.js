


document.addEventListener("DOMContentLoaded", function(e){
    animationOnHandler();
    headerScrollHandler();
    // bodyScroll();
    privacyUsePopup();
    privacyUsePopup2();
    header_scroll_move();
})
document.addEventListener("scroll", function(){
    animationOnHandler();
})


const privacyUsePopup = () => {
    $('.privacyPopupBtn').click(function(){
        $('#privacyPopup').addClass('active');
    })
    $('.usePopupBtn').click(function(){
        $('#usePopup').addClass('active');
    })
    $('.privacyPopup .contentWrap .titleBox .closeBtn').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup .contentWrap').click(function(e){
        e.stopPropagation()
    })
}
const privacyUsePopup2 = () => {
    $('.privacyPopupBtn2').click(function(){
        $('#privacyPopup').addClass('active');
    })
    $('.usePopupBtn').click(function(){
        $('#usePopup').addClass('active');
    })
    $('.privacyPopup .contentWrap .titleBox .closeBtn').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup .contentWrap').click(function(e){
        e.stopPropagation()
    })
}

const headerScrollHandler = () => {
    /* header */
    const header_main = document.querySelector('header');

    if(header_main){
        document.addEventListener("scroll", function(){
            let scroll_top = window.scrollY;
            if(scroll_top > 0){
                header_main.classList.add("on");
            }else{
                header_main.classList.remove("on");
            }
        })
    }
}
const header_scroll_move = () => {
    //scroll move 
    $(".scroll_move").click(function(e){  

        e.preventDefault();       
        
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
}
const animationOnHandler = () => {
    const countList = document.querySelectorAll('.ani');
    if (countList.length) {
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on');
                } else {
                    entry.target.classList.remove('on');
                }
            });
        }, {
            threshold: 0.2 // Adjust threshold as needed
        });
        
        // Observe each .ani element
        countList.forEach(element => observer.observe(element));
    }
}