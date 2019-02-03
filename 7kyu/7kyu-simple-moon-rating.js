// Problem Domain: https://www.codewars.com/kata/simple-moon-rating/train/javascript

// When you look at movie ratings, you usually see it as decimal numbers 
// representing average of all viewers' votes. While it is very informative, 
// it's not very visually appealing. That's what stars, or in our case- moons, 
// are created for.

// Your task is to transform decimal number rating, which is in range 0-10, 
// into 5-moons scale. Your final rating should be rounded to "0.5" 
// (nearest half moon). Input is always valid.

// full moon = 'o',
// half moon = 'c',
// new moon = 'x';

// example:
// let results = { 0: 'xxxxx',
//               0.6: 'cxxxx',
//               1.5: 'oxxxx',
//               3.9: 'ooxxx',
//               5: 'oocxx',
//               6: 'oooxx',
//               7.2: 'ooocx',
//               8.7: 'ooooc',
//               10: 'ooooo'}

/* SOLUTION */
function moonRating(rating) {
  let newRating = rating / 2; 
  let roundedRating = (Math.round(newRating * 2) / 2);
  let result = ''; 
  
  for(let i = 0; i < 5; i++) { 
    if(roundedRating >= 1) {
      result += 'o';
    }
    else if(roundedRating < 1 && roundedRating > 0) {
      result += 'c';
    }
    else {
      result += 'x';
    }
    roundedRating--;
  }
  return result;
}
