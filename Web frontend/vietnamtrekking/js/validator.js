function Validator(options) {

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMessage;
    }

    // Lấy Element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {

        // Khi submit form 
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;


            // Thực hiện lặp qua từng rule và validate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });



            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {

                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {});

                    options.onSubmit(formValues);
                }
            }
        }

        // Lặp qua mỗi rule và xử lý
        options.rules.forEach(function(rule) {

            // Lưu lại các rule cho mỗi mảng
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }


            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                        validate(inputElement, rule);
                    }
                    // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

// Dinh nghia rules
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || "Vui lòng kiểm tra lại"
        }
    };
}
Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    };
}
Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || 'Mật khẩu tổi thiểu 8 ký tự'
        }
    };
}

Validator.isCofirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    };
}