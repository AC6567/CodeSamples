/* Challenge #5: Title Case a Sentence
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

String.prototype.replaceAt = function(index, character) {
  // Returns the new modified character
  return this.substr(0, index) + character + this.substr(index + character.length);
};

function titleCase(str) {
  var newTitle = str.split(' ');
  var updatedTitle = [];
  for (var st = 0; st < newTitle.length; st++) {
    updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }

  return updatedTitle.join(' ');
}

titleCase("I'm a little tea pot");
