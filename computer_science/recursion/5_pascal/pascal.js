const pascal = function (rowNumber, result = [1]) {
    
    if (rowNumber === result.length) {
        return result;
    }

    let currentArray = [];

    for (i = 0; i <= result.length; i++) {
        let targetNumber1 = result[i - 1];
        let targetNumber2 = result[i];

        if (!Number.isInteger(targetNumber1)) {
            currentArray.push(0 + targetNumber2);
        } else if (!Number.isInteger(targetNumber2)) {
            currentArray.push(targetNumber1 + 0);
        } else {
            currentArray.push(targetNumber1 + targetNumber2);
        }
    }

    return pascal(rowNumber, currentArray);
};

// Do not edit below this line
module.exports = pascal;
