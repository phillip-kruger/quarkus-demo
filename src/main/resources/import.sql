-- Pink Floyd
INSERT INTO RockBand(id, name, since) VALUES (nextval('hibernate_sequence'), 'Pink Floyd', '1965-05-06'); // 1
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Nick Mason', 3); 
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Roger Waters', 1);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Bob Klose', 0);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Syd Barrett', 5);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Richard Wright', 4);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (1, 2);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (1, 3);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (1, 4);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (1, 5);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (1, 6);

-- The Rolling Stones
INSERT INTO RockBand(id, name, since) VALUES (nextval('hibernate_sequence'), 'The Rolling Stones', '1962-04-24'); // 7
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Mick Jagger', 5); 
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Brian Jones', 2);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Keith Richards', 0);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Charlie Watts', 3);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Bill Wyman', 1);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (7, 8);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (7, 9);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (7, 10);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (7, 11);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (7, 12);

-- Led Zeppelin
INSERT INTO RockBand(id, name, since) VALUES (nextval('hibernate_sequence'), 'Led Zeppelin', '1968-11-10'); // 13
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Robert Plant', 5); 
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Jimmy Page', 0);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'John Paul Jones', 1);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'John Bonham', 3);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (13, 14);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (13, 15);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (13, 16);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (13, 17);

-- Foo Fighters
INSERT INTO RockBand(id, name, since) VALUES (nextval('hibernate_sequence'), 'Foo Fighters', '1994-01-12'); // 18
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Dave Grohl', 5); 
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Nate Mendel', 1);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Pat Smear', 2);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Taylor Hawkins', 3);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Chris Shiflett', 0);
INSERT INTO member(id, name, role) VALUES (nextval('hibernate_sequence'), 'Rami Jaffee', 4);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (18, 19);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (18, 20);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (18, 21);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (18, 22);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (18, 23);
INSERT INTO RockBand_Member(RockBand_id, bandmembers_id) VALUES (18, 24);