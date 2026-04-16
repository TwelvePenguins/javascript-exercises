function findTheOldest(array) {
    array.forEach(person => {
        if (person.yearOfDeath != undefined) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            let year = new Date().getFullYear()
            person.age = year - person.yearOfBirth
        };
    });

    return array.reduce((oldestPerson, thisPerson) => {
        return oldestPerson.age < thisPerson.age ? thisPerson : oldestPerson;  
    });
};

// Do not edit below this line
module.exports = findTheOldest;
