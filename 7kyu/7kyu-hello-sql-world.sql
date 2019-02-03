-- Problem domain: https://www.codewars.com/kata/hello-sql-world/sql

-- Return a table with a single column named Greeting with the phrase 'hello world!'

CREATE TABLE Hello (
  Greeting VARCHAR(256)
);

INSERT INTO Hello (Greeting)
VALUES ('hello world!');

SELECT Greeting FROM Hello;

/* Best practice */
SELECT 'hello world!' as "Greeting";
