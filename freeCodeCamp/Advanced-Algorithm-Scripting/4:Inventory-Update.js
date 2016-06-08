/* Challenge #4: Inventory Update
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

// PROBLEM:
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.



function updateInventory(arr1, arr2) {

  var index;
  var arrCurInvName = [];
  var arrNeInvName = [];

  arr1.map(function(item1) {
    return arr2.map(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0];
      }
    });
  });

  arr2.map(function(item) {
    arrNeInvName.push(item[1]);
  });

  arr1.map(function(item) {
    arrCurInvName.push(item[1]);
  });

  arrNeInvName.map(function(item) {
    if (arrCurInvName.indexOf(item) === -1) {
      index = arrNeInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  arr1.sort(function(currItem, nextItem) {

    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}


var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
