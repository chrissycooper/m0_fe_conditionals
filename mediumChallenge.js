var goodDrivingRecord = false;
var age = 5;

if (goodDrivingRecord === true && age >= 25) {
    console.log("Congrats on your discount you upstanding citizen!!")
} else if (goodDrivingRecord === true || age >= 25){
    console.log("Your total is $600, thank you for your business.")
} else {
    console.log("Uh oh, looks like you're not eligible to rent a car. Better luck next time.")
}
