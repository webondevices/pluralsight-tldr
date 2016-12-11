// var is hoisted and scope lives outside the {} block
// let is not hoisted and scope stays within the {} block
// const can't be changes, is not hoisted and scope stays within the {} block

// Arrow functions
let getPrice = () => 5.99;
let getPrice = count => count * 5.99;
let getPrice = (count, tax) => count * 5.99 * tax;
let getPrice = (count, tax) => {
	let result = count * 5.99 * tax;
	return result;
}

// 'this' will not change in the arrow function
// can't bind() to an arrow function

// Default props
// we have access to external variables and functions as well
function getPrice(price = 1000, count = 1, amount = price * count) {

}

// Rest
function getPrice(...prodIDs) {
	// will receive as Array
}

getPrice(143, 763, 986);

//Spread operator
let prices1 = [1, 4, 6, 8];
let prices2 = "1468";

// Math.max expects a list of arguments
// the spread operator diconstructs the array into individual arguments
// It's the opposite of rest
let result1 = Math.max(...prices1);
let result2 = Math.max(...prices2);


// New object literal
let myPrice = 145;
let propName= 'myProperty';

let myObj = {
	// equivalent of myPrice: myPrice
	myPrice,
	// new function syntax, same as arrow function becuase this is not the object
	getMyPrice() {
		return this.myPrice
	},
	// can have string name as well
	"get my price"() {
		return this.myPrice
	}
	// variable can be prop name
	[propName + '1']: 'hello'
}

// Getters and setters
let myObj = {
	myName: 'Mate',
	age: 0,
	get fullName() {
		return this.myName + ' Marschalko';
	},
	set age(age) {
		this.age = age;
	}
}


// for ... of
let items = [1, 2, 3];

for (let item of items) {
	// item will output 1, 2 then 3
}

// tempalte literal
var name = 'Mate';
console.log(`hello ${name}`);

function processMyLiteral(segments, ...values){
	// segments will be an array with the text segments
	// values will be an array with the ${} values
	// what's returned will be the value of the literal
}

processMyLiteral `hello ${name}`;


// Destructuring

let coords = [0, 10, 20];
let [x, y, z] = coords;
// or skip elements
let [x, , z] = coords;
// or add rest to array
let [x, ...rest] = coords;
// or with default
let [x, y, z = 0] = coords;

// Same works with objects, with {}
// Object names can be changed
let coords = {
	x: 0,
	y: 0
};
let {x: xCoordinate, y: yCoordinate} = coords;

// Can destructure from function call

function processCoords([x, y, z]) {

}
processCoords([0, 10, 20]);


// Modules
// file1:
import {projectId as id, name} from 'file2';
// id and name can be accessed

// file2:
export let projectId = 3;
export let name = 'mate';


// file1:
import {someValue} from 'file2';
// OR
import {default as someValue} from 'file2';
// someValue picks up the default export

// file2:
export default projectId = 3;
// OR
let projectId = 3;
export {projectId as default};


// Extensions
// Add prototypal inheritance in objects (take aObj and set it's prototype to bObj)
Object.setPrototypeOf(aObj, bObj);

// Add all properties from aObj and bObj to newObj (bObj overwrites properties from aObj)
// It will only take the objects and won't look at objects in prototype
Object.assign(newObj, aObj, bObj);

// String extensions
let myName = 'Mate Marschalko';

myName.startsWith('');
myName.endsWith('');
myName.includes('');
myName.repeat(5);

// Number extensions
Number.parseInt()
Number.parseFloat()
Number.isNaN()
Number.isIntiger()

// Math extensions
// 1, -1, 0, -0, NaN
Math.sign()
// The intiger part of a number
Math.trunc()

// Function extensions
myFn.name


// Iterators
let ids = [1, 2, 3];
let idIterator = ids[Symbol.iterator]();

idIterator.next(); // {done: false, value: 1}
idIterator.next(); // {done: false, value: 2}
idIterator.next(); // {done: false, value: 3}
idIterator.next(); // {done: true, value: undefined}


