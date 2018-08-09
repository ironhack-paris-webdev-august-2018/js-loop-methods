// Sort
// ----
// Order the array by comparing items 2 AT A TIME.
// - return NEGATIVE number if "itemA" & "itemB" ARE OKAY
// - return POSITIVE number if "itemA" & "itemB" NEED TO SWITCH

var numbers = [ 22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18 ];

// for NUMBERS ONLY
numbers.sort(function (itemA, itemB) {
  return itemA - itemB;
});

console.log(numbers);
// [ 0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223 ]

// ----------------------------------------------------------------------------

var words = [ "banana", "Hello", "Goodbye", "First", "A", "a", "Second", "Third" ];

// for STRINGS ONLY
words.sort(function (itemA, itemB) {
  // turn to lowercase for STRINGS in alphabetical order (regardless of case)
  itemA = itemA.toLowerCase();
  itemB = itemB.toLowerCase();

  if (itemA < itemB) {
    return -1;
  }
  else {
    return 1;
  }
});

console.log(words);
// [ "a", "A", "banana", "First", "Goodbye", "Hello", "Second", "Third" ]
