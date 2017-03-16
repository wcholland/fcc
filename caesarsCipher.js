function rot13(str) {
  // Split str into a character array
  return str.split('').map.call(str, function(d) {
      // Convert char to a character code
      x = d.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}


// ASCII 65 - 90 are letters
// split string, iterate over each using map/call, convert to char char code
// check if <65 || >90, then return string, if less than 78, + 13, otherwise
// - 13, then join



// function rot13(str) { // LBH QVQ VG!
//
//   var converted = "";
//
//   for (var i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
//     var temp = str.charCodeAt(i) - 13;
//     console.log(temp);
//
//     if (temp < 65) {
//       temp + 26;
//     }
//
//     var temp2 = String.fromCharCode(temp);
//     console.log(temp2);
//     converted += temp2;
//
//   }
//   console.log(converted);
// }


// ASCII 65 - 90 are letters
// split string, iterate over each using map/call, convert to char char code
// check if <65 || >90, then return string, if less than 78, + 13, otherwise
// - 13, then join

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// create an empty array, split the string into the array. If letter, fromCharCode
// subtract 13, then charCodeAt and join... figure out <13 later



/*
One of the simplest and most widely known ciphers is a Caesar cipher, also
 known as a shift cipher. In a shift cipher the meanings of the letters are
  shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are
 shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a
 decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
 (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program.
 Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()


*/
