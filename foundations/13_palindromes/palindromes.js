const palindromes = function (string) {
    let string1 = string.toLowerCase().replace(/\W/g, ""); 
    return string1.split("").reverse().join("") === string1;
};

// Do not edit below this line
module.exports = palindromes;
