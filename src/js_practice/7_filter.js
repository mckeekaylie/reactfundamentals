const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7},
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 8 },
    { name: 'Aaron', specialty: 'Entomology', medals: 4 },
    { name: 'Carolyn', specialty: 'Kung Fu', medals: 2 },
    { name: 'Tom', specialty: 'Chemistry', medals: 3}
]

let instructorNames = [];

for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5){
        instructorNames.push(instructors[i].name);
    }
}

console.log(instructorNames);

const instructor_names = instructors.filter(instructor => instructors.medals >= 5);
console.log(instructor_names);