// Problem domain: https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot seperating them.

const abbrevName = n => n.split(' ').map((el, i) => el[0].toUpperCase()).join('.');