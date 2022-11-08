// account đăng nhập và đăng ký

// bat login
document.getElementById("popup__account").addEventListener("click", function () {
    document.querySelector("#login-form").style.display = "block";
})

// tat login
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector("#login-form").style.display = "none";
})

// register

// bat register va tat login
document.getElementById("popup__account-register").addEventListener("click", function () {
    document.querySelector("#signup-form").style.display = "block";
    document.querySelector("#login-form").style.display = "none";
})

// tat register
document.querySelector(".close-register").addEventListener("click", function () {
    document.querySelector("#signup-form").style.display = "none";
})

// bat login va tat register
document.getElementById("popup__account-login").addEventListener("click", function () {
    document.querySelector("#login-form").style.display = "block";
    document.querySelector("#signup-form").style.display = "none";
})

//login form

const form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;

    if (!username || !password) return;

    axios({
        url: "https://todo-api-with-auth.herokuapp.com/api/auth/signin",
        method: "POST",
        data: {
            username,
            password,
        },
    })
        .then((res) => {
            const token = res.headers.authorization.split(" ")[1];
            localStorage.setItem("token", token);

            alert("Login successfully, redirect to homepage");
            window.location.replace("index.html");
        })
        .catch((res) => {
            alert(res.response.data.error);
        });
});

//signup-form



