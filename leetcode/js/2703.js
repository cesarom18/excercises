// Write a function argumentsLength that returns the count of arguments passed to it. 

var argumentsLength = function (...args) {
    return args.length;
};

argumentsLength(1, 2, 3);