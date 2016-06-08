/* Challenge #10: Chunky Monkey
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function chunkArrayInGroups(arr, size) {
  var final = [];

  for(i=0;i<arr.length;i+=size) {
    var temp = [];

    for(j=0;j<size;j++) {
      if(i+j < arr.length) temp.push(arr[i+j]);
    }
    final.push(temp);
  }

  return final;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
