const instructors = [
    { name : 'Quincy', specialty: 'Quantum Mechanics' },
    { name: 'Kenn', specialty: 'Norse Mythology' },
    { name: 'Paul', specialty: 'Tuvan throat singing' },
    { name: 'Aaron', specialty: 'Entomology' },
    { name: 'Carolyn', specialty: 'Kung Fu' }
]

let instructorNames = [];

for(let i = 0; i < instructors.length; i++) {
    instructorNames.push(instructors[i].name);
}

console.log(instructorNames);

const instructor_names = instructors.map(instructor => instructors.name);
console.log(instructor_names);