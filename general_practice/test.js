const people = [{
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

 let age = 0;
let pname;
people.forEach((p) => {
    if(!p.yearOfDeath){
        const year = new Date().getFullYear()

        if(age < (year - p.yearOfBirth)){
            age = year - p.yearOfBirth;
            pname = p.name;
        }

    }else if(age < (p.yearOfDeath - p.yearOfBirth)){
        age = p.yearOfDeath - p.yearOfBirth;
        pname = p.name;
    }

});
console.log(pname);