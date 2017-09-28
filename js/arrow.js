// create class for arrow objects

function Arrow() {
    this.handle;
};

// arrow initiation
Arrow.prototype.init = function () {
    var lineInArrow = $('<div class="line"></div>');
    var arrow = $('<div class="arrow">');
    $('.arrows').append(
        arrow.append(lineInArrow)
    );

    var crossbow = document.querySelector('#crossbow');
    var crossbowTransformProp = crossbow.style.transform;
    arrow[0].style.transform = crossbowTransformProp;

    this.handle = lineInArrow;
//@todo zmiana game na arrow i usuniecie diva z html
};

// get coordinates from arrow object
Arrow.prototype.getCoordinates = function () {
     var coordinates = {
        // gorny rog X
        x1: this.handle.offset().left,
        // gorny rog Y
        y1: this.handle.offset().top,

    }
    return coordinates;
};


//@todo ruch strzały