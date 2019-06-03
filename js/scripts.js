$(document).ready(function() {


});

var prompt = prompt("Enter a sentence");
var letters = prompt.charAt(0).toUpperCase() + prompt.charAt(prompt.length-1).toUpperCase();
var letterArray = Array.from(letters);
var reverse = letterArray.reverse().join('');
var middleChar = prompt.charAt(Math.floor(prompt.length/2));
var finalCipher = middleChar + prompt + reverse;



console.log('this prompt is: ', prompt);
console.log('our first and last letters are: ', letters);
console.log('those letters reversed are: ', reverse);
console.log('the middle character is: ', middleChar);

alert(finalCipher);




// Create another function that will reverse the order of these two letters and return the result.
//
// Create a third function that calls the other two functions you've just created. For example, if I enter the sentence "I am a sentence", it should enter your first function (which should output "IE"), then call your second function, passing in the output value from the previous. It would return "EI" to me.
//
// Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."
