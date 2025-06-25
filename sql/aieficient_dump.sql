-- Tạo database
CREATE DATABASE aificent;

USE aificent;

CREATE TABLE contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  message TEXT,
  createdAt DATETIME
);