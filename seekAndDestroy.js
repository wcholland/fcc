function destroyer(arr) {
  // Remove all the values
  arr = arr.filter(indexOf(argument, 1))
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


arr = arr.filter(function (arr[0]) {
  return (arr[0] !== arr[0++]); });
  return arr;


function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean); // filters out any nulls created by delete
}

// filter(indexOf(argument, 1))
// var args = Array.prototype.slice.call(arguments);

/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
*/
