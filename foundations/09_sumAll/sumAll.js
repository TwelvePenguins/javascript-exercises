const sumAll = function(num1, num2) {
    let array = []
    
    if (num2 < num1) {
        var largerNum = num1; 
        var smallerNum = num2;
    } else {
        var largerNum = num2;
        var smallerNum = num1;
    }
    
    if (Number.isInteger(largerNum) && Number.isInteger(smallerNum) && smallerNum >= 0 && largerNum >= 0) {
        for (let i = smallerNum; i <= largerNum; i++) {
            array.push(i)
        }
        return array.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        )
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
