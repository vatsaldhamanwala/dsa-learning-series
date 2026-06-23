function isValidParentheses(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// main
const testString = '()[]{}';
const isValid = isValidParentheses(testString);
console.log(`The string "${testString}" has valid parentheses:`, isValid);
