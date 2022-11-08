$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    $("#four-col-jq").on("click", function () {
        alert("click vào ra 4 cột");
        // $(".setion-listing").addClass( "four-listing" );
        $(".setion-listing").removeClass("two-listing");
    })

    $("#two-col-jq").on("click", function () {
        alert("click vào ra 2 cột");
        $(".setion-listing").removeClass("four-listing");
        $(".setion-listing").addClass("two-listing");
    })

    // Render List Product
    if (document.querySelector(`#list-product--js`)) {
        document.querySelector(`#list-product--js`).innerHTML = babyProduct.map((value, key) =>
            // console.log(value, "value");
            // console.log(key, "key")
            `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-item">
                        <a href=""><img class="product-img" src=${value.src} /></a>
                        <div class="product-name">${value.title}</div>
                        <div class="product-price">
                            <div class="old-price">${value.oldPrice}</div>
                            <div class="actual-price">${value.actualPrice}</div>
                        </div>
                        <button class="add-to-cart btn">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>`
        ).join('');
    }


    // Colletion Product
    if (document.querySelector(`#collection-product--js`)) {
        document.querySelector(`#collection-product--js`).innerHTML = collectionProduct.map((value, key) =>
            // console.log(value, "value");
            // console.log(key, "key")
            `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-item">
                        <a href=""><img class="product-img" src=${value.src} /></a>
                        <div class="product-name">${value.title}</div>
                        <div class="product-price">
                            <div class="old-price">${value.oldPrice}</div>
                            <div class="actual-price">${value.actualPrice}</div>
                        </div>
                        <button class="add-to-cart btn">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>`
        ).join('');
    }


    // New Product
    if (document.querySelector(`#new-product--js`)) {
        document.querySelector(`#new-product--js`).innerHTML = newProduct.map((value, key) =>
            // console.log(value, "value");
            // console.log(key, "key")
            `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-item">
                        <a href=""><img class="product-img" src=${value.src} /></a>
                        <div class="product-name">${value.title}</div>
                        <div class="product-price">
                            <div class="old-price">${value.oldPrice}</div>
                            <div class="actual-price">${value.actualPrice}</div>
                        </div>
                        <button class="add-to-cart btn">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>`
        ).join('');
    }


    // women Product
    if (document.querySelector(`#women-product--js`)) {
        document.querySelector(`#women-product--js`).innerHTML = womenProduct.map((value, key) =>
            // console.log(value, "value");
            // console.log(key, "key")
            `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-item">
                        <a href=""><img class="product-img" src=${value.src} /></a>
                        <div class="product-name">${value.title}</div>
                        <div class="product-price">
                            <div class="old-price">${value.oldPrice}</div>
                            <div class="actual-price">${value.actualPrice}</div>
                            </div>
                        <button class="add-to-cart btn">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>`
        ).join('');
    }


    // men Product
    if (document.querySelector(`#men-product--js`)) {
        document.querySelector(`#men-product--js`).innerHTML = menProduct.map((value, key) =>
            // console.log(value, "value");
            // console.log(key, "key")
            `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card-wrapper">
                    <div class="card-item">
                        <a href=""><img class="product-img" src=${value.src} /></a>
                        <div class="product-name">${value.title}</div>
                        <div class="product-price">
                            <div class="old-price">${value.oldPrice}</div>
                            <div class="actual-price">${value.actualPrice}</div>
                        </div>
                        <button class="add-to-cart btn">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>`
        ).join('');
    }


    // men Product
    if (document.querySelector(`#jacket-product--js`)) {
        document.querySelector(`#jacket-product--js`).innerHTML = jacketProduct.map((value, key) =>
            // console.log(value, "value");
            // console.log(key, "key")
            `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <div class="card-item">
          <a href=""><img class="product-img" src=${value.src} /></a>
          <div class="product-name">${value.title}</div>
          <div class="product-price">
              <div class="old-price">${value.oldPrice}</div>
              <div class="actual-price">${value.actualPrice}</div>
          </div>
          <button class="add-to-cart btn">Thêm vào giỏ hàng</button>
          </div>
      </div>
      `
        ).join('');
    }



});

