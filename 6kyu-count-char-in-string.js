//Problem domain: https://www.codewars.com/kata/52efefcbcdf57161d4000091

// The main idea is to count all the occuring characters(UTF-8) in string. 
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count(str) {  
  let result = {};

  for(let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      result[char] ? result[char]++ : result[char] = 1;
  }

  return result;
}

/* Refactored */
function count(s) {  
  let dict = {};
  s.split('').forEach(l => dict[l] ? dict[l]++ : dict[l] = 1);
  return dict;
}