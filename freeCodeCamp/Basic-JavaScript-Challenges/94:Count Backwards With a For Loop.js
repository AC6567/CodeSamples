/* Challenge #94: Count Backwards With a For Loop 
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

var ourArray = [];

for(var i = 1; i < 10; i += 2){
  ourArray.push(i);
}

var myArray = [];

// Only change code below this line.
for (var j = 1; j< 10; j += 2){
  myArray.push(j);
}


// Only change code above this line.

if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}
