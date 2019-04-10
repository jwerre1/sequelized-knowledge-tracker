CREATE DATABASE dqw5jv1y2s2mpdn2;
use dqw5jv1y2s2mpdn2;

CREATE TABLE knowledge
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    known BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
