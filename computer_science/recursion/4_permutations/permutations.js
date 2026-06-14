const factorial = function (input) {
    if (input === 1 || input === 0) {
        return 1;
    } else if (input > 0) {
        return input * factorial(input - 1);
    }
};

const permutations = function (array, index = 0, currentArrays = [[]]) {
    let resultArrays = [];
    let maximum = array.length;

    if (array.length === 0) {
        return [[]];
    }

    currentArrays.forEach((thisArr) => {
        for (let i = 0; i <= index; i++) {
            let copy = thisArr.slice();
            copy.splice(i, 0, array[index]);
            resultArrays.push(copy);
        }
    });

    if (resultArrays.length === factorial(maximum)) {
        return resultArrays;
    } else {
        return permutations(array, index + 1, resultArrays);
    }
};

// Do not edit below this line
module.exports = permutations;
