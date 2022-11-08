// Search

const icon = document.querySelector('.icon');
const search = document.querySelector('.wrap-search');
icon.onclick = function () {
    search.classList.toggle('active')
}

// account đăng nhập và đăng ký

// bat login
document.getElementById("popup__account").addEventListener("click", function () {
    document.querySelector("#form__dangnhap").style.display = "block";
})

// tat login
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector("#form__dangnhap").style.display = "none";
})

// bat register va tat login
document.getElementById("popup__account-register").addEventListener("click", function () {
    document.querySelector("#form__dangky").style.display = "block";
    document.querySelector("#form__dangnhap").style.display = "none";
})

// tat register
document.querySelector(".close-register").addEventListener("click", function () {
    document.querySelector("#form__dangky").style.display = "none";
})

// bat login va tat register
document.getElementById("popup__account-login").addEventListener("click", function () {
    document.querySelector("#form__dangnhap").style.display = "block";
    document.querySelector("#form__dangky").style.display = "none";
})
//slider 

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
        autoplay: true,
        autoplaySpeed: 2000,
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
            var productImg = product.querySelector(".product-img").src
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
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".product-name")
        // console.log(productT)
        if (productT[i].innerHTML == productName)
            alert("Sản phẩm của bạn đã có trong giỏ hàng")

    }
    var trcontent =
        `
        <tr>
        <td style="display: flex; align-items: center;"><img style="width: 70px; margin-right: 12px"
            src="`+ productImg + `" alt="ghbaby1"><span class="product-name">` + productName + `</span></td>
        <td>
        <p><span class="prices">`+ productPrice + `</span><sup>đ</sup></p>
        </td>
        <td><input class="inputvalue" style="width: 50px; outline: none;" type="number" value="1" min="1"></td>
        <td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td>
        </tr>
        `
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
    delteCart()
}


// ------------ total price ----------------

function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalA = 0
    var totalC = 0
    // console.log(cartItem.length)
    for (var i = 0; i < cartItem.length; i++) {
        // console.log(i)
        var inputValue = cartItem[i].querySelector(".inputvalue").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        // console.log(productPrice)
        totalA = inputValue * productPrice * 1000;
        totalC = totalC + totalA
        // console.log(totalC)
        // totalD = totalC.toLocaleString('de-DE')
    }

    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    // cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputChange()
    // console.log(cartTotalA)
}

// -------------------- delete card --------------------t

function delteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
            // console.log(cartItemR)
        })

    }
}

function inputChange() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector(".inputvalue")
        inputValue.addEventListener("change", function () {
            carttotal()
        })
    }
}

// show hide list cart
const cartBtn = document.querySelector(".close-cart")
const cartShow = document.querySelector(".fa-cart-shopping")

cartShow.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".cart").style.right = "0"
})

cartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".cart").style.right = "-100%"
})


// product detail
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg() {
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}



/////////////////////////////


$(document).ready(function () {
    var slider = $("#slider");
    var thumb = $("#thumb");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
    slider.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200
    }).on('changed.owl.carousel', syncPosition);
    thumb
        .on('initialized.owl.carousel', function () {
            thumb.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            item: 4,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage,
            navText: ['<svg width="18px" height="18px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="25px" height="25px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        thumb
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumb.find('.owl-item.active').length - 1;
        var start = thumb.find('.owl-item.active').first().index();
        var end = thumb.find('.owl-item.active').last().index();
        if (current > end) {
            thumb.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            thumb.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            slider.data('owl.carousel').to(number, 100, true);
        }
    }
    thumb.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        slider.data('owl.carousel').to(number, 300, true);
    });


    $(".qtyminus").on("click", function () {
        var now = $(".qty").val();
        if ($.isNumeric(now)) {
            if (parseInt(now) - 1 > 0) { now--; }
            $(".qty").val(now);
        }
    })
    $(".qtyplus").on("click", function () {
        var now = $(".qty").val();
        if ($.isNumeric(now)) {
            $(".qty").val(parseInt(now) + 1);
        }
    });
});
