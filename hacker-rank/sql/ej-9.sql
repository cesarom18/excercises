SELECT city, LENGTH(city) AS city_length
FROM Station
ORDER BY city_length ASC, city ASC
LIMIT 1;

SELECT city, LENGTH(city) AS city_length
FROM Station
ORDER BY city_length DESC, city ASC
LIMIT 1;