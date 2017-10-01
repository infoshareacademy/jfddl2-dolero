function timer(playerName) {
    var secondsDiv = document.querySelector("#seconds");
    var countdown = setInterval(function () {
        secondsDiv.innerText = seconds;
        --seconds
        if (seconds === 9)
            $('#seconds').addClass('red');

        if (seconds === -1) {
            ranking.push({player: playerName, points: result});

            createRanking(ranking, tableColName);
            $("#modalRanking").modal();
            localStorage.setItem('ranking', JSON.stringify(ranking));
            clearInterval(countdown)
        }
    }, 1000);
}
