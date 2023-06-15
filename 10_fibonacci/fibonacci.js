const fibonacci = function(index) {
    let fibonacciArray = [1, 1]

    if (+index <= 0) { return "OOPS" }

    for (let i = 0; i <= +index; i++) {
        fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i + 1]);
    }

    return fibonacciArray[index - 1]
};

// Do not edit below this line
module.exports = fibonacci;
