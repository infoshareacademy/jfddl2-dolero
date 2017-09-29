var moneySpeed = 8000;
var wallet;
var name;
var movingArrow;
var loadedArrow;

$('#modal-begin').modal()
// $('').text(name)



// COMMENT you run that function only once it can be IIFE
var tableColName = ['Place', 'Name', 'Points'];
var seconds = 12;
wallet = new Wallet();
wallet.init();
var ranking = JSON.parse(localStorage.getItem('ranking') || '[]');
// RANKING

//run cash creating and move
(function (speed) {
    // getName("Say Your name");

    loadedArrow = new Arrow();
    loadedArrow.init();

    function getName(text) {
        name = prompt(text);
        if (!name)
            getName("You have forgotten about name! Don't be shy!");
    }

    setInterval(function () {
        var money = new Cash();
        money.init();

        setInterval(function () {
            if (movingArrow && money.ifCashBeenHitting(movingArrow)) { //todo zmiana argumentu na movingArrow
                console.log('Hit!');
                money.cashAnimation()
            }
        }, 1);

        setInterval(function () {
            if (money.ifWalletTouched(wallet)) {

            }
        }, 1);
    }, speed)
})(1000)

// level hard
setTimeout(function () {
    return moneySpeed = 7000;
}, 35000);

setTimeout(function () {
    return moneySpeed = 5000;
}, 45000);


// var countdown = setInterval(function () {
//     console.log(seconds);
//     --seconds;
//     if (seconds === 0) {
//
//         ranking.push({player: name, points: result});
//
//         createRanking(ranking, tableColName);
//         $("#modalRanking").modal();
//         localStorage.setItem('ranking', JSON.stringify(ranking));
//         clearInterval(countdown);
//     }
// }, 1000);


var tableColName = ['Place', 'Name', 'Points'];
function createRanking(dataArray, tableColName) {
    dataArray.sort(function (a, b) {
        return b.points - a.points
    });

    $table = $('<table>');
    $tr = $('<tr>');
    tableColName.forEach(function (elem) {
        var $th = $('<th>').text(elem);
        $tr.append($th)
    });
    $table.append($tr);
    dataArray.forEach(function (players, index) {
        if (index < 10) {
            var $tr = $('<tr>');
            var $tdPlace = $('<td>');
            var $tdPlayer = $('<td>');
            var $tdPoints = $('<td>');

            $tr.append($tdPlace.text(index + 1));
            $tr.append($tdPlayer.text(players.player));
            $tr.append($tdPoints.text(players.points));
            $table.append($tr)
        }

    })

    $('#ranking').append($table)
}

$('#playAgain').click(function () {
    location.reload();


});

