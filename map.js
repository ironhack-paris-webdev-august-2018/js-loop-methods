// Map
// ---
// Creates a new array with changed values based on those of the old array.
// - The LENGTH does NOT change.
// - Does NOT modify the original

var array = [ 11, 75, 8 ];

var doubleArray =
  array.map(function (oneNumber) {
    // RETURN the changed value for the new array
    return oneNumber * 2;
  });

console.log(array);
// [ 11, 75, 8 ]

console.log(doubleArray);
// [ 22, 150, 16 ]

// -----------------------------------------------------------------------------

// "forEach()" version of doing a map
var doubleArray = [];

array.forEach(function (oneNumber) {
  // PUSH the changed value for the new array
  doubleArray.push(oneNumber * 2);
});

console.log(doubleArray);
// [ 22, 150, 16 ]

// -----------------------------------------------------------------------------

// Exercise
var cities = ["miami", "barcelona", "madrid"];

var capsCities =
  cities.map(function (oneCity) {
    var firstLetter = oneCity[0].toUpperCase();
    var restOfWord = oneCity.slice(1);

    return firstLetter + restOfWord;
  });

console.log(capsCities);
// ["Miami", "Barcelona", "Madrid"]
