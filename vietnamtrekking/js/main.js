// account đăng nhập và đăng ký

// bat login
document.getElementById("popup__account").addEventListener("click", function() {
    document.querySelector("#form__dangnhap").style.display = "block";
})

// tat login
document.querySelector(".close").addEventListener("click", function() {
    document.querySelector("#form__dangnhap").style.display = "none";
})

// register

// bat register va tat login
document.getElementById("popup__account-register").addEventListener("click", function() {
    document.querySelector("#form__dangky").style.display = "block";
    document.querySelector("#form__dangnhap").style.display = "none";
})

// tat register
document.querySelector(".close-register").addEventListener("click", function() {
    document.querySelector("#form__dangky").style.display = "none";
})

// bat login va tat register
document.getElementById("popup__account-login").addEventListener("click", function() {
    document.querySelector("#form__dangnhap").style.display = "block";
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
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        updateTotalPrice();
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["birthday"] = document.getElementById("birthday").value;
    formData["money"] = document.getElementById("money").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.birthday;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.money;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Sửa</a>
                       <a onClick="onDelete(this)">Xóa</a>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("money").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("birthday").value = selectedRow.cells[1].innerHTML;
    document.getElementById("money").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.birthday;
    selectedRow.cells[2].innerHTML = formData.money;
}

function onDelete(td) {
    if (confirm('Bạn có chắc chắn muốn xóa ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
        updateTotalPrice();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

// thong tin dat tour - ngay sinh và tien
$('#birthday').on('change', function() {
    const year = +$(this).val().slice(0, 4);

    if (year === 2021) {
        $('#money').val('0đ')
    } else if (year >= 2008 && year <= 2020) {
        $('#money').val('5.000.000đ')
    } else {
        $('#money').val('10.000.000đ')
    }
})

// thong tin dat tour - thanh toan
$('.thanhtoantour').click(function() {
    // An toan bo
    $('.thanhtoantour').children('.content').hide()

    // Hien cai dang duoc click
    $(this).children('.content').show();
})

// check thong tin dat tour

// tinh tong tien
function updateTotalPrice() {
    function formatSum(s) {
        return s
            .toString()
            .split("")
            .map((c, i, a) =>
                i < a.length - 1 && !((a.length - i - 1) % 3) ? c + "." : c
            )
            .join("");
    }
    let sum = 0;
    $("#employeeList tbody tr td:nth-child(3)").text(function(idx, txt) {
        sum += Number(txt.replaceAll(/[^0-9]/g, ""));
        return txt;
    });
    let sumTxt = sum ? formatSum(sum) + "đ" : "";
    $("#employeeList tfoot tr th:nth-child(2)").text(sumTxt);
}


// check dieu kien dat tour
function change_tour_btn() {
    let checks = 0
    var nameInput = document.getElementById("fullname");
    if (nameInput && nameInput.value) checks++
        var birthdayInput = document.getElementById("birthday");
    if (birthdayInput && birthdayInput.value) checks++
        if ($('input[name=gender]:checked').length > 0) checks++
            if ($('#vehicle1').is(":checked")) checks++
                if ($('#val').html().length > 0) checks++
                    if (checks === 3) {
                        $("#accept-tour-btn").prop("disabled", false);
                    } else {
                        $("#accept-tour-btn").prop("disabled", true);
                    }

}
$('#fullname').on('change', change_tour_btn)
$('#birthday').on('change', change_tour_btn)
$('#thanhtoantaivp').on('change', change_tour_btn)
$('#chuyenkhoan').on('change', change_tour_btn)
$('#thanhtoanonline').on('change', change_tour_btn)
$('#vehicle1').on('change', change_tour_btn)


// thanh toan online 
$('#submit').click(function() {
    var month = parseInt($('#expmonth').val());
    var year = parseInt($('#expyear').val());
    if (isNaN(month) || isNaN(year)) {
        alert('Vui lòng nhập thông tin');
        return false;
    } else {
        if ((month == 4 || month == 6 || month == 9 || month == 11) && date == 31) {
            alert('Vui lòng kiểm tra lại');
            return false;
        } else if (month == 2) {
            var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (date > 29 || (date == 29 && !isleap))
                alert('Vui lòng kiểm tra lại');
            return false;
        }
        if (month > 12 || month < 1) {
            alert('Tháng nhập vào không đúng');
            return false;
        }
        if (year > 2030 || year < 2021) {
            alert('Năm nhập vào không đúng');
            return false;
        }
    }
    $('#form__thanhtoan').submit();
});