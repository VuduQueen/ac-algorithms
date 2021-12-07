/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

function dashInsert(num) {
	let strNum = num.toString();
	//console.log(strNum);

	let strArr = strNum.split('');
	//console.log(strArr);

	let resultStr = strArr.join();
	//console.log(resultStr);

	for (let i = 0; i < strArr.length;i++){
		 if (strArr[i] ===1 && strArr[i+1] === 1) {
			 strArr[i] += resultStr.push('-');
		 } else {
			 console.log(resultStr);
		}
		//return 
	}
}


dashInsert(9789876986);