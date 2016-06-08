/* Challenge #12: Mutations
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function mutation(arr) {

  for(i=0;i<arr[1].length;i++) {
    if(arr[0].toLowerCase().indexOf(arr[1].charAt(i).toLowerCase()) == -1) return false;
  }

  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
