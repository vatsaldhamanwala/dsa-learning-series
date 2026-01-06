function getFirstUniqueCharacter(word: string) {
  //   let firstNonRepeatCharacter = '';
  //   let duplicateCharacter: string[] = [];
  //   let uniqueCharacter: string[] = [];

  for (let i = 0; i < word.length; i++) {
    let wordCount = 1;
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] == word[j]) {
        wordCount++;
      }
    }

    if (wordCount == 1) {
      return word[i];
    }
  }
  return null;
}

//main
const input_word = 'loveleetcode';
const output = getFirstUniqueCharacter(input_word);
console.log('First unique character from string is: ', output);
