// Write a JavaScript program that prints out a String or Number: 
//The printed value will depend on the value of a Number. 
//If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". 
// If the Number is a multiple of both 3 and 5, print "FizzBuzz". 
// If the Number is not a multiple of either, print the Number itself.
 
var num1 = 3;
var num2 = 30;
var num3 = 15;

function fizzBuzz(yourNum){
    if (yourNum % 5 === 0 && yourNum % 3 === 0){
        console.log("FizzBuzz");
    } else if (yourNum % 5 === 0){
        console.log("Buzz");
    } else if (yourNum % 3 === 0){
        console.log("Fizz");
    } else {
        console.log(yourNum);
    }
}

//fizzBuzz(num3);
fizzBuzz(num2);
//fizzBuzz(num1);
fizzBuzz(37);