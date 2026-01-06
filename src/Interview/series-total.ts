function getSumOfSeries(startSeries: number, difference: number, totalTerm: number) {
  let series: number[] = [];
  let seriesSum = 0;

  for (let i = 0; i < totalTerm; i++) {
    let term = startSeries + i * difference;

    series.push(term);
    seriesSum += term;
  }
  return { series, seriesSum };
}

//main
const input_series = getSumOfSeries(2, 4, 5);
console.log('Output: ', input_series);
// console.log('Series: ', input_series);
// console.log(`sum of total terms is :`, input_series);
