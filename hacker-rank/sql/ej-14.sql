SELECT DISTINCT city
FROM Station
WHERE city REGEXP '[^aeiou]$';