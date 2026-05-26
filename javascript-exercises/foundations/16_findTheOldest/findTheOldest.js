const findTheOldest = function(people) {
    let maxAge = 0;
    let oldest = null;
    people.forEach((p) => {

        //if yearOfDeath exist in person object then NP 'or' if it does not then use the current year
        const deathYear = p.yearOfDeath || new Date().getFullYear();
        const age = deathYear - p.yearOfBirth;

        if(age > maxAge){
            maxAge = age;
            oldest = p;
        }

        //this was the first approach which i did by myself
        /*
        if(!p.yearOfDeath){
            const year = new Date().getFullYear()

            if(age < (year - p.yearOfBirth)){
                age = year - p.yearOfBirth;
                oldest = p;
            }

        }else if(age < (p.yearOfDeath - p.yearOfBirth)){
            age = p.yearOfDeath - p.yearOfBirth;
            oldest = p;
        }
        */
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
