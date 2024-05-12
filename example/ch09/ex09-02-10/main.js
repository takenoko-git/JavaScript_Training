class Car {
    constructor() {

    }
}

class InsurancePolicy {

}

function makeInsurable(o) {
    o.addInsurancePolicy = function(p) { this.insuracePolicy = p; }
    o.getInsurancePolicy = function() { return this.insuracePolicy; }
    o.isInsured = function() { return !!this.insuracePolicy; }
}

makeInsurable(Car.prototype);


const car1 = new Car();
console.log(car1.isInsured());
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.isInsured());

const car2 = new Car();
console.log(car2.isInsured());
car2.addInsurancePolicy(new InsurancePolicy());
console.log(car2.isInsured());