
var results = $('#results')[0];
var result = 0;

// create class for cash objects
function Cash() {
    this.handle;
    // COMMENT these two var could be better named so I renamed them
    this.touchedArrow = false;
    this.touchedWalled = false;
    this.points = 0;
}

// initiation cash div's
Cash.prototype.init = function () {
    var random = Math.floor(Math.random() * 10) + 1;
    // console.log(random)
    //@todo wrzucenie kreowania div w losowanie

    var dollarDiv;

    // losowanie div z usuwaniem
    if (random <= 3) {
        dollarDiv = document.createElement('div');
        dollarDiv.className = 'dol1 ';
        document.querySelector('.dollars').appendChild(dollarDiv);
        this.points = 100;
    }
    else if (random <= 5) {
        dollarDiv = document.createElement('div');
        dollarDiv.className = 'dol2 ';
        document.querySelector('.dollars').appendChild(dollarDiv);
        this.points = 200;
    }
    else if (random <= 7) {
        dollarDiv = document.createElement('div');
        dollarDiv.className = 'dol3 ';
        document.querySelector('.dollars').appendChild(dollarDiv);
        this.points = 300;
    }
    else if (random <= 9) {
        dollarDiv = document.createElement('div');
        dollarDiv.className = 'dol4 ';
        document.querySelector('.dollars').appendChild(dollarDiv);
        this.points = 500;
    }
    else {
        dollarDiv = document.createElement('div');
        dollarDiv.className = 'dol5  ';
        (document.querySelector('.dollars')).appendChild(dollarDiv);
        this.points = 1000;
    }


    // COMMENT - lines below were repeated in ifs above doing the same thing
    // all the time - dont repeat yourself ! ;)
    $(dollarDiv).animate({left: '90%', opacity: "show"}, moneySpeed, function () {
        $(this).remove();
    });
    this.handle = $(dollarDiv);
};

// get coordinates from cash object
Cash.prototype.getCoordinates = function () {
    var coordinates = {
        // Prawy gorny rog X
        x1: this.handle.offset().left + this.handle.width(),
        // Prawy gorny rog Y
        y1: this.handle.offset().top,
        // Prawy dolny rog X
        x2: this.handle.offset().left + this.handle.width(),
        // Prawy dolny rog Y
        y2: this.handle.offset().top + this.handle.height(),
        // Lewy dolny rog X
        x4: this.handle.offset().left,
    }
    return coordinates;
};

// checking if arrow hit the cash object

Cash.prototype.ifCashBeenHitting = function (movingArrow) {
    if (movingArrow instanceof Arrow) {
        var coordinates = this.getCoordinates();
        var arrowCoordinates = movingArrow.getCoordinates();

        if (arrowCoordinates.y1 < coordinates.y2 && arrowCoordinates.y1 > coordinates.y1) {
            if (arrowCoordinates.x1 <= coordinates.x2 && arrowCoordinates.x1 >= coordinates.x4) {
                return true
            }
        }
    }
};

// animation for cach which has been hitting
Cash.prototype.cashAnimation = function (left) {
    if (!this.touchedArrow) {
        left = leftArrowDestiny;
        this.touchedArrow = true;

        this.handle.stop()
        this.handle.animate({
            left: left + 'px',
            bottom: screenHeight/2 + 'px',
            // transform: 'translateX(-50%)',

        })
    }
};

// checking if cash hit the wallet
Cash.prototype.ifWalletTouched = function (wallet) {
    if (wallet instanceof Wallet) {
        var coordinates = this.getCoordinates();

        var walletCoordinates = wallet.getCoordinates();
        var points = this.points;
        if (walletCoordinates.y1 >= coordinates.y1 && 0 < coordinates.y1) {
            if ((walletCoordinates.x1 <= coordinates.x1 && walletCoordinates.x2 >= coordinates.x1) || (walletCoordinates.x1 <= coordinates.x2 && walletCoordinates.x2 >= coordinates.x2)) {

                this.cashInTheWallet(points, this.handle);
                wallet.pointAnimation(points)
            }
        }
    }
};

// things after cash hitting wallet
Cash.prototype.cashInTheWallet = function (points, cash) {
    if (!this.touchedWalled) {
        result += points;
        // console.log(cash2)

        this.touchedWalled = true;
        console.log('Result: ', result)
        results.innerText = result;
    }
}

// @todo rozwinąć funkcję o okrągły pieniądz


