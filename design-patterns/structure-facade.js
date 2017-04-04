// Structural patterns
// Facade pattern

// Simplifies the interface to a complex logic in the background

function addEvent(elem, event, fn) {
    if (elem.addEventListener) {
        elem.addEventListener(event, fn, false);
    } else {
        elem.attachEvent("on" + event, function() {
            return(fn.call(elem, window.event));   
        });
    }
}