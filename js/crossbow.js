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
    console.log('mouseY: ', mouseY, "mouseX: ", mouseX, "centerScreen", centerScreen, "screenHigh", screenHeight, "triangleHeight: ", triangleHeight);


    var tang = triangleWidth / triangleHeight;
    // tangens [radians]
    console.log("tangens w radianach", tang);


    var elementDegree = radianToDegree(Math.atan(tang));

    console.log('elementDegree: ', elementDegree);
    crossbow.style.transform = "rotate(" + elementDegree + "deg)";
    arrow.style.transform = "rotate(" + elementDegree + "deg)";

    var x1 = mouseX;
    var y1 = mouseY;
    var x2 = centerScreen;
    var y2 = screenHeight;
    var a = (y2 - y1) / (x2 - x1);
    var b = y1 - a * x1;
    var myX = -b / a;


    console.log(myX, a, b, x1, y1, x2, y2);

    var rect = arrow.getBoundingClientRect();
    console.log(rect.top, rect.left);

});

document.addEventListener('click', function (event) {

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var arrowDiv = document.createElement('img');
    arrowDiv.className = "arrow";
    arrowDiv.src = "images/spear_small.svg";

    (document.querySelector('.arrows')).appendChild(arrowDiv);

    var arrow = document.querySelector('.arrow');


    var rect = arrow.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    var x1 = mouseX;
    var y1 = mouseY;
    var x2 = rect.left;
    var y2 = rect.top;
    var a = (y2 - y1) / (x2 - x1);
    var b = y1 - a * x1;
    var myX = -b/a;



    arrow.style.bottom =screenHeight+ 'px';
    arrow.style.left = myX + 'px';
    arrow.style.transition = '1s';
    console.log('/////////////////////////////////');
    console.log('arrow.style.bottom', arrow.style.bottom, 'mouseX * tang', mouseX * tang);
    console.log('/////////////////////////////////');


});