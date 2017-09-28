--This sql file will be responsible for updating the description of a product by ID.
UPDATE products SET Descritpion = $2 WHERE ProductID = $1;