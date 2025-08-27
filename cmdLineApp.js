//
//
let rs = require("readline-sync");

//  prompt name question
//  prompt for favorite hobby
//  ask if thers more hobbies
//  add hobbies to list
let hobbies = [];
let areYouSure = false;
let moreHobbies = 0;

function getHobbyCount() {
  moreHobbies = rs.questionInt("How many other hobbies do you have? ");
}

function addHobbies(numHobbies) {
  //let input = rs.prompt();
  let counter = 0;
  while (counter < numHobbies) {
    let input = rs.prompt();
    hobbies.push(input);
    counter++;

    if (counter < numHobbies) {
      console.log(
        '--Awesome! "' +
          input +
          "\" is cool! What's the other " +
          (numHobbies - counter) +
          "?"
      );
    } else {
      console.log("I wish I could do " + hobbies + "...but I'm not even real");
    }
  }
}

//  store list of users hobbies
//  print user hobby list at the end

let userName = rs.question("What is your name? ");

let favHobby = rs.question(userName + ", what is your favorite hobby? ");

//console.log("Hi " + userName + " !");
hobbies.push(favHobby);
getHobbyCount();

if (moreHobbies > 0) {
  console.log("Cool, what are they? ");
  addHobbies(moreHobbies);
} else {
  areYouSure = rs.keyInYN(
    "Are you sure? " + hobbies[0] + " is all you like to do?"
  );
}

if (!areYouSure && hobbies.length <= 1) {
  getHobbyCount();
  console.log("Cool, what are they? ");
  addHobbies(moreHobbies);
} else if (areYouSure) {
  console.log(hobbies + " is cool, good for you.");
}
