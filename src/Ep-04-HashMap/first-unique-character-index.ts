function firstUniqueCharacterInString(str: string): number {
  const map = new Map<string, number>();

  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i])! || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) return i;
  }

  return -1;
}

const string = 'typescript';
const firstUniqueCharIndex = firstUniqueCharacterInString(string);
console.log('🚀 ~ firstUniqueCharIndex:', firstUniqueCharIndex);
