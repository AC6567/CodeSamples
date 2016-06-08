/* Challenge #92: Iterate with JavaScript For Loops
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

var ourArray = [];
for(var i = 0; i < 5; i++){
  ourArray.push(i);
}
var myArray = [];

// Only change code below this line.
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}
// Push the numbers zero through four to myArray using a "for loop" like above.

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}
