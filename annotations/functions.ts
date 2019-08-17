//Types apply to functions
const add = (a: number, b: number): number => {
  return a + b;
};
const subtract = (a: number, b: number): number => {
  return a - b;
};
function divide(a: number, b: number): number {
  return a / b;
}

//Annonymus functions & types
const multiply = function(a: number, b: number): number {
  return a * b;
};

//Void Return => When there is not return anything from the function
const logger = (message: string): void => {
  console.log(message);
};

//Never Return => When the function fails and we are not going to reach the end.
const throwError = (message: string): never => {
  //never reach the end of the function
  throw new Error(message);
};

//Deconstructing and types
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

//Create a function that will take an object and console.log the elements of it.
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
//ES6 Syntax
//const logWeather = ({ date, weather}: {date: Date, weather: string}); void =>{
//  console.log(date);
//  console.log(weather);
//}

logWeather(todaysWeather);
