var chai = require('chai');
var sinon = require('sinon');
var expec = chai.expect();

chai.should();

describe('sinon test', function() {
    var student;

    beforeEach(function() {
        student = {
            dropClass: function(classId, callback) {
                // do stuff
                cb();
            }
        }
    });

    describe('student.dropClass', function() {
        it('should call the callback', function() {
            var spy = sinon.spy();
            // function can be passed in to use for spying
            // var spy = sinon.spy(myMethod);

            student.dropClass(1, spy);

            spy.called.should.be.true;
        });
    });
});