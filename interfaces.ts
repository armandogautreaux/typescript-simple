//Creating an interface, where we are not forced to pass primitive values but complex objects if we want.
interface IReportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return 'hello';
  }
};

const drink2 = {
  color: 'brown',
  carbonated: 'true',
  sugar: 40,
  summary(): string {
    return `My drin has ${this.sugar} grams of Sugar`;
  }
};

const printSummary = (item: IReportable): void => {
  //We pass the interface inside of the argument
  item.summary();
};

printSummary(oldCivic);
printSummary(drink2);
