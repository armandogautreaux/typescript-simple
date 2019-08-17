//Typescript & Arrays
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

//Cases where we explicit defined types in arrays:
//1) When we initialize the array as empty.
const carMakersExample1: string[] = [];

//Arrays with complex objects
const dates = [new Date(), new Date()];

//Two dimmesional arrays
const carsByMake = [['f150'], ['corola'], ['camaro']];

//2) When we initialize a two dimmensional array as empty.
const carsByMakeExample1: string[][] = [];

//help with inference when extranting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('hello');

//Help with 'map'
carMakers.map(
  (car: string): string => {
    return car.toLocaleLowerCase();
  }
);

//Flexible types
// const importantDates = [new Date(), '2030-10-10'];
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-10-10');
importantDates.push(new Date());
importantDates.push('hello'); // Will check the error.
