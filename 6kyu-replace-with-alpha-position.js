// Problem domain: https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var dict = {};
  for(let i = 0; i < alpha.length; i++) {
    dict[alpha[i]] = i + 1;
  }
  
  let clean = text.toLowerCase().replace(/[^a-zA-Z]/g, '');
  return result = clean.split('').map(n => dict[n]).join(' ');
}


/* Clever */
function alphabetPosition(text) {
  return text
    .replace(/[^a-z]/gi, '')
    .split('')
    .map(ch => ch.charCodeAt(0) - 64)
    .join(' ');
}

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map(c => c.charCodeAt() - 64)
    .join(' ');
}