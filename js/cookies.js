$(document).ready(function(){
    var cookieContent;
    var buttonCookieContent;
    var language = document.documentElement.lang;
    setCookieContent();

    function setCookieContent() {
        if(language === 'pl') {
            cookieContent = 'Ta strona korzysta z ciasteczek (cookies)';
            buttonCookieContent = "Rozumiem";
        } else {
            cookieContent = 'This page is using cookies';
            buttonCookieContent = "I understand";
        }
    }

    setTimeout(function(){
        if(cookieDiv)
            $('#deleteCookieInfo').addClass('cookies-button-animation');
    }, 3000);

    var cookieDiv = $('<div class=cookies><div class="container"><div class="row"><p class="col-xs-9 col-s-8 col-sm-5">'+ cookieContent +'</p><button id="deleteCookieInfo" class="col-xs-3 col-sm-offset-3 col-sm-2">' + buttonCookieContent+ '</button></div></div></div>')
    $('body').prepend(cookieDiv);
    var buttonCookie = document.querySelector('#deleteCookieInfo');

    buttonCookie.addEventListener('click', function(){
        $('.cookies').remove();
    });
})