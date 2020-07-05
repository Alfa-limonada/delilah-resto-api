const mysql2 = require("mysql2");
const { dbConfig } = require("../environments/development").config;
const connection = mysql2.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password
});

async function createDatabase() {
    connection.query(`CREATE SCHEMA IF NOT EXISTS ${dbConfig.database};`);
    connection.query(`USE ${dbConfig.database};`);
}

async function createTables() {
    connection.query(
        `CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(70) UNIQUE NOT NULL,
    user_email VARCHAR(100) UNIQUE NOT NULL,
    user_full_name VARCHAR(70) NOT NULL,
    user_phone VARCHAR(15) NOT NULL,
    user_address VARCHAR(60) NOT NULL,
    user_password VARCHAR(10) NOT NULL,
    user_rol BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP   
);`
    );

    connection.query(
        `CREATE TABLE IF NOT EXISTS orders ( 
    order_id INT PRIMARY KEY NOT NULL,
    user_id INT NOT NULL, 
    order_status ENUM('new', 'confirmed', 'preparing', 'ready', 'delivered') DEFAULT 'new' NOT NULL, 
    order_description VARCHAR(200) NOT NULL,
    order_pay_method VARCHAR(200) NOT NULL, 
    order_price VARCHAR(40) NOT NULL,    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);`
    );

    connection.query(
        `CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(70) UNIQUE NOT NULL,
    product_image VARCHAR(60) NOT NULL NOT NULL,
    product_price VARCHAR(40) NOT NULL, 
    product_stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`
    );

    connection.query(
        `CREATE TABLE IF NOT EXISTS products_by_order (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    product_quantity INT DEFAULT 1,    
    FOREIGN KEY (order_id) REFERENCES orders(order_id),    
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`
    );
}

exports.createDatabase = createDatabase;
exports.createTables = createTables;


