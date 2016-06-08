/* Challenge #3: Make Instances of Objects with a Constructor Function
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

// Only change code below this line.

var myCar = new Car();
myCar.nickname = "Whip";