// Iterator maker
let idMaker = {
	[Symbol.iterator]() {
		let nextId = 8000;
		return {
			next() {
				return {
					done: false,
					value: nextId++
				};
			}
		}
	}
};

let it = idMaker[Symbol.iterator]();
it.next().value; // {done: false, value: 8001}
it.next().value; // {done: false, value: 8002}
it.next().value; // {done: false, value: 8003}

// OR

for (let v of idMaker) {
	// v
}

// Generator
function * process(){
	yield 8000;
	yield 8001;
}

let it = process();
it.next();
it.next();
console.log( it.next() );

// Generate id
function *process() {
	let nextId = 7000;
	while(true) {
		yield(nextId++);
	}
}

for (let id of process()) {
	if (id > 7010) break;
	console.log(id);
}

// yield* can take an iterator which takes over and yields results one-by-one
// this iterator can fore example be an array or another generator function


// Promises
let asyncOperation = new Promise(function(resolve, reject) {
	// call resolve(value) if successfull
	// call reject(reason) if error
});

// relevant callback is called, will receive passed value from promise
asyncOperation().then(resolveCallback, rejectCallback);

// whatever is returned in the callback will be wrapped up as a promise so allows chaining then()
// in return we can call another async methid returning a promise to allow chaining

// resolve and reject can pass another Promise into the callback
// in case a resolve() call has a Promise that rejects, the original Promise will reject as well

// Waits for all to finish
Promise.all([p1, p2, p3]).then(resolveCallback, rejectCallback);

// Waits for first to resolve and returns resolve callback for that Promise
// Race will finish and calls reject callback if one of them rejects
Promise.race([p1, p2, p3]).then(resolveCallback, rejectCallback);

// Promise ES6 syntax
var p = asyncOperation();
p.then(res => {
  // handle response
});
p.catch(error => {
  // handle error
});

// OR
p.then(
    res => {
      // handle response
    },
    err => {
      // handle error
    }
);

// Array extensions
// creates an array with a value of 6
// (gets aroud ES5 issues where one Number argument passed creates new empty array with Number length)
Array.of(6);

// Creates new modified array
let amounts = [800. 820, 820];
let salaries = Array.from(amounts, v => v + 100);

// fills array with values (900 in example)
// overwrites exesting values as well
// second argument is start index
// thrid argument is end index
// / number starts counting from end
myArray.fill(900, 1, 2);

// Find array elements matching lambda expression and return result array
let amounts = [600. 700, 800];
let salaries = amounts.find(value => value >= 700);

// findIndex() is same except it returns index

// returns [0, 600], [1, 700], [2, 800]
...amounts.entries();

// returns 0, 1, 2
...amounts.keys();

// returns 600, 700, 800
..amounts.values();


// Map
// In maps keys can be any values including objects or fanctions
let employee1 = {name: 'Jake'};
let employee2 = {name: 'Bob'};
let employee3 = {name: 'Mark'};

let employeeSalaries = new Map();
employeeSalaries.set(employee1, 32000);
employeeSalaries.set(employee2, 30000);
employeeSalaries.set(employee3, 42000);

// get map item:
employeeSalaries.get(employee2); // 30000

// length of map
employeeSalaries.size;

// delete item
employeeSalaries.delete(employee1);

// clear map
employeeSalaries.clear();

// check item exists in map
employeeSalaries.has(employee3);

// retreive all salaries from map (entries and keys also work)
let salaryList = [...employeeSalaries.values()];

// new Map(arrayOfKeys) is another way of creating a map (takes other iterators as well)

// with new WeakMap() if one employee object is cleared (set to null) removes element from Map


// Set
// Set is unique list of elements, no repetation allowed

let perks = new Set();
perks.add('car');
perks.add('vacation');
perks.add('car');

perks.size; // 2

// new Set(arrayOfKeys) is another way of creating a map (takes other iterators as well)

// existing properties .size, .has, like in Map


// Reflect API is for handling function and class calls


