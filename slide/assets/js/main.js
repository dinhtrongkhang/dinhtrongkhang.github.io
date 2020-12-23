function myFunction() {
    var x = document.getElementById('nav__mobile');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


$('.main-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});