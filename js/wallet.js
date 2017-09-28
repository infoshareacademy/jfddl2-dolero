// create class for wallet object

function Wallet() {
    this.handle;
}

// wallet initiation

Wallet.prototype.init = function () {
    $('.wallet').append('<div class="wall1"></div>');
    this.handle = $('.wall1');
    //@todo zmiana game na wallet i usuniecie diva z html

};

// get coordinates from arrow object
Wallet.prototype.getCoordinates = function () {
    var coordinates = {
        // lewy rog X
        x1: this.handle.offset().left,
        // prawy rog X
        x2: this.handle.offset().left + this.handle.width(),
        // dolny rog Y
        y1: this.handle.offset().top + this.handle.height(),
    }
    return coordinates;
};
Wallet.prototype.pointAnimation = function (points) {
    var $bum = $('<div class="bum">');
    $bum.text(points)
    $('.game').append($bum)
    $bum.fadeOut(1200)
};




// @todo ruszyć wallet
