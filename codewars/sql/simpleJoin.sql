SELECT p.*, c.name AS company_name
FROM Products p
INNER JOIN Companies c ON p.company_id = c.id;