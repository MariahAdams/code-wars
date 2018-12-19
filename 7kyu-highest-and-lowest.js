// Project domain: https://www.codewars.com/kata/highest-and-lowest/javascript



function highAndLow(n){
  let s = n.split(' ').sort((a, b) => b - a);
  let first = s.shift();
  return result = first + (s.length > 0 ? ' ' + s.pop() : ' ' + first);
}