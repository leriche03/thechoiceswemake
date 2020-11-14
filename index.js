const prompt = require("readline-sync");
const readlineSync = require("readline-sync");

console.log("You live in a world were everyone has a Quirk(Powers)\n\n");
console.log("What quirk were you born with??\n\n");
let option = prompt.question("Options: Super Speed, Super Strength, Fire\n\n");

switch (option.toLowerCase()) {
  case "super speed":
    console.log("You were born with Super Speed!! What a cool power!\n\n");
    break;
  case "super strength":
    console.log("You were born with Super Strength!! What a cool power!\n\n");
    break;
  case "fire":
    console.log(
      "You were born with the ablity to manipulate and create Fire!! What a cool & scary power!\n\n"
    );
    break;
  default:
    console.log("But one question.....\n\n");
}

console.log("Are You a Villian??..... Or Hero??\n\n");
let superSide = readlineSync.question("Options: hero, villian\n\n");

switch (superSide.toLowerCase()) {
  case "villian":
    console.log("You are one bad....(I'm shut my mouth)\n\n");
    console.log("Where will your first attack be?\n\n");
    let villianDescion = readlineSync.question(
      "Options: local Bank, musuem\n\n"
    );
    break;
  case "local bank":
    console.log("You ran into a super speed Hero, what do you do??\n\n");
    let villianDescion2 = readlineSync.question(
      "Options: run away, fight?\n\n"
    );
    break;
  case "run away":
    console.log(
      "Well that was dumb!, You got caught cause the super hero has super superSide... duh\n\n"
    );
    break;
  case "fight":
    console.log(
      "After a few tussles you were easily able to defeat the hero and take off with the goods!\n\n"
    );
    break;

  case "musuem":
    console.log("You ran into a super strength Hero, what do you do??\n\n");
    let villianDescion3 = readlineSync.question(
      "Options: run away, fight?\n\n"
    );
    break;
  case "run away":
    console.log(
      "Smart! The hero was preoccuiped with saving the hostages and you got away!\n\n"
    );
    break;
  case "fight":
    console.log(
      "It didn't take long for the Hero to send you to dreamville(You sleep boi!)\n\n"
    );
    break;

  case "hero":
    console.log("With great power, comes great responsibility!\n\n");
    console.log(
      "There is an incident at the Local Bank and Musuem, which will you go to first?\n\n"
    );
    let heroDescion = readlineSync.question("Options: local Bank, musuem\n\n");
    break;
  case "local bank":
    console.log("You ran into a super strength villian, what do you do??\n\n");
    let heroDescion2 = readlineSync.question(
      "Options: destroy villian, bring to authorities?\n\n"
    );
    break;
  case "destroy villian":
    console.log(
      "You are now a vigilante, forever to run from the authorities\n\n"
    );
    break;
  case "bring to authorities":
    console.log(
      "After a tussle you were able to find the villians weakness and bring him to the authorities\n\n"
    );
    break;

  case "Musuem":
    console.log("You ran into a fire powered villian, what do you do??\n\n");
    let heroDescion3 = readlineSync.question(
      "Options: destroy villian, bring to authorities?\n\n"
    );
    break;
  case "destroy villian":
    console.log(
      "You are now a vigilante but the people understand how evil the fire villian was! \n\n Forever will you be a hero in the public eye!\n\n"
    );
    break;
  case "bring to authorities":
    console.log(
      "During your attempt to apprehend the villian, He burns all the hostage and the authorities alive!\n\n"
    );
    break;
}
