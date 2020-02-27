class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User('Paul', 'OConnor', 'poconnor@elevenfifty.org');

console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

class Player {
    constructor(name, number, averagePoints) {
        this.name = name;
        this.number = number;
        this.averagePoints = averagePoints;
    }
}

var player1 = new Player('name', 'number', 'averagePoints');
console.log(player1);
