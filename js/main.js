var slideTopBtn = document.getElementById('slideTopBtn');

document.addEventListener('scroll', mouseMoveHandler);

function mouseMoveHandler() {

    clientY = window.scrollY;

    if (clientY > 600)
        slideTopBtn.className = 'show';
    else
        slideTopBtn.className = '';
    if (clientY > 300)
        $("nav.navbar-default").addClass("big");
    else
        $("nav.navbar-default").removeClass("big");
}


//    jQuery slide to top


$("#slideTopBtn, #mainLogo").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

// jQuery slide to sections
$("#additionalInfo").click(function() {
    $('html, body').animate({
        scrollTop: $("section.additionalInfo").offset().top
    }, 500);
});

$("#info").click(function() {
    $('html, body').animate({
        scrollTop: $("section.info").offset().top
    }, 500);
});

$("#team").click(function() {
    $('html, body').animate({
        scrollTop: $("section.team").offset().top
    }, 500);
});

$("#newsletter").click(function() {
    $('html, body').animate({
        scrollTop: $("section.newsletter").offset().top
    }, 500);
});

// Call scrollSpy
$('body').scrollspy({ target: '#spyNav' });


//Skrypty Jarka


    document.addEventListener("scroll", animate);

    function modifyText() {
        for(var i=1; i<7; i++) {
            document.getElementById("look" + i).setAttribute("style", "transform: translateX(0)");

        }
    }

    function animate() {
        var kon = window.pageYOffset;
        if (kon > 200) {
            modifyText();
        }
    }
    
    
    //Skrypty Andrzeja
    $(document).ready(function() {
    $("#slideshow > div:gt(0)").hide();

    var shownSlide = 0;

    function afterSlide($currentSlide) {
        console.log($currentSlide.find('li:first-child'));
    }

    function nextSlide(callback) {
        var $slideshowItems = $("#slideshow .hero-image");
        $slideshowItems.fadeOut(4000);
        var nextSlide = shownSlide + 1;

        $($slideshowItems[nextSlide]).fadeIn(4000);
        shownSlide = nextSlide;
        if ((shownSlide + 1) === $slideshowItems.length)
            shownSlide = -1;
        callback($($slideshowItems[nextSlide]));
    }

    setInterval(function () {
        nextSlide(afterSlide)
    }, 5000);
    // $('#slideshow li:first-child').addClass('transparent');
    // $('#slideshow li:nth-child(2)').addClass('transparent');


});