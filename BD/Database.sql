CREATE TABLE projectData(
idProject INT auto_increment PRIMARY KEY,
projectName VARCHAR(50) NOT NULL,
slogan VARCHAR(100),
repo VARCHAR(100) NOT NULL,
demo VARCHAR(100),
techs VARCHAR(50),
description VARCHAR(200) NOT NULL,
projectImage VARCHAR(3000) NOT NULL
);

CREATE TABLE author(
authorName VARCHAR(50) NOT NULL,
jobName VARCHAR(50) NOT NULL,
authorImage VARCHAR(3000) NOT NULL
);


ALTER TABLE author ADD COLUMN idAuthor INT auto_increment PRIMARY KEY;

SELECT * FROM projectData;

SELECT author.authorName, author.jobName, projectData.projectName 
FROM projectData, author
WHERE projectData.fk_idAuthor = author.idAuthor
ORDER BY projectData.projectName ASC;

UPDATE author SET jobName = 'millionaire$$$' WHERE idAuthor = 3;

ALTER TABLE projectData MODIFY projectImage text not null;
ALTER TABLE author MODIFY authorImage text not null;

-- Para modificar la estructura base de una tabla:
-- ALTER TABLE añadir columna nueva (ADD COLUMN) o modificar una antigua (MODIFY) o sólo cambiar tipo dato (CHANGE)

-- Para añadir/modificar los valores de una tabla:
-- INSERT INTO añadir valores a columnas por primera vez
-- UPDATE modificar el valor de una columna concreta cuando el resto ya están escritas


