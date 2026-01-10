function reverseString(str: string[]): void {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    [str[start], str[end]] = [str[end], str[start]];
    start++;
    end--;
  }
}

//main
const strArr = ['h', 'e', 'l', 'l', 'o'];
reverseString(strArr);
console.log(strArr);
