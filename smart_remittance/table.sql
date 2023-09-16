DATABASE NAME - smart_remittance

CREATE TABLE login (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username varchar(30),
  password VARCHAR(25) NOT NULL
);

CREATE TABLE register (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(20) NOT NULL,
  mobile_number INT(10) NOT NULL
); 