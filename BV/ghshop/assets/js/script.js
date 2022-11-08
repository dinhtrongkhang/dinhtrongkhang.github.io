$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        stagePadding: 200,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});