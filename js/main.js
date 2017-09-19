var icons = document.getElementsByClassName('animation');
for (i=0;i<icons.length;i++) {
    icons[0].setAttribute('style', 'transition-delay:' +(0.2)+'s');
    icons[2].setAttribute('style', 'transition-delay:' +(0.4)+'s');
    icons[1].setAttribute('style', 'transition-delay:' +(0.6)+'s');
    icons[3].setAttribute('style', 'transition-delay:' +(0.8)+'s');
}

inView('#additionalInfoDestination').on('enter', addInfofunc);


function addInfofunc() {
    console.log('inview');
    for(i=0;i<icons.length;i++)
    icons[i].style.opacity = 1;
}


inView('#sentencja').on('enter', move);




var slideTopBtn = document.getElementById('slideTopBtn');

document.addEventListener('scroll', showButton);

function showButton() {

    clientY = window.scrollY;

    if (clientY > 600)
        slideTopBtn.className = 'show';
    else
        slideTopBtn.className = '';
}

//------------ jQuery slide to top

$("#slideTopBtn, #mainLogo").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

//------------ jQuery slide to sections

$("#features").click(function() {
    $('html, body').animate({
        scrollTop: $("section.features").offset().top
    }, 500);
});

$("#additionalInfo").click(function() {
    $('html, body').animate({
        scrollTop: $("section.add-info").offset().top
    }, 500);
});


$("#team").click(function() {
    $('html, body').animate({
        scrollTop: $("section.about-us").offset().top
    }, 500);
});

$("#newsletter").click(function() {
    $('html, body').animate({
        scrollTop: $("section.newsletter").offset().top
    }, 500);
});

// Call scrollSpy
$('body').scrollspy({ target: '#spyNav' });





// Jarek

// document.getElementById("text").setAttribute("class", "hider");


var text = document.getElementById("text").textContent;


(function lettersAnimation() {
    var array = []

    for (var i = 0; i < text.length; i++) {
        array.push(text.charAt(i))

    }


    for (var i = 0; i < text.length; i++) {
        var div = document.createElement('div')

        div.id = 'letter' + i;
        // div.textContent = content;
        div.class = 'letter';

        document.getElementById('sentence').appendChild(div)
        // document.body.appendChild(div)
    }
    for (var i = 0; i < text.length; i++) {
        var content = document.createTextNode(array[i])
        var los = (Math.random() - 0.5) * 1000
        document.getElementById("letter" + i).setAttribute("style", "transform:translate(" + los + "px, " + los + "px)");

        document.getElementById('letter' + i).appendChild(content);
        document.getElementById("letter" + i).setAttribute("class", "letter");


    }

})()

function move() {
    for (var i = 0; i < text.length; i++) {

        document.getElementById("letter" + i).setAttribute("class", "letter2")

        document.getElementById("letter" + i).setAttribute("style", "transition-delay:" + i * 0.01 + "s");
        // document.getElementById("text").setAttribute("class", "showme");
        // document.getElementById("text").style.display = 'block';
}}




// Kod Piotrka

