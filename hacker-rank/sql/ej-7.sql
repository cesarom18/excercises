SELECT DISTINCT city
FROM Station
WHERE MOD(id, 2) = 0;