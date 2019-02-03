// Problem domain: 

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = s => s.split(' ').map(p => p.match(/[^a-z]/i) ? p : p.substr(1) + p.substr(0, 1) + 'ay').join(' ');

/* Fancy RegEx */
const pigIt = s => s.replace(/\b(\w)(\w*)\b/gi, '$2$1ay');
const pigIt = s => s.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");

