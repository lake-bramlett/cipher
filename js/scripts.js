$(document).ready(function() {


});

var prompt = prompt("Enter a sentence");
var letters = prompt.charAt(0).toUpperCase() + prompt.charAt(prompt.length-1).toUpperCase();
var letterArray = Array.from(letters);
var reverse = letterArray.reverse().join('');
var middleChar = prompt.charAt(Math.floor(prompt.length/2));
var finalCipher = middleChar + prompt + reverse;

//console logs
console.log('this prompt is: ', prompt);
console.log('our first and last letters are: ', letters);
console.log('those letters reversed are: ', reverse);
console.log('the middle character is: ', middleChar);

alert(finalCipher);
