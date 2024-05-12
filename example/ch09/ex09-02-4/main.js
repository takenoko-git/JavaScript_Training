const Car = (function() {
    const carProps = new WeakMap();
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear: this._userGears[0] });
        }

        get userGear() { return carProps.get(this).userGear; }
        set userGear(value) {
            if(this._userGears.indexOf(value) < 0)
                throw new Error(`ギア指定が正しくない：${value}`);
            carProps.get(this).userGear = value;
        }

        shift(gear) { this.userGear = gear; }
    }

    return Car;
})();

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(car1);
console.log(car2);

car1.shift('D');
car2.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);

car1.userGear = "N";
console.log(car1.userGear);
car1.userGear = "X";