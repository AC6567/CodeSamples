/* Challenge #3: Roman Numeral Converter
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function convertToRoman(num) {
  var number = num;
  var reversed = num.toString().split("").reverse();
  var ones = [["","I","II","III","IV","V","VI","VII","VIII","IX"]];
  var tens = [["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]];
  var hundreds = [["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];
  var thousands = [["", "M", "MM", "MMM"]]
  hundreds = hundreds.concat(thousands);
  tens = tens.concat(hundreds);
  ones = ones.concat(tens);
  var allNums = ones;
  var numeral = "";
  for(var i = 0; i< reversed.length; i++) {
    numeral = allNums[i][parseInt(reversed[i])] + numeral;
  }

  return numeral;
}

convertToRoman(12);
