const contains = function(obj, target) {
    console.log(Object.keys(obj))
    const values = Object.values(obj);
    const immediateObejcts = values.filter((value) => typeof value == "object" && value !== null);
    console.log(immediateObejcts)

    
    if (values.includes(target)) {
        return true;
    } else if (immediateObejcts.length === 0) {
        return false;
    } else {
        return immediateObejcts.some((object) => contains(object, target));
    }
};
  
// Do not edit below this line
module.exports = contains;
