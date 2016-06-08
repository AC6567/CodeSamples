/* Challenge #4: Where art thou
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (var i = 0; i < collection.length; i++) {
    var matches = [];
    var c = collection[i];
    for (var key in source) {
      if (source[key] === c[key]) matches.push(true);
      else matches.push(false);
    }
    var isMatch = matches.reduce(function(prev, current) {
      return prev && current;
    });
    if (isMatch) arr.push(collection[i]);
  }
  
  // Only change code above this line
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
