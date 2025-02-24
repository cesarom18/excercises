SELECT SUM(ct.population)
FROM City ct
INNER JOIN Country c ON ct.countrycode = c.code
WHERE c.continent = 'Asia'; 