-- Problem domain: https://www.codewars.com/kata/sql-basics-simple-group-by/train/sql

SELECT 
  age,
  count(name) as "people_count"
FROM people
GROUP BY age