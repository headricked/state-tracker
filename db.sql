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

INSERT INTO person (firstName, lastName, dateOfBirth)
    VALUES ('Mike','Doe','19550125');

INSERT INTO person (firstName, lastName, dateOfBirth)
    VALUES ('Jill','Doe','19570125');

INSERT INTO person (firstName, lastName, dateOfBirth)
    VALUES ('Son','Doe','19751125');

INSERT INTO person (firstName, lastName, dateOfBirth)
    VALUES ('Daughter','Doe','19790320');
    
INSERT INTO familyTree (parentId, childId)
    VALUES ('1','3');

INSERT INTO familyTree (parentId, childId)
    VALUES ('1','4');

INSERT INTO familyTree (parentId, childId)
    VALUES ('2','3');

INSERT INTO familyTree (parentId, childId)
    VALUES ('2','4');