/* Challenge #9: Truncate a string
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<0) return '';

  var tempStr='';

  for(i=0;i<num;i++) {
    tempStr+=str;
  }


  return tempStr;
}

repeatStringNumTimes("abc", 3);
