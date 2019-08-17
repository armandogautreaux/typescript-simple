const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
//with a tuple we tell the code that our collection of data is going to have defined values.

//Type Aliases
type Drink = [string, boolean, number];
const pepsi2: Drink = ['brown', true, 40];

//Diff btwn tuples and objects

const carStats = {
  horsepower: 400,
  weight: 3354
};

const carSpecs: [number, number] = [300, 4000];
