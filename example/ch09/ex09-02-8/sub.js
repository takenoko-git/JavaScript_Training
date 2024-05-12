class Car {
    static getNextVin() {
        return Car.nextVin++;
    }
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }
    toString() {
        return `${this.make} ${this.model}: ${this.vin}`;
    }
}

Car.nextVin = 0;

const car1 = new Car("Tesla", "Model S");
console.log(car1.toString());

       