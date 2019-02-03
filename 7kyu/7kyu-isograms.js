// Problem Domain: https://www.codewars.com/kata/isograms/train/javascript

// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function that 
// determines whether a string that contains only letters is an 
// isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  let word = str.toLowerCase();
  let pattern = /(\w).*\1/;
  
  if(!word.length) return true;
  return !pattern.test(word);
};

// Other RegEx pattern I liked:
function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

// One liner:
const isIsogram = str => !str.match(/([a-z]).*\1/i);