function validPalindromeII(s: string): boolean {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return checkIsPalindrome(s, start + 1, end) || checkIsPalindrome(s, start, end - 1);
    }
    start++;
    end--;
  }

  return true;
}

function checkIsPalindrome(s: string, start: number, end: number): boolean {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// main
const testPalindromeString = 'abcs';
const palindromeCheck = validPalindromeII(testPalindromeString);
console.log('given string after deleting at most character is:', palindromeCheck);
