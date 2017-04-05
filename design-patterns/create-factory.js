// Creational patterns
// Factory module pattern

// Simplifies object creation
// Creating different objects based on needs

// Initialise different object depenLding on logic
const Mammal = function(){};
const Fish = function(){};

const animalFactory = function() {
    let create = function(species, name) {
        switch(species.toLowerCase()) {
            case 'dog':
            case 'cat':
            case 'cow':
                return new Mammal(name);
                break;

            case 'shark':
            case 'guppy':
                return new Fish(name);
                break;
                
            default:
                return new Animal(name);
        }
    };

    return {create};
};

let myAnimal = animalFactory.create('cat', 'Fluffy');


// Require different modules depending on logic
const repoFactory = function() {
    let repos = this;
    let repoList = [{name: 'task', source: './taskRepository'},
                    {name: 'user', source: './userRepository'},
                    {name: 'project', source: './projectRepository'}];

    repoList.forEach(repo => {
        repos[repo.name] = require(repo.source)();
    });
};

let user = repoFactory.user.get(1);
let project = repoFactory.project.get(1);