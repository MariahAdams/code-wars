// Problem domain: https://www.codewars.com/kata/reverse-every-other-word-in-the-string/javascript

// Reverse every other word in a given string, then return the string. Throw away 
// any leading or trailing whitespace, while ensuring there is exactly one space 
// between each word. Punctuation marks should be treated as if they are apart of 
// the word in this kata.

const reverse = s => s.split(' ').map((w, i) => i % 2 ? w.split('').reverse().join('') : w).join(' ').trim();

