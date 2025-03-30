/*
Interviewer:
Please write a function that reverses any given strings.
*/

export function reverseString_1(input: string): string {
  return input.split("").reverse().join("");
}

function reverseString_2(input: string): string {
  const reversedArr: string[] = [];
  for (let char of input) {
    reversedArr.unshift(char);
  }
  return reversedArr.join("");
}


console.log(reverseString_2("Behnoosh Jaberi"));
