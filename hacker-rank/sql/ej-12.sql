SELECT DISTINCT City
FROM Station
WHERE city REGEXP '^[aeiou].*[aeiou]$';