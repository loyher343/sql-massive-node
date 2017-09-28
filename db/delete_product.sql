--This sql file will be responsible for deleting a specific product by ID.
DELETE FROM products WHERE ProductsID = $1;