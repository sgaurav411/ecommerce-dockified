CREATE DATABASE productsdb;

CREATE TABLE productstable(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    price float,
    quantity INT,
    imgLink VARCHAR(50)
);