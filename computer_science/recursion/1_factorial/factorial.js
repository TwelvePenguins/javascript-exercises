const factorial = function(input) {
    
    if (input === 1 || input === 0) {
        return 1;
    } else if (input > 0 && Number.isInteger(input)){
        return input * factorial(input - 1);
    }
};

// Do not edit below this line
module.exports = factorial;