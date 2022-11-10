var goodDrivingRecord = true;
var age = 27;

if (goodDrivingRecord && age >= 25){
    console.log("Congrats on your discount you upstanding citizen!!");
} else if (goodDrivingRecord === true || age >= 25){
    console.log("Your total is $500, thank you for your business.")
} else {
    console.log("Uh oh, looks like you're not eligible to rent a car. Please find someone who is.")
}