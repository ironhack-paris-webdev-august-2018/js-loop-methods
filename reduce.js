// Reduce
// ------
// Combines the items of an array into one value.
// - Think adding together the items of an array for an average.
// - The "accumulator" keeps track of the combination in each step.

var numbers = [ 10, 15, 35, 25 ];

var finalResult =
  numbers.reduce(function (accumulator, oneNumber) {
    // RETURN the accumulator combined with the current item
    return accumulator + oneNumber;
  }, 0);
  // 0 is the accumulator's starting value

console.log(finalResult);
// 85

console.log(finalResult / numbers.length);
// 21.25

// -----------------------------------------------------------------------------

// "forEach()" version of doing a reduce
var finalResult = 0;
// 0 is the variable's starting value

numbers.forEach(function (oneNumber) {
  // COMBINE current item with the variable directly
  finalResult += oneNumber;
});

console.log(finalResult);
// 85

console.log(finalResult / numbers.length);
// 21.25

// -----------------------------------------------------------------------------

// Other "reduce()" example
var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy",   age: 30 },
  { name: "Allen",   age: 49 },
  { name: "Nettie",  age: 21 },
  { name: "Stuart",  age: 17 }
];

var totalAges =
  people.reduce(function (acc, onePerson) {
    return acc + onePerson.age;
  }, 0);

console.log(totalAges / people.length);
// 28.4

// -----------------------------------------------------------------------------

// Other "forEach()" example
var totalAges = 0;

people.forEach(function (onePerson) {
  totalAges += onePerson.age;
});

console.log(totalAges / people.length);
// 28.4

// -----------------------------------------------------------------------------

// Exercise
var menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];

var totalCalories =
  menu.reduce(function (acc, oneItem) {
    return acc + oneItem.calories;
  }, 0);

console.log(totalCalories / menu.length);
// 278
