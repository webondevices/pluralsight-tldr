//
// OBJECT

// don’t use new Object();
const item = {};

// shorthend grouped to top
// calculated included
// method shorthand
const obj = {
  shorthend1,
  shorthend2,
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
  addValue(value) {
    return atom.value + value;
  }
};

// don’t use from instance
// best is to abstract to module
Object.prototype.hasOwnProperty.call(object, key)

const has = Object.prototype.hasOwnProperty;

// spread instead of object.assign if you don’t want to mutate original. just copy
const copy = { ...original, c: 3 };


//
// ARRAY

// spread instead of manual copy
const itemsCopy = [...items];

// don’t use new Array();
const item = [];

// array-like to array
Array.from();

[1, 2, 3].map(x => x * (x + 1));

// handle arg not present
function handleThings(opts = {}) {}


//
// DESTRUCTURE

// destructure when possible
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

// prefer object destructring in returns (order doesn’t matter)
function processInput(input) {
  return { left, right, top, bottom };
}


//
// FUNCTIONS

// prefer named functions as these are not hoisted
const foo = function bar() {};

// use ... to get arg array
function concatenateAll(...args) {
  return args.join('');
} 

// use default arguments
function handleThings(opts = {}) {
}

// Prefer these spacings:
const x = function () {};
const y = function a() {};

// Methods can return this to help with method chaining.
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}


//
// MODULES

// prefer ES2015 modules

// no wildcard imports

// only import from one path in one place

// export consts only in most cases

// in modules with a single export, prefer default


//
// COMPARISIONS

// - Objects evaluate to true
// - Undefined evaluates to false
// - Null evaluates to false
// - Booleans evaluate to the value of the boolean
// - Numbers evaluate to false if +0, -0, or NaN, otherwise true
// - Strings evaluate to false if an empty string '', otherwise true

(Always false: false, null, undefined, 0, NaN, ‘’, “”)