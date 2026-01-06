function pyramidPattern(n: number) {
  // 1st half of diamond
  for (let i = 0; i <= n; i++) {
    let eachRow = ''; //so here each row will set as empty string

    // now we need spaces before to print stars
    let space = n - i;

    // it will creates spaces
    for (let j = 0; j <= space; j++) {
      eachRow += ' ';
    }

    //it will print stars
    let printStar = 2 * (i - 1);

    for (let k = 0; k <= printStar; k++) {
      eachRow += '*';
    }
    console.log(eachRow);
  }

  // 2nd half of diamond
  for (let i = n - 1; i >= 0; i--) {
    let eachRow = ''; // so here each row will set as empty string

    // now we need spaces before to print stars
    let space = n - i;

    // it will creates spaces
    for (let j = 0; j <= space; j++) {
      eachRow += ' ';
    }

    // it will print stars
    let printStar = 2 * (i - 1);

    for (let k = 0; k <= printStar; k++) {
      eachRow += '*';
    }
    console.log(eachRow);
  }

  return n;
}

// main
const input_rows_column = pyramidPattern(5);
console.log(input_rows_column);
