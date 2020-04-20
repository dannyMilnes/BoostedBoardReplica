//slick slider
$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        speed: 700,
        dots: true,
        arrows: true
    });
});


function showImg(id) {
    // hide previously shown image
    for (i = 1; i < 10; i++) {
        var obj = document.getElementById("text" + i);
        if (obj != null)
            obj.className = 'hide';
    }
    var obj = document.getElementById("text" + id);
    if (obj != null)
        obj.className = 'show';
}