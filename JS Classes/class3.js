//Getters and Setters

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
}

let c = new Car();
c.cnam = "BMW";
console.log(c.cnam);