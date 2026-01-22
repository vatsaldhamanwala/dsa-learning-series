function longestSubstringWithoutRepeatingCharacter(s: string): number {
  const map = new Map<string, number>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    if (map.has(currentChar) && map.get(currentChar)! >= left) {
      left = map.get(currentChar)! + 1;
    }

    // update map
    map.set(currentChar, right);

    // update max length

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// main
const string = 'bbbbb';
const longestSubstringResult = longestSubstringWithoutRepeatingCharacter(string);
console.log('length of longest Substring Without Repeating Character is:', longestSubstringResult);
