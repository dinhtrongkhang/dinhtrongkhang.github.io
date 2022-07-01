const h1 = document.querySelector("h1");


//even handler
// h1.onclick = function() {
//     alert("DGH");
// };


// h1.addEventListener("click", function() {
//     alert("1111111111");
// });

// h1.addEventListener("click", function() {
//     alert("2222222222");
// });

// h1.addEventListener("click", function() {
//     alert("333333333333");
// });

// h1.addEventListener("mouseover", function(){
//     console.log(mouseover);
// });

// h1.addEventListener("mouseleave", function(){
//     alert("Dinh Trong Khang");
// });


h1.addEventListener("copy", function(){
    console.log("copy");
    console.log(this);
});


