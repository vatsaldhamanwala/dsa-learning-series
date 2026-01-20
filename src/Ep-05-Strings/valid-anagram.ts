function ValidAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount = new Map<string, number>();

  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!charCount.has(char) || charCount.get(char)! <= 0) {
      return false;
    }

    //if char of t found in s, decrease its count from map by 1
    charCount.set(char, charCount.get(char)! - 1);
  }

  return true;
}

//main
const string1 = 'anagram';
const string2 = 'nagaram';

// const string1 = 'rat';
// const string2 = 'car';

const isAnagram = ValidAnagram(string1, string2);
console.log(`${string2} is an anagram of ${string1}: `, isAnagram);
