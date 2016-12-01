
function Cat(name, color) {
	this.name = name;
	this.color = color;
}

Cat.prototype.speak = function () { console.log('Meow'); }

var fluffy = new Cat('Fluggy', 'white');


// Same in ES6
class Cat {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	speak() {
		console.log('Meow');
	}
}

let fluffy = new Cat('Fluggy', 'white');


// Get object property details
// Gives details on: writable, enumerable, configurable properties
var myObj = {name: 'Mate'}
Object.getOwnPropertyDescriptor(myObj, 'name');

// Writable means property value can be changed
// use Object.freeze(myObj.name) to disable changes to descendants as well
// Enumerable means property will be listed
// Configurable means property settings can be changed and can be deleted

// Get and Set property
Object.defineProperty(myObj, 'fullName', {
	get: function() {
		return this.name + ' Marschalko';
	},
	set: function(fullName) {
		this.fullName = fullName;
	}
});


// Extend Array prototype
Object.defineProperty(Array.prototype, 'last', {
	get: function() {
		return this[this.length - 1];
	}
});


// Check object has property
myObj.hasOwnProperty('name');


// Prototypal inheritence
function Animal(voice) {
	this.voice = voice || 'grunt';
}
Animal.prototype.speak = function() {
	console.log(this.voice);
};

function Cat(name, color) {
	Animal.call(this, 'Meow');
	this.name = name;
	this.color = color;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluggy', 'white');


// Same in ES6
class Animal {
	constructor(voice) {
		this.voice = voice || 'grunt';
	}

	speak() {
		console.log(this.voice);
	}
}

class Cat extends Animal {
	constructor(name, color){
		super('Meow');
		this.name = name;
		this.color = color;
	}
}

var fluffy = new Cat('Fluggy', 'white');