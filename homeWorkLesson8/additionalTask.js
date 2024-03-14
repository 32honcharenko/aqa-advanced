const minValue = 5;
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterGreaterThanValue(minValue, numbersList) {
  const filteredNumbers = numbersList.filter((number) => number > minValue);

  return filteredNumbers;
}
const filtred = filterGreaterThanValue(minValue, numbersList);
console.log(filtred);
