/* Challenge #11: Convert HTML Entities
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function convertHTML(string) {
  var str = string;
  str = str.split("&").join("&amp;");
  str = str.split("'").join("&apos;");
  str = str.split('"').join("&quot;");
  str = str.split("<").join("&lt;");
  str = str.split(">").join("&gt;");
  return str;
}

convertHTML("Dolce & Gabbana");
