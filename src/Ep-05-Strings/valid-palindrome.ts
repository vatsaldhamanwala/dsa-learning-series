function validPalindrome(str: string): boolean {
  str = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .trim();

  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
}

//main
const testStr = 'A man, a plan, a canal: Panama';
const isPalindrome = validPalindrome(testStr);
console.log(`Is "${testStr}" a palindrome?`, isPalindrome);
