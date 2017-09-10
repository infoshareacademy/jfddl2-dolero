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