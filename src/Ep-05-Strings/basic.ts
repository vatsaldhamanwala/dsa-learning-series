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

// compare strings
let str1: string = 'apple';
let str2: string = 'banana';

console.log(str1 === str2); // Output: false

//list string methods with definition ---------------------------
let sampleString: string = '  Hello, TypeScript!  ';

// trim
let trimmedString: string = sampleString.trim();
console.log(trimmedString); // Output: Hello, TypeScript!

// toUpperCase
let upperCaseString: string = sampleString.toUpperCase();
console.log(upperCaseString); // Output:   HELLO, TYPESCRIPT!

// toLowerCase
let lowerCaseString: string = sampleString.toLowerCase();
console.log(lowerCaseString); // Output:   hello, typescript!

// substring
let subString: string = sampleString.substring(2, 7);
console.log(subString); // Output: Hello

//splice and slice
// Note: JavaScript/TypeScript does not have a splice method for strings, but we can use substring or slice to achieve similar results.
let slicedString: string = sampleString.slice(2, 7);
console.log(slicedString); // Output: Hello

// replace
let replacedString: string = sampleString.replace('TypeScript', 'JavaScript');
console.log(replacedString); // Output:   Hello, JavaScript!

// split
let stringArray: string[] = sampleString.trim().split(', ');
console.log(stringArray); // Output: [ 'Hello', 'TypeScript!' ]

// includes
let includesTypeScript: boolean = sampleString.includes('TypeScript');
console.log(includesTypeScript); // Output: true

// startsWith
let startsWithHello: boolean = sampleString.trim().startsWith('Hello');
console.log(startsWithHello); // Output: true

// endsWith
let endsWithExclamation: boolean = sampleString.trim().endsWith('!');
console.log(endsWithExclamation); // Output: true

// indexOf
let indexOfTypeScript: number = sampleString.indexOf('TypeScript');
console.log(indexOfTypeScript); // Output: 8

// concat
let concatenatedString: string = sampleString.concat(' Welcome to string manipulation.');
console.log(concatenatedString); // Output:   Hello, TypeScript! Welcome to string manipulation.

//join
let words: string[] = ['Hello', 'world', 'from', 'TypeScript'];
let joinedString: string = words.join(' ');
console.log(joinedString); // Output: Hello world from TypeScript

// Summary of string methods used--------------------------------

// give meaning of all methods used above in comments
// trim() - removes whitespace from both ends of a string
// toUpperCase() - converts all characters in a string to uppercase
// toLowerCase() - converts all characters in a string to lowercase
// substring(start, end) - extracts a portion of a string between the start and end indices
// slice(start, end) - extracts a section of a string and returns it as a new string
// Note: splice() is not applicable to strings in JavaScript/TypeScript----------
// replace(searchValue, newValue) - replaces occurrences of searchValue with newValue in a string
// split(separator) - splits a string into an array of substrings based on the specified separator
// includes(searchString) - checks if a string contains the specified searchString
// startsWith(searchString) - checks if a string starts with the specified searchString
// endsWith(searchString) - checks if a string ends with the specified searchString
// indexOf(searchValue) - returns the index of the first occurrence of searchValue in a string, or -1 if not found
// concat(string2) - concatenates two or more strings and returns a new string
// join(separator) - joins all elements of an array into a string, separated by the specified separator

// what is difference between slice and substring---------------------------------
// slice() can accept negative indices to count from the end of the string, while substring() treats negative indices as 0.
// Additionally, slice() can swap the start and end indices if start is greater than end, while substring() always treats the smaller index as the start.
