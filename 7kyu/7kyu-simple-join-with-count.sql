-- Problem domain: https://www.codewars.com/kata/sql-basics-simple-join-with-count/train/sql

SELECT
  people.*,
  count(toys.id) as "toy_count"
FROM people
JOIN toys
  ON toys.people_id = people.id
  GROUP BY people.id;