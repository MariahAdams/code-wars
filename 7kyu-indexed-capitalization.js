// Problem domain: https://www.codewars.com/kata/indexed-capitalization/train/javascript

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:
// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

const capitalize = (s, a) => s.split('').map((c, i) => a.includes(i) ? c.toUpperCase() : c).join('');