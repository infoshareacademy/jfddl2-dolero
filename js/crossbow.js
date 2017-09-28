var crossbow = document.querySelector('#crossbow');
var screenHeight = window.innerHeight;
var leftArrowDestiny;
var bottomArrowDestiny;

function radianToDegree(tang) {
    // change radians to degrees
    return tang * 180 / Math.PI;
}

document.addEventListener('mousemove', function (event) {
    // crossbow rotate & arrow rotate
    var arrow = document.querySelector('.arrow');
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var centerScreen = window.innerWidth / 2;
    var screenHeight = window.innerHeight;
    var triangleHeight = screenHeight - mouseY;
    var triangleWidth = mouseX - centerScreen;

    var tang = triangleWidth / triangleHeight;

    var elementDegree = radianToDegree(Math.atan(tang));

    crossbow.style.transform = "rotate(" + elementDegree + "deg)";
    if (arrow)
        arrow.style.transform = "rotate(" + elementDegree + "deg)";

});

document.addEventListener('click', function (event) {
    if (!loadedArrow) return;

    movingArrow = loadedArrow;
    loadedArrow = undefined;  

    var arrow = movingArrow.handle.parent()[0];

    console.log('arrow', arrow);

    // COMMENT - dont need else when return is used - it breaks function execution
    // we hawe conditon above we dont need it at all
    if (!arrow) return;

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    setTimeout(function () {
        arrow.remove();
        movingArrow = undefined;
        loadedArrow = new Arrow();
        loadedArrow.init();
    }, 1050);

    var rect = arrow.getBoundingClientRect();

    var x1 = mouseX;
    var y1 = mouseY;
    var x2 = rect.left;
    var y2 = rect.top;
    var a = (y2 - y1) / (x2 - x1);
    var b = y1 - a * x1;
    var myX = -b / a;
    leftArrowDestiny = myX;
    bottomArrowDestiny = screenHeight;

    arrow.style.bottom = screenHeight + 'px';
    arrow.style.left = myX + 'px';
    arrow.style.transition = '1.3s';
});



