// Structural patterns
// Decorator pattern

// Used to add new functionality to an existing object
// Complete inheritence
// Without changing existing object

function Cat(name) {
    this.speed = 5;
    this.name = name;
}

function FastCat(name) {
    Cat.call(this, name);
    this.speed = 15;
}

FastCat.prototype = Object.create(Cat.prototype);

FastCat.prototype.goFast = function() {
    return 'I\'m running at: ' + this.speed;
}

var fluffy = new Cat('Fluffy');
