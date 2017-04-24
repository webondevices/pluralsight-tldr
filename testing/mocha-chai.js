// mocha is a test framework
// chai is an asserttion library

//
// A simple test
var chai = require('chai');
var expect = chai.expect();

// This adds should() method to all objects
chai.should();

function isEven(num) {
    return num % 2 === 0;
}
describe('number test', function() {
    // mocha allows you to nest test describtion

    describe('isEven', function() {
        beforeEach(function(){
            // being called before each test
            // reset variables or classes
        });

        afterEach(function(){
            // being called after each test
        });

        it('should return true when number is even', function(){
            isEven(4).should.be.true;
        });

        it('should return false when number is odd', function(){
            expect(isEven(5)).to.be.false;
        });

        // skip task without deleting
        it.skip();
        xit();

        // only perform this tests
        it.only();
    });
});

// skip tests without deleting
describe.skip();

// only perform these tests
describe.only();


//
// 