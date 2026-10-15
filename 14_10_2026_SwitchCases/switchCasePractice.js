
// Switch case without break
let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("Its Apple");
    case "Pineapple":
        console.log("Its pineapple");
    case "banana":
        console.log("Its Banana");

    case "Jackfruit":
        console.log("Its Jackfruit");

    case "mango":
        console.log("Its Mango");
    case "grapes":
        console.log("ITs Grapes");
    case "Pomogranate":
        console.log("ITs Pomogranate");
    default:
        console.log("Match not found");

}

//=============================================================
// With using break after banana or after banana
let fruits = "banana";

switch (fruits) {
    case "apple":
        console.log("Its Apple");
    case "Pineapple":
        console.log("Its pineapple");
    case "banana":
        console.log("Its Banana");

    case "Jackfruit":
        console.log("Its Jackfruit");
        break;
    case "mango":
        console.log("Its Mango");
    case "grapes":
        console.log("ITs Grapes");
    case "Pomogranate":
        console.log("ITs Pomogranate");
    default:
        console.log("Match not found");

}

//=====================================================================

let score = 78;
switch (true) {

    case (score >= 95):
        console.log("Outstanding");
        break;

    case (score >= 85):
        console.log("Excellent");
        break;

    case (score >= 75):
        console.log("Very Good");
        break;

    case (score >= 65):
        console.log("Good");
        break;
    case (score >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory");

}

//===================================================================

let x = 10;
switch (x) {
    case 10:
        console.log(10);
        break;
    case 10:
        console.log(8)
        break;
    default:
        console.log("Anything");

}

//======================================================================

//switch case uses strict comparison(===)
let zero = 0;
console.log(typeof zero);
switch (zero) {
    case false:
        console.log("Matching not found");
        break;
    case 0:
        console.log("0 matched");
        break;
}
//=========================================================================
let statusCode = 404;
switch (statusCode) {
    case 200:
        console.log("Its 200");
        break;
    case 404:
        console.log("Its 404");
        break;
    default:
        console.log("Status not found");
}
//==========================================================================
