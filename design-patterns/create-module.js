// Creational patterns
// Revealing module pattern

// Encapsulates properties and methods into one module
// We have control over what we want to make private and public

let myCatModule = function() {
    let hasEaten = false;

    let meow = function() {
        return hasEaten ? 'Meow, I\'m full!' : 'Meow, I\'m hungry!';
    };

    let feed = function() {
        hasEaten = true;
    };

    // Deciding what to make public
    // hasEaten boolean stays private
    return {meow, feed};
};

myCatModule.meow();
myCatModule.feed();
myCatModule.meow();