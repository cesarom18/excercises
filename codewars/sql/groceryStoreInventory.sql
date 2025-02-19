SELECT id, name, stock
FROM Products
WHERE stock <= 2 AND producent = 'CompanyA'
ORDER BY id;