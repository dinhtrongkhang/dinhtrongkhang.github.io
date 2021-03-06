// account đăng nhập và đăng ký

// login

document.getElementById("popup__account").addEventListener("click", function() {
    document.querySelector("#form__dangnhap").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function() {
    document.querySelector("#form__dangnhap").style.display = "none";
})

// register

document.getElementById("popup__account-register").addEventListener("click", function() {
    document.querySelector("#form__dangky").style.display = "flex";
    document.querySelector("#form__dangnhap").style.display = "none";
})
document.querySelector(".close-register").addEventListener("click", function() {
    document.querySelector("#form__dangky").style.display = "none";
})
document.getElementById("popup__account-login").addEventListener("click", function() {
    document.querySelector("#form__dangnhap").style.display = "flex";
    document.querySelector("#form__dangky").style.display = "none";
})


// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// slide tour

$('.tour__slide').slick({
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

// tour chi tiet

$('.tour__chitiet-box-img').slick({
    dots: true,
    infinite: false,
    speed: 1000,
    prevArrow: '<span class="prev-arrow-tourchitiet slide-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow-tourchitiet slide-arrow"><i class="fas fa-angle-right"></i></span>',
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});


// thông tin đặt tour

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["birthday"] = document.getElementById("birthday").value;
    formData["money"] = document.getElementById("money").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.birthday;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.money;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Sửa</a>
                       <a onClick="onDelete(this)">Xóa</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("money").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("birthday").value = selectedRow.cells[1].innerHTML;
    document.getElementById("money").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.birthday;
    selectedRow.cells[2].innerHTML = formData.money;
}

function onDelete(td) {
    if (confirm('Bạn có chắc chắn muốn xóa ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

// ngay sinh và tien
$('#birthday').on('change', function() {
    const year = +$(this).val().slice(0, 4);

    if (year === 2021) {
        $('#money').val('0đ')
    } else if (year > 2015 && year <= 2020) {
        $('#money').val('5.000.000đ')
    } else {
        $('#money').val('10.000.000đ')
    }
})

// thanh toan
$('.thanhtoantour').click(function() {
    // An toan bo
    $('.thanhtoantour').children('.content').hide()

    // Hien cai dang duoc click
    $(this).children('.content').show();
})