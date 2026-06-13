const contains = function(obj, target) {
    const values = Object.values(obj);
    const immediateObejcts = values.filter((value) => typeof value == "object" && value !== null);

    
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
