// Problem Domain: https://www.codewars.com/kata/twice-as-old/train/javascript

// Your function takes two arguments:
//  1. current father's age (years)
//  2. current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs((sonYearsOld * 2) - dadYearsOld);