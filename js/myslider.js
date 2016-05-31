
$(function() {
    var currentSlide = 1;
    var animationSpeed = 2000;
    var delay = 3000;
    var $slides = $("#slides");
    var $slide = $(".slide");
    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slides.animate({"margin-left" : "-=730px"}, animationSpeed, function () {
                currentSlide++;
                if(currentSlide == $slide.length) {
                    currentSlide = 1;
                    $slides.css("margin-left", 0);
                }
            });
        }, delay);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    $slides.on("mouseleave", startSlider).on("mouseenter", stopSlider);

    startSlider();
})
