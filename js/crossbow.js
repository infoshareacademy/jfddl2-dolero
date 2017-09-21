var crossbow = document.querySelector('#crossbow');
var arrow = document.querySelector('.arrow');
var tang;
var screenHeight = window.innerHeight;

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
    // console.log('mouseY: ', mouseY, "mouseX: ", mouseX, "centerScreen", centerScreen, "screenHigh", screenHeight, "triangleHeight: ", triangleHeight);


    var tang = triangleWidth / triangleHeight;
    // tangens [radians]
    // console.log("tangens w radianach", tang);


    var elementDegree = radianToDegree(Math.atan(tang));

    // console.log('elementDegree: ', elementDegree);
    crossbow.style.transform = "rotate(" + elementDegree + "deg)";
    if (arrow)
        arrow.style.transform = "rotate(" + elementDegree + "deg)";


});

document.addEventListener('click', function (event) {
    var arrow = document.querySelector('.arrow');
    console.log('arrow', arrow, !arrow);
    if (!arrow) return;
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    setTimeout(function () {
        arrow.remove();
    }, 1200);

    //arrow remove @TO DO

    setTimeout(function () {
        var crossbow = document.querySelector('#crossbow');
        var crossbowTransformProp = crossbow.style.transform;

        var arrowDiv = document.createElement('div');
        var arrowInsideDiv = document.createElement('div');

        arrowDiv.className = "arrow";
        arrowInsideDiv.className = "line";

        arrowDiv.appendChild(arrowInsideDiv);

        arrowDiv.style.transform = crossbowTransformProp;
        (document.querySelector('.arrows')).appendChild(arrowDiv);
    }, 1500);


    var rect = arrow.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    var x1 = mouseX;
    var y1 = mouseY;
    var x2 = rect.left;
    var y2 = rect.top;
    var a = (y2 - y1) / (x2 - x1);
    var b = y1 - a * x1;
    var myX = -b / a;


    arrow.style.bottom = screenHeight + 'px';
    arrow.style.left = myX + 'px';
    arrow.style.transition = '1s';
    // console.log('/////////////////////////////////');
    // console.log('arrow.style.bottom', arrow.style.bottom, 'mouseX * tang', mouseX * tang);
    // console.log('/////////////////////////////////');

});



