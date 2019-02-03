// Problem domain: https://www.codewars.com/kata/split-strings/train/javascript

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  let result = [];
  let copy = str.split('');

  while(copy.length > 0) {
    let pairs = copy.splice(0, 2);
    result.push(pairs.join(''));

    if(copy.length === 1) {
      let odd = copy.pop() + '_';
      result.push(odd);
    }
  }

  return result;
}


/* Clever sol'n: */
/* function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);  return result;
} */