console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// exercise 1

let correctNumber = 60;
let guessNumber = prompt('Can you guess the number?');

if (isNaN(guessNumber)) {
  console.log('That is not a valid asnwer :/');
}
  else if (guessNumber == correctNumber) {
  console.log("Yes, You are correct!!!");
} else if (guessNumber > correctNumber) {
  console.log("Nope! Too HIGH. Try Again...");
} else if (guessNumber < correctNumber) {
  console.log("Nope! Too LOW. Try Again...");
}

// exercise 2

let birthMonth = prompt ("In what month were you born?");

switch (birthMonth.toLowerCase()) {
   case "december":
   case "january":
   case "feburary":
    console.log("Winter");
    break;
    case "march":
    case "april":
    case "may":
      console.log("Spring");
      break;
      case "june":
      case "july":
      case "august":
        console.log("Summer");
        break;
        case "september":
        case "october":
        case "november":
          console.log("Autumn");
          default:
            console.log("Invalid Input")
}

// exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";



switch (typeId) {
  case "01":
  type = "tank top";
  break;
  case "02":
    type = "t-shirt";
    break;
    case "03":
      type = "long sleeve";
     break;
     case "04":
       type = "sweatshirt";
       break;
       default:
         type = "other";
}

switch (colorId) {
  case "BL":
  color = "black";
  break;
  case "BU":
    color = "blue";
    break;
    case "RD":
      color = "red";
     break;
     case "PU":
       color = "purple";
       break;
       default:
         color = "white";
}

switch (sizeId) {
  case "S":
  size = "small";
  break;
  case "M":
    size = "medium";
    break;
    case "L":
      size = "large";
     break;
     case "XL":
       size = "extra large";
       break;
       default:
         color = "one size fits all";
}

console.log(`Product: ${size} ${color} ${type}`);