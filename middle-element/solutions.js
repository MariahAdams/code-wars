/* v1 */
var gimme = function (inputArray) {
  let sortedArray = inputArray.slice();
  let middleNum = sortedArray.sort(function(a, b) {return a - b})[1];
  return inputArray.indexOf(middleNum);
};

/* v2 */
var gimme = function (inputArray) {
  let middleNum = inputArray.slice().sort(function(a, b) {return a - b})[1];
  return inputArray.indexOf(middleNum);
};