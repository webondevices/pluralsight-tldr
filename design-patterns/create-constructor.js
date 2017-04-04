// Creational patterns
// Constructor pattern

// creates new object
// links to object object prototype
// binds 'this' to the new object scope
// implicitly returns this

function Cat(name) {
	this.name = name;
}

var fluffy = new Cat('Fluffy');

// Prototypes to prevent copy methods in instance

Cat.prototype.meow = function() {
	return this.name + ' says, Meow!!';
}


// All this with ES2015 classes

class Cat {
	constructor(name) {
		this.name = name;
	}

	meow() {
		return this.name + ' says, Mewo!!';
	}
}

let fluffy = new Cat('Fluffy');