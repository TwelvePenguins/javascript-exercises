const repeatString = function(string, times) {
    let result = ""

    if (times >= 0) {
        for (i = 1; i <= times; i++) {
            result += string;
        }
    } else {
        result = "ERROR"
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
