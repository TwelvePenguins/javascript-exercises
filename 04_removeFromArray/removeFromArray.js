const removeFromArray = function(array, target) {
    let targetIndex = 0;

    for (let i = 0; i < (arguments.length - 1); ++i) {

        if (array.indexOf(arguments[i + 1]) >= 0) {
            targetIndex = array.indexOf(arguments[i + 1]);
            array.splice(targetIndex, 1);
        }
    }
    
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
