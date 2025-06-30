-- Database đã được tạo bởi MYSQL_DATABASE environment variable
-- Chỉ cần tạo bảng

USE aificent;

CREATE TABLE IF NOT EXISTS contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  message TEXT,
  createdAt DATETIME
);