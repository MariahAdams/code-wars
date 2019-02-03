// Problem domain: https://www.codewars.com/kata/how-many-animals-are-there/javascript

// From a sentence, deduce the total number of animals.
// For example :
// "I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14
// "Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9

const countAnimals = s => s.split(' ').filter(x => !isNaN(x)).map(Number).reduce((a, b) => a + b, 0);
