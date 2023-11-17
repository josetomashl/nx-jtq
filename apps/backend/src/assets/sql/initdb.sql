create schema 'jtq';

create table if not exists Visitor(
  id BIGINT NOT NULL AUTO_INCREMENT,
  modificationCounter INTEGER NOT NULL,
  username VARCHAR(255),
  name VARCHAR(255),
  password VARCHAR(255),
  phoneNumber VARCHAR(255),
  acceptedCommercial BOOL DEFAULT '0',
  acceptedTerms BOOL NOT NULL DEFAULT '0',
  userType BOOL DEFAULT '0',
  CONSTRAINT PK_Visitor PRIMARY KEY(id)
);

create table if not exists DailyQueue(
  id BIGINT NOT NULL AUTO_INCREMENT,
  modificationCounter INTEGER NOT NULL,
  name VARCHAR(255),
  logo VARCHAR(255),
  currentNumber VARCHAR(255),
  attentionTime TIMESTAMP,
  minAttentionTime TIMESTAMP NOT NULL DEFAULT (60000 / 1000),
  active BOOL NOT NULL DEFAULT '1',
  customers INTEGER NOT NULL DEFAULT '0',
  CONSTRAINT PK_DailyQueue PRIMARY KEY(id)
);

CREATE TABLE if not exists AccessCode(
  id BIGINT NOT NULL AUTO_INCREMENT,
  modificationCounter INTEGER NOT NULL,
  ticketNumber VARCHAR(5),
  creationTime TIMESTAMP,
  startTime TIMESTAMP,
  endTime TIMESTAMP,
  idVisitor BIGINT NOT NULL,
  idQueue BIGINT NOT NULL,
  CONSTRAINT PK_AccessCode PRIMARY KEY(id),
  CONSTRAINT FK_AccessCode_idVisitor FOREIGN KEY(idVisitor) REFERENCES Visitor(id),
  CONSTRAINT FK_AccessCode_idQueue FOREIGN KEY(idQueue) REFERENCES DailyQueue(id)
);


INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'mike@mail.com', 'test', '1', '123456789', '0', '1', '1');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'peter@mail.com', 'test', '1', '123456789', '1', '1', '0');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'pablo@mail.com', 'test', '1', '123456789', '0', '1', '0');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'test1@mail.com', 'test', '1', '123456789', '0', '1', '0');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'test2@mail.com', 'test', '1', '123456789', '1', '1', '0');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'test3@mail.com', 'test', '1', '123456789', '0', '1', '0');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'test4@mail.com', 'test', '1', '123456789', '0', '1', '0');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'test5@mail.com', 'test', '1', '123456789', '1', '1', '0');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'test6@mail.com', 'test', '1', '123456789', '0', '1', '0');
INSERT INTO Visitor (modificationCounter, username, name, password, phoneNumber, acceptedCommercial, acceptedTerms, userType) VALUES (1, 'test7@mail.com', 'test', '1', '123456789', '0', '1', '0');

INSERT INTO DailyQueue (modificationCounter, name, logo, currentNumber, attentionTime, minAttentionTime, active, customers) VALUES (1, 'Day2', 'C:/logos/Day1Logo.png', 'Q001', NULL, '2023-11-13 12:30:54', TRUE, 9);

INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q001', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 1, 1);
INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q002', CURRENT_TIMESTAMP, '2008-01-01 00:00:01', NULL, 2, 1);
INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q003', CURRENT_TIMESTAMP, '2008-01-01 00:00:01', NULL, 3, 1);
INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q004', CURRENT_TIMESTAMP, '2008-01-01 00:00:01', NULL, 4, 1);
INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q005', CURRENT_TIMESTAMP, '2008-01-01 00:00:01', NULL, 5, 1);
INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q006', CURRENT_TIMESTAMP, '2008-01-01 00:00:01', NULL, 6, 1);
INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q007', CURRENT_TIMESTAMP, '2008-01-01 00:00:01', NULL, 7, 1);
INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q008', CURRENT_TIMESTAMP, '2008-01-01 00:00:01', NULL, 8, 1);
INSERT INTO AccessCode (modificationCounter, ticketNumber, creationTime, startTime, endTime, idVisitor, idQueue) VALUES (1, 'Q009', CURRENT_TIMESTAMP, '2008-01-01 00:00:01', NULL, 9, 1);