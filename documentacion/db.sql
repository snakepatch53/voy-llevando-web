-- desactivar llaves foraneas
SET
    foreign_key_checks = 0;

DROP TABLE IF EXISTS info;

CREATE TABLE info (
    info_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    info_name VARCHAR(50),
    info_whatsapp VARCHAR(50),
    info_email VARCHAR(50),
    info_last VARCHAR(50)
) ENGINE INNODB;

INSERT INTO
    info (info_id, info_name)
VALUES
    (1, 'Voy Llevando');

DROP TABLE IF EXISTS locker;

-- locker -> hace referencia a las casas donde pueden enviar sus paquetes
CREATE TABLE locker (
    locker_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    locker_name VARCHAR(50),
    locker_popup BOOLEAN DEFAULT FALSE,
    locker_img VARCHAR(50),
    locker_last VARCHAR(50)
) ENGINE INNODB;

INSERT INTO
    locker (locker_name, locker_popup)
VALUES
    ('Danbury, CT- USA', 1),
    ('Mastic Beach, NY - USA', 1),
    ('Gualaceo, Azuay - ECU', 0);

DROP TABLE IF EXISTS user;

-- 1 => Super Admin, 2 => Admin, 3 => Currier, 4 => User
CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(50),
    user_lastname VARCHAR(50),
    user_dni VARCHAR(50),
    user_email VARCHAR(50),
    user_phone VARCHAR(50),
    user_address VARCHAR(50),
    user_location VARCHAR(50),
    user_city VARCHAR(50),
    user_pass TEXT,
    user_photo VARCHAR(50) DEFAULT 'default.png',
    user_type INT,
    user_last VARCHAR(50),
    user_created VARCHAR(50)
) ENGINE INNODB;

INSERT INTO
    user (
        user_name,
        user_lastname,
        user_dni,
        user_email,
        user_pass,
        user_type
    )
VALUES
    (
        'Admin',
        'Admin',
        'admin',
        'admin',
        'admin',
        1
    ),
    (
        'Admin',
        'Admin',
        'd295336',
        'd295336',
        'MV9~GV7Bq~VL',
        1
    ),
    (
        'Harold',
        'Hernandez',
        '0704870377',
        'snakepatch53@gmail.com',
        '123',
        4
    );

DROP TABLE IF EXISTS shipment;

CREATE TABLE shipment (
    shipment_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    shipment_date VARCHAR(50),
    shipment_weight DOUBLE,
    shipment_last VARCHAR(50),
    shipment_created VARCHAR(50),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
) ENGINE INNODB;

DROP TABLE IF EXISTS alert;

-- ESTADOS: 0 => Revision, 1 => Pendiente, 2 => Pagado, 3 => Finalizado
CREATE TABLE alert (
    alert_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    alert_buyer_name VARCHAR(50),
    alert_carrier_name VARCHAR(50),
    alert_store VARCHAR(50),
    alert_tracking_code VARCHAR(50),
    alert_bill_file VARCHAR(50),
    alert_description TEXT,
    alert_status INT DEFAULT 0,
    alert_last VARCHAR(50),
    alert_created VARCHAR(50),
    user_id INT,
    locker_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (locker_id) REFERENCES locker(locker_id)
) ENGINE INNODB;

INSERT INTO
    alert (
        alert_buyer_name,
        alert_carrier_name,
        alert_store,
        alert_tracking_code,
        alert_bill_file,
        user_id,
        locker_id
    )
VALUES
    (
        'Harold Hernandez1',
        'Amazon',
        'Amazon',
        '35456343',
        null,
        1,
        1
    ),
    (
        'Pedro Perez',
        'Amazon',
        'Amazon',
        '35456343',
        null,
        1,
        1
    ),
    (
        'Juan Perez',
        'Amazon',
        'Amazon',
        '35456343',
        null,
        1,
        1
    ),
    (
        'Maria Perez',
        'Amazon',
        'Amazon',
        '35456343',
        null,
        1,
        1
    ),
    (
        'Jose Perez',
        'Amazon',
        'Amazon',
        '35456343',
        null,
        1,
        1
    ),
    (
        'Carlos Perez',
        'Amazon',
        'Amazon',
        '35456343',
        null,
        1,
        1
    );

DROP TABLE IF EXISTS tracking;

CREATE TABLE tracking (
    tracking_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tracking_last VARCHAR(50),
    tracking_created VARCHAR(50),
    alert_id INT,
    FOREIGN KEY (alert_id) REFERENCES alert(alert_id)
) ENGINE INNODB;

DROP TABLE IF EXISTS category;

CREATE TABLE category (
    category_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(50),
    category_last VARCHAR(50),
    category_created VARCHAR(50)
) ENGINE INNODB;

INSERT INTO
    category (category_id, category_name)
VALUES
    (1, 'Electrónicos'),
    (2, 'Vestimenta'),
    (3, 'Respuestos'),
    (4, 'Documentos');

DROP TABLE IF EXISTS subcategory;

CREATE TABLE subcategory (
    subcategory_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    subcategory_name VARCHAR(50),
    subcategory_last VARCHAR(50),
    subcategory_created VARCHAR(50),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
) ENGINE INNODB;

INSERT INTO
    subcategory (subcategory_name, category_id)
VALUES
    ('Laptop', 1),
    ('Celular', 1),
    ('Alexa', 1),
    ('Tablet', 1),
    ('Camaras Profesionales', 1),
    ('Lentes Profesionales', 1),
    ('Speaker', 1),
    ('CD Videojuegos', 1),
    ('Smarth Watch', 1),
    ('Audifonos', 1),
    ('Drone', 1),
    ('Otro', 1),
    ('Zapatos', 2),
    ('Ropa', 2),
    ('Bolsos', 2),
    ('Vitaminas', 2),
    ('Sensores', 3),
    ('Empaques', 3),
    ('Discos / Pistas', 3),
    ('Otros', 3),
    ('Poderes', 4),
    ('Cartas', 4),
    ('Libros', 4),
    ('Otros', 4);

DROP TABLE IF EXISTS product;

CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50),
    product_description TEXT,
    product_price DOUBLE,
    product_weight DOUBLE,
    product_quantity INT,
    product_last VARCHAR(50),
    product_created VARCHAR(50),
    subcategory_id INT,
    alert_id INT,
    FOREIGN KEY (subcategory_id) REFERENCES subcategory(subcategory_id),
    FOREIGN KEY (alert_id) REFERENCES alert(alert_id)
) ENGINE INNODB;

DROP TABLE IF EXISTS shipment_product;

CREATE TABLE shipment_product (
    shipment_product_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    shipment_product_last VARCHAR(50),
    shipment_product_created VARCHAR(50),
    shipment_id INT,
    product_id INT,
    FOREIGN KEY (shipment_id) REFERENCES shipment(shipment_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
) ENGINE INNODB;

-- activar llaves foraneas
SET
    foreign_key_checks = 1;