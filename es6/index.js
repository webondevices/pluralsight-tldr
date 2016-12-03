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

