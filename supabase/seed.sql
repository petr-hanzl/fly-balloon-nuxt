INSERT INTO actualities (id, creator_id, text, header) VALUES (1, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 'This is a testing actuality', 'Test');
INSERT INTO actualities (id, creator_id, text, header) VALUES (2, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 'This is a second actuality', 'Second');

INSERT INTO balloons (id, registration_number, maximum_capacity, additional_information, "isActive") VALUES (1, 'BB45Z; OK6953', 6, 'This is testing info about balloon', true);
INSERT INTO balloons (id, registration_number, maximum_capacity, additional_information, "isActive") VALUES (2, 'BB120P; OK6953', 20, 'This is second info about balloon', true);

INSERT INTO expense_types (id, type) VALUES (1, 'Gas');
INSERT INTO expense_types (id, type) VALUES (2, 'Car repair');
INSERT INTO expense_types (id, type) VALUES (3, 'Sect');
INSERT INTO expense_types (id, type) VALUES (4, 'Fuel');

INSERT INTO expenses (id, price, expense_type_id) VALUES (1, 123, 1);
INSERT INTO expenses (id, price, expense_type_id) VALUES (2, 456, 2);
INSERT INTO expenses (id, price, expense_type_id) VALUES (3, 789, 3);
INSERT INTO expenses (id, price, expense_type_id) VALUES (4, 237456, 4);

INSERT INTO flight_status (id, status) VALUES (1, 'Scheduled');
INSERT INTO flight_status (id, status) VALUES (2, 'Flying');
INSERT INTO flight_status (id, status) VALUES (3, 'Done');
INSERT INTO flight_status (id, status) VALUES (4, 'Canceled');

INSERT INTO flight_types (id, type) VALUES (1, 'Private');
INSERT INTO flight_types (id, type) VALUES (2, 'Public');
INSERT INTO flight_types (id, type) VALUES (3, 'Expedition tatras');
INSERT INTO flight_types (id, type) VALUES (4, 'Proposal');

INSERT INTO flights (id, pilot_id, creator_id, flight_type_id, flight_status_id, balloon_id, flight_date, additional_information)
VALUES (1, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 1, 1, 1, CURRENT_TIMESTAMP, 'First testing flight');
INSERT INTO flights (id, pilot_id, creator_id, flight_type_id, flight_status_id, balloon_id, flight_date, additional_information)
VALUES (2, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 2, 2, 2, CURRENT_TIMESTAMP, 'Second testing flight');
INSERT INTO flights (id, pilot_id, creator_id, flight_type_id, flight_status_id, balloon_id, flight_date, additional_information)
VALUES (3, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 3, 3, 1, CURRENT_TIMESTAMP, 'Second testing flight');
INSERT INTO flights (id, pilot_id, creator_id, flight_type_id, flight_status_id, balloon_id, flight_date, additional_information)
VALUES ('2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 4, 4, 2, CURRENT_TIMESTAMP, 'Second testing flight');

INSERT INTO marketing_types (id, type) VALUES (1, 'Google');
INSERT INTO marketing_types (id, type) VALUES (2, 'Seznam');
INSERT INTO marketing_types (id, type) VALUES (3, 'Facebook');
INSERT INTO marketing_types (id, type) VALUES (4, 'Instagram');

INSERT INTO marketing_expenses (id, expense, marketing_type_id) VALUES (1, 123, 1);
INSERT INTO marketing_expenses (id, expense, marketing_type_id) VALUES (2, 456, 2);
INSERT INTO marketing_expenses (id, expense, marketing_type_id) VALUES (3, 987, 3);
INSERT INTO marketing_expenses (id, expense, marketing_type_id) VALUES (4, 14134, 4);

INSERT INTO marketing_revenues (id, revenue, marketing_type_id) VALUES (1, 321, 1);
INSERT INTO marketing_revenues (id, revenue, marketing_type_id) VALUES (2, 654, 4);
INSERT INTO marketing_revenues (id, revenue, marketing_type_id) VALUES (3, 789, 3);
INSERT INTO marketing_revenues (id, revenue, marketing_type_id) VALUES (4, 12451, 4);

INSERT INTO orders (id, price, "isPaid")  VALUES (1, 123, true);
INSERT INTO orders (id, price, "isPaid")  VALUES (2, 567, false);
