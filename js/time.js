var secondsDiv = document.querySelector("#seconds");
var countdown = setInterval(function(){
    // console.log(seconds);
    secondsDiv.innerText=seconds;
    --seconds
    if (seconds === 9)
       $('#seconds').addClass('red');

    if (seconds === -1) {
        ranking.push({player: name, points: result});

        createRanking(ranking, tableColName);
        $("#modalRanking").modal();
        localStorage.setItem('ranking', JSON.stringify(ranking));
        clearInterval(countdown)
    }
}, 1000);