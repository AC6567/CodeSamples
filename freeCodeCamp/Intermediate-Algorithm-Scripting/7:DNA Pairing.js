/* Challenge #7: DNA Pairing
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function pairElement(str) {
  var chars = str.split("");
  chars = chars.map(function(val) {
    var e = "";
    switch(val) {
      case "A": e = "T"; break;
      case "T": e = "A"; break;
      case "C": e = "G"; break;
      case "G": e = "C"; break;
    }
    return [val, e];
  });
  return chars;
}

pairElement("GCG");
