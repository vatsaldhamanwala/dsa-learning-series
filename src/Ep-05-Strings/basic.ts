//declare string-------------------------------------------
let greeting: string = 'string';
console.log(greeting); // Output: string

let personName: string = 'Alice';
let personalizedGreeting: string = `Hello, ${personName}!`;
console.log(personalizedGreeting); // Output: Hello, Alice!

let multiLineString: string = `This is a string that spans multiple lines.`;
console.log(multiLineString);

//indexing-----------------------------
let firstChar: string = greeting[0];
console.log(firstChar); // Output: s

//length------------------------------
let strLength: number = greeting.length;
console.log(strLength); // Output: 6

// loop through string-----------------------
for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

for (let char of greeting) {
  console.log(char);
}

//common string operations---------------------------

// compare strings
let str1: string = 'apple';
let str2: string = 'banana';

console.log(str1 === str2); // Output: false
