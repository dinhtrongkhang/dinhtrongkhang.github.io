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
    button.addEventListener("click", function () {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            // console.log(product)
            var productImg = product.querySelector("img").src
            // console.log(productImg)
            var productName = product.querySelector(".product-name").innerText;
            // console.log(productName)
            var productPrice = product.querySelector(".actual-price").innerText;
            // console.log(productImg, productName, productPrice)

            addcart(productImg, productName, productPrice)
        }
    })
})

function addcart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr")
    var trcontent =
        `<tr>
        <td style="display: flex; align-items: center;"><img style="width: 70px; margin-right: 12px"
            src="`+ productImg + `" alt="ghbaby1">` + productName + `</td>
        <td>
        <p><span >`+ productPrice + `</span><sup>đ</sup></p>
        </td>
        <td><input class="inputvalue" style="width: 30px; outline: none;" type="number" value="1" min="1"></td>
        <td style="cursor: pointer;">Xóa</td>
        </tr>`
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
}


// ------------ total price ----------------

function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    // console.log(cartItem.length)
    for (var i = 0; i < cartItem.length; i++) {
        // console.log(i)
        var inputValue = cartItem[i].querySelector(".inputvalue").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector("span").innerHTML
        // console.log(productPrice)
        totalA = inputValue * productPrice * 1000;
        totalC = totalC + totalA
        // console.log(totalC)
        totalD = totalC.toLocaleString('de-DE')
    }

    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalD

    console.log(cartTotalA)
}