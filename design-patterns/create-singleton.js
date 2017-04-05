// Creational patterns
// Singleton pattern

// Object has only one instance
// Remembers the last time you used it
// Hands the same instance back

const TaskRepo = (function() {
    let TaskRepo;

    function createRepo() {
        let taskRepo = new Object("Task");
        return taskRepop
    }

    return {
        getInstance: function() {
            if (!taskRepo) {
                taskRepo = createRepo();
            }

            return taskRepo;
        }
    }
})();

let repo1 = TaskRepo.getInstance();
let repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
    console.log("Same instance!");
}


// In Node.js with the common.js module pattern
// we get a new instance of the module if it is
// executed after it's beeing loaded and required
// each file requiring it will get a new instance

module.exports = TaskRepo;
// and
var myTaskRepo = require('./TaskRepo')();

// By executing the module inside the module
// we create a singleton and will only have
// one instance throughout the app

module.exports = TaskRepo();
// and
var myTaskRepo = require('./TaskRepo');


