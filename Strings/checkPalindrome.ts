import { reverseString_1 } from "./reverseString";
/*
Interviewer:
Check if a string is palindrome or not~!
*/


function checkPalindromeString_1(input: string): boolean {
  const reversedInput = reverseString_1(input);
  return input.toLowerCase() === reversedInput.toLowerCase();
}

console.log(checkPalindromeString_1("Race car"));