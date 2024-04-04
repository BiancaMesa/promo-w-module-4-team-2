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

