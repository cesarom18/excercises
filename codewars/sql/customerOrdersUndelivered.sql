SELECT customer_id
FROM orders
GROUP BY customer_id
HAVING COUNT(delivery_date) = 0
ORDER BY customer_id DESC;