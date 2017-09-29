// var startGame = document.querySelector("#startGame");
//     startGame.addEventListener('click', function(){
//         var userName = document.querySelector('#usr')['value'];
//         console.log(userName)
//         startGame.innerText=userName
//         --userName

var $name = $('#name')[0];
var $startGame = $('#startGame')[0];

$startGame.addEventListener('click', function(){
    $userName = $('#usr')[0]['value'];
    console.log($userName);
    $name.innerText =  $userName;
});