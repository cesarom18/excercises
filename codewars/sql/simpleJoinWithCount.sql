SELECT p.id, p.name, COUNT(t.people_id) AS toy_count
FROM People p
INNER JOIN Toys t ON p.id = t.people_id
GROUP BY p.id;