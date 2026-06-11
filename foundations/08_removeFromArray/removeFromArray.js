<<<<<<< HEAD:04_removeFromArray/removeFromArray.js
const removeFromArray = function(array, target) {
    let targetIndex = 0;

    for (let i = 0; i < (arguments.length - 1); ++i) {

        if (array.indexOf(arguments[i + 1]) >= 0) {
            targetIndex = array.indexOf(arguments[i + 1]);
            array.splice(targetIndex, 1);
        }
    }
    
    return array
=======
const removeFromArray = function() {
>>>>>>> fc154a3fe4a15ca4cae4b36dc60fa574f7e5ffd3:foundations/08_removeFromArray/removeFromArray.js
};

// Do not edit below this line
module.exports = removeFromArray;
