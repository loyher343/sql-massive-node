--This sql file will be responsible for creating a new product using four parameters
INSERT INTO products ( name, description, price, imageurl ) VALUES ( $1, $2, $3, $4 );