//Parent class - Basic Inheritance
// class Vehicle {
//   drive(): void {
//     console.log('chuga chuga');
//   }
//   honk(): void {
//     console.log('beep beep');
//   }
// }

// //Extending a class
// class Car extends Vehicle {
//   drive(): void {
//     console.log('vroom');
//   }
// }

// const car = new Car();
// car.drive();
// car.honk();

//Examples with public modifiers
class Vehicle {
  //OLD VERSION
  // color: string;
  // //constructor
  // constructor(color: string) {
  //   this.color = color;
  // }

  //NEW VERSION
  constructor(public color: string) {}

  protected honk(): void {
    // <=Can't be to subclases and child elements
    console.log('beep beep');
  }
}

//Initialize the element when is being created
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

//Extending a class
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProccess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProccess();
