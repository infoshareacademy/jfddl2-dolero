var slideTopBtn = document.getElementById('slideTopBtn');

document.addEventListener('scroll', mouseMoveHandler);
function mouseMoveHandler() {

    clientY = window.scrollY;

    if (clientY > 600)
        slideTopBtn.className = 'show';
    else
        slideTopBtn.className = '';}
//     if (clientY > 300)
//         nav.className = 'big';
//     else
//         nav.className = '';
// }