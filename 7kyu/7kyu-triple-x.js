//  Problem domain: https://www.codewars.com/kata/568dc69683322417eb00002c

// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false

function tripleX(s) {
  let a = s.split('');
  let i = a.findIndex(x => x === 'x');
  return a.splice(i, 3).join('') === 'xxx';
}