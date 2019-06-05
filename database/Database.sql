DROP DATABASE IF EXISTS crud;

CREATE DATABASE crud;

USE crud;

CREATE TABLE contacto(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    a_paterno VARCHAR(60) NOT NULL,
    a_materno VARCHAR(60),
    direccion VARCHAR(80),
    telefono CHAR(20),
    e_mail VARCHAR(80),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);