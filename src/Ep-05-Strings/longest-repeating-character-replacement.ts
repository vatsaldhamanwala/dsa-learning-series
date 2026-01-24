function longestRepeatingCharacterReplacement(s: string, k: number): number {
  const map = new Map<string, number>();
  let left = 0;
  let maxFrequencyCountOfCharacter = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    map.set(currentChar, (map.get(currentChar) || 0) + 1);

    // get updated max frequency count
    maxFrequencyCountOfCharacter = Math.max(maxFrequencyCountOfCharacter, map.get(currentChar)!);

    // updated window size
    let windowSize = right - left + 1;

    //replacement possibility
    let replacementNeeded = windowSize - maxFrequencyCountOfCharacter;

    if (replacementNeeded > k) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar)! - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// main
const string = 'ABAB';
const k = 2;
const longestRepeatingCharacterReplacementResult = longestRepeatingCharacterReplacement(string, k);
console.log('length of longest Repeating Character Replacement is:', longestRepeatingCharacterReplacementResult);
