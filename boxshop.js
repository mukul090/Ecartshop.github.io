var swiper = new Swiper(".home1", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});


var swiper = new Swiper(".home2", {
    loop: true,
    autoplay: {
        delay: 3000,
    }

});




var swiper = new Swiper(".swiper-deal", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var swiper = new Swiper(".brand-slide", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});