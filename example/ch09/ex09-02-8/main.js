class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicleが生成された");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Carが生成された");
    }
    deployAirbags() {
        console.log("バーンッ！");
    }
}

class Motorcycle extends Vehicle {}

const v = new Vehicle();
v.addPassenger("太郎");
v.addPassenger("花子");
console.log(v.passengers);

const c = new Car();
c.addPassenger("景子");
c.addPassenger("ミドリ");
console.log(c.passengers);
c.deployAirbags();

const c2 = new Car();
const m = new Motorcycle();
console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log(m instanceof Car);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);