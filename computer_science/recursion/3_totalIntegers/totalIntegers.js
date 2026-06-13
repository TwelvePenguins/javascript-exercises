const totalIntegers = function (data) {
    let counter = 0;
    let valuesInArray;
    if (Array.isArray(data)) {
        valuesInArray = data;
    } else if (typeof data === "object") {
        valuesInArray = Object.values(data);
    } else {
        return;
    }

    counter = valuesInArray.reduce(
        (accumulator, current) =>
            Number.isInteger(current) ? (accumulator += 1) : accumulator,
        0,
    );

    const nestedStructures = valuesInArray.filter(
        (element) => typeof element == "object" && element !== null,
    );

    if (nestedStructures.length === 0) {
        return counter;
    } else {
        nestedStructures.forEach((element) => {
            counter += totalIntegers(element);
        });

        return counter;
    }
};

// Do not edit below this line
module.exports = totalIntegers;
