-- Problem domain: https://www.codewars.com/kata/sql-concatenating-columns/train/sql

SELECT 
  concat(prefix, ' ', first, ' ', last, ' ', suffix) as "title"
FROM names;