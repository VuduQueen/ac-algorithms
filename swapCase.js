/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str){
	let arr = str.split('');
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === arr[i].toUpperCase()){
			arr[i] = arr[i].toLowerCase();
		}else if (arr[i]===arr[i].toLowerCase()){
			arr[i] = arr[i].toUpperCase(); 
		}else{
			arr[i]=arr[i];
		}
	}
	let string = arr.join('');
		return string;
}

var result = swapCase('Hello World!!');
console.log(result);