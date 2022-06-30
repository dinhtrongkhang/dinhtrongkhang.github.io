// function inputinput(){
//     console.log('input');
// }

// let text = document.getElementById('nametext');
// text.addEventListener('input', inputinput);


const usernameEl = document.getElementById("username");
const passwordEL = document.getElementById("password");

usernameEl.addEventListener("input", function (e) {
    console.log(this.value);
});

passwordEl.addEventListener("change", function (e) {
    console.log(e.target.value);
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const userInfo = {
        username: usernameEl.value,
        password: passwordEL.value
    };

    console.log(userInfo);
});

const = link = document.getElementById("link");

a.addEventListener("click", function(e) {
    e.preventDefault();

});






