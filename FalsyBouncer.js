function bouncer(arr) {
  return arr.filter(Boolean);
}


/* Needs Work
function bouncer(arr) {

  arr = arr.filter(function (n) {
    return (n !== undefined || null || false || 0  || "" || isNaN); });
    return arr;
}
*/


/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter() */
