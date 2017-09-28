--This file will be very similar to read_products.sql, however we need to add a where statement so we don't get all the products.
SELECT * FROM products WHERE ProductId = $1;