$(document).ready(function () {
    $(".banner-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                },
            },
        ],
        // autoplay: true,
        // autoplaySpeed: 1000,
    });

    $(".slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        // dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                },
            },
        ],
        // autoplay: true,
        // autoplaySpeed: 1000,
    });
});


// add to cart
const btn = document.querySelectorAll(".add-to-cart")
// console.log(btn)
btn.forEach(function (button, index) {
    // console.log(button, index)
    button.addEventListener("click", function(){{
        var btnItem = event.target
        var product = btnItem.parentElement
        // console.log(product)
        var productImg = product.querySelector("img").src
        // console.log(productImg)
        var productName = product.querySelector(".product-name").innerText
        // console.log(productName)
        var productPrice = product.querySelector(".actual-price").innerText
        console.log(productPrice)
    }})
})