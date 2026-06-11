const getTheTitles = function(array) {
    let outputArray = [];

    array.forEach(element => {
        outputArray.push(element.title);
    });

    return outputArray;
};

// Do not edit below this line
module.exports = getTheTitles;
