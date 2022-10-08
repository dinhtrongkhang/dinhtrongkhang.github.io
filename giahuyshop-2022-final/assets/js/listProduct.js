$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 2000,
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
    })

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
    document.querySelector(`#list-product--js`).innerHTML = babyProduct.map((value, key) =>
        // console.log(value, "value");
        // console.log(key, "key")
        `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="box-item">
                <img class="product-img" src=${value.src} />
                <div class="product-title">${value.Title}</div>
                <div class="product-price">
                    <div class="actual-price">${value.ActualPrice}</div>
                    <div class="old-price">${value.OldPrice}</div>
                </div>
                <button class="add-to-cart btn">Add To Cart</button>
            </div>
            </div>
        `
    ).join('');

    // Colletion Product
    document.querySelector(`#collection-product--js`).innerHTML = collectionProduct.map((value, key) =>
        // console.log(value, "value");
        // console.log(key, "key")
        `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="box-item">
            <img class="product-img" src=${value.src} />
            <div class="product-title">${value.Title}</div>
            <div class="product-price">
                <div class="actual-price">${value.ActualPrice}</div>
                <div class="old-price">${value.OldPrice}</div>
            </div>
            <button class="add-to-cart btn">Add To Cart</button>
            </div>
            </div>
        `
    ).join('');

    // New Product
    document.querySelector(`#new-product--js`).innerHTML = newProduct.map((value, key) =>
        // console.log(value, "value");
        // console.log(key, "key")
        `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="box-item">
            <img class="product-img" src=${value.src} />
            <div class="product-title">${value.Title}</div>
            <div class="product-price">
                <div class="actual-price">${value.ActualPrice}</div>
                <div class="old-price">${value.OldPrice}</div>
            </div>
            <button class="add-to-cart btn">Add To Cart</button>
            </div>
            </div>
        `
    ).join('');

    // women Product
    document.querySelector(`#women-product--js`).innerHTML = womenProduct.map((value, key) =>
        // console.log(value, "value");
        // console.log(key, "key")
        `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="box-item">
            <img class="product-img" src=${value.src} />
            <div class="product-title">${value.Title}</div>
            <div class="product-price">
                <div class="actual-price">${value.ActualPrice}</div>
                <div class="old-price">${value.OldPrice}</div>
            </div>
            <button class="add-to-cart btn">Add To Cart</button>
            </div>
        </div>
        `
    ).join('');

      // men Product
      document.querySelector(`#men-product--js`).innerHTML = menProduct.map((value, key) =>
      // console.log(value, "value");
      // console.log(key, "key")
      `<div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <div class="box-item">
          <img class="product-img" src=${value.src} />
          <div class="product-title">${value.Title}</div>
          <div class="product-price">
              <div class="actual-price">${value.ActualPrice}</div>
              <div class="old-price">${value.OldPrice}</div>
          </div>
          <button class="add-to-cart btn">Add To Cart</button>
          </div>
      </div>
      `
  ).join('');

});

