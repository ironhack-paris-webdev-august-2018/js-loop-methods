// Filter
// ------
// Creates a new array with some of the items of the old array removed.
// - The LENGTH DOES change
// - Does NOT modify the original

var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

var drinkers =
  people.filter(function (onePerson) {
    // RETURN the condition that should test each item
    return onePerson.age >= 18;
  });

console.log(people.length);
// 6

console.log(drinkers.length);
// 5

// -----------------------------------------------------------------------------

// "forEach()" version of doing a filter
var drinkers = [];

people.forEach(function (onePerson) {
  if (onePerson.age >= 18) {
    // PUSH if the item meets the condition
    drinkers.push(onePerson);
  }
});

console.log(drinkers.length);
// 5

// -----------------------------------------------------------------------------

// Exercise
var numbers = [ 1, 60, 112, 123, 100, 99, 73 ];

var filteredNumbers =
  numbers.filter(function (oneNumber) {
    return oneNumber % 2 === 0 && oneNumber > 42;
  });

console.log(filteredNumbers);
// [ 60, 112, 100 ]
