SELECT c.continent, FLOOR(AVG(ct.population))
FROM City ct
INNER JOIN Country c ON ct.countrycode = c.code
GROUP BY c.continent;