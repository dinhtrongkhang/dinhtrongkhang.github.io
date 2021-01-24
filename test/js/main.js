//toggle

$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    });
});

// slide galery

$('.galery').slick({
    speed: 1000,
    prevArrow: '<span class="prev-arrow slide-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow slide-arrow"><i class="fas fa-angle-right"></i></span>',
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

// slide galery tour nuoc ngoai

$('.tournuocngoai').slick({
    speed: 1000,
    prevArrow: '<span class="prev-arrow-nuocngoai slide-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow-nuocngoai slide-arrow"><i class="fas fa-angle-right"></i></span>',
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});