// Problem domain: https://www.codewars.com/kata/mumbling/train/javascript

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let result = [];
  
  for(let i = 0; i < s.length; i++) {
    let test = s[i].repeat(i + 1);
    let bucket = test.slice(0, 1).toUpperCase() + test.slice(1).toLowerCase();
    result.push(bucket);
  }
  
  return result.join('-');
}

/* Better */
const accum = s => s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
