var animals = [
  "velociraptor",
  "sloth",
  "platypus",
  "lobster",
  "dodo bird"
];

animals.forEach(function logAnimal (oneAnimal) {
  console.log(oneAnimal.toUpperCase());
});

// Behind the scenes "forEach()" calls your function
// with each item of the array:
//   logAnimal(animals[0]);
//   logAnimal(animals[1]);
//   logAnimal(animals[2]);
//   logAnimal(animals[3]);
//   logAnimal(animals[4]);
