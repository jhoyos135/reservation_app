DROP DATABASE IF EXISTS customers_restaurants;
CREATE DATABASE customers_restaurants;
USE customers_restaurants;

CREATE TABLE tables(

    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    PRIMARY KEY(customer_id)
);

INSERT INTO tables(customer_name, customer_email, customer_id, phone_number)
VALUES
('julian', 'jhoyos@gmail.com', '4546', '3014045915'),
('sarah', 'sarah@gmail.com', '46546', '202598655');

CREATE TABLE waiting_tables(

    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    PRIMARY KEY(customer_id)
);

INSERT INTO waiting_tables(customer_name, customer_email, customer_id, phone_number)
VALUES
('guz', 'guz@gmail.com', '6585', '3014045945')
