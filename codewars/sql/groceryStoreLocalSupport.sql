SELECT COUNT(id) AS products, country
FROM Products
WHERE country IN ('United States of America', 'Canada')
GROUP BY country
ORDER BY products DESC;