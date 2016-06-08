/* Challenge #5: Make Object Properties Private
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.
  var gear = 2;
  this.getGear = function() {
    return gear;
  };

  this.setGear = function(num){
    gear = num;
  };



  // Only change code above this line.
};

var myCar = new Car();

var myBike = new Bike();
