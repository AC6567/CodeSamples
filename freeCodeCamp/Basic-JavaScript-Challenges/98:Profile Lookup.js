/* Challenge #98: Profile Lookup
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

//this solution does not pass in freecodecamp//

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop) {
  for (var i=0; i < contacts.length; i++) {
    if (!(contacts[i].hasOwnProperty(prop))) {
      return "No such property";
    } else if (contacts[i].firstName === firstName) {
      return contacts[i][prop];
    }
  }
  return "No such contact";
}

// Change these values to test your function
lookUp("Kristian", "lastName");
