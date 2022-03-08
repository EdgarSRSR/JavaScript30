const findTheOldest = function(people) {

    let currentYear = 2022;
    let oldest = 0;
    let oldestPerson = "";
    for(let i = 0; i < people.length; i++){
        let age;
        if( !people[i].yearOfDeath){

            age = currentYear - people[i].yearOfBirth;

        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        if(age > oldest){
            oldest = age;
            oldestPerson = people[i];
        }
    }
    //console.log(oldestPerson);
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
