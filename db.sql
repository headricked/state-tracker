CREATE TABLE person
(
    id SERIAL PRIMARY KEY NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    dateOfBirth DATE NOT NULL
);

CREATE TABLE familyTree
(
    id SERIAL PRIMARY KEY NOT NULL,
    parentId INT NOT NULL REFERENCES person(id),
    childId INT NOT NULL REFERENCES person(id)
);

