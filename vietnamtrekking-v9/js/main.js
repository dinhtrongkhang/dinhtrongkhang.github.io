//toggle

$(function() {
    $(".header__menu-toggle").on("click", function() {
        if ($(".header__menu-item").hasClass("active")) {
            $(".header__menu-item").removeClass("active");
        } else {
            $(".header__menu-item").addClass("active");
        }
    });
});


// account đăng nhập và đăng ký

function myFunction() {
    var x = document.getElementById("form-1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


// slide galery

$('.tour__tourhot').slick({
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

$('.tour__dulichnuocngoai').slick({
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


// tour chi tiet

$('.tour__chitiet-box-img').slick({
    speed: 1000,
    prevArrow: '<span class="prev-arrow-nuocngoai slide-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow-nuocngoai slide-arrow"><i class="fas fa-angle-right"></i></span>',
    infinite: false,
    speed: 300,
    slidesToShow: 1,
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


// ----------- thông tin đặt tour --------------

var rindex,
    table = document.getElementById("danhsachhanhkhach");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        stt = document.getElementById("stt").value,
        name = document.getElementById("name").value,
        date = document.getElementById("date").value,
        money = document.getElementById("money").value;
    if (stt === "") {
        alert("stt Connot Be Empty");
        isEmpty = true;
    }
    if (name === "") {
        alert("Name Connot Be Empty");
        isEmpty = true;
    }
    if (date === "") {
        alert("Date Connot Be Empty");
        isEmpty = true;

    } else if (money === "") {
        alert("Money Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell0 = newRow.insertCell(0),
            cell1 = newRow.insertCell(1),
            cell2 = newRow.insertCell(2),
            cell3 = newRow.insertCell(3),
            stt = document.getElementById("stt").value,
            name = document.getElementById("name").value,
            date = document.getElementById("date").value,
            money = document.getElementById("money").value;

        cell0.innerHTML = stt;
        cell1.innerHTML = name;
        cell2.innerHTML = date;
        cell3.innerHTML = money;
        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

// display selected row data into input text
function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("stt").value = this.cells[0].innerHTML;
            document.getElementById("name").value = this.cells[1].innerHTML;
            document.getElementById("date").value = this.cells[2].innerHTML;
            document.getElementById("money").value = this.cells[3].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
    var stt = document.getElementById("stt").value,
        name = document.getElementById("name").value,
        date = document.getElementById("date").value,
        money = document.getElementById("money").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = stt;
        table.rows[rIndex].cells[1].innerHTML = name;
        table.rows[rIndex].cells[2].innerHTML = date;
        table.rows[rIndex].cells[3].innerHTML = money;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("stt").value = "";
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("money").value = "";
}