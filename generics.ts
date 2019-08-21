class ArrayOfNumbers {
  collection: number[];
  constructor(collection: number[]) {
    this.collection = collection;
  }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  collection: string[];
  constructor(collection: string[]) {
    this.collection = collection;
  }

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  collection: T[];
  constructor(collection: T[]) {
    this.collection = collection;
  }
  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b']);

//Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['h', 'n']);
// printAnything(['h', 'n']);

//GENERIC ONSTRAINSTS
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}
//limit the types of T
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
