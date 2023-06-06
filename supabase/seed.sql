INSERT INTO actuality_types (id, type) VALUES (1, 'Warning');
INSERT INTO actuality_types (id, type) VALUES (2, 'Info');

INSERT INTO actualities (id, text, header, creator_id, actuality_type_id) VALUES (1, 'WARNING', 'This is a testing actuality', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 1);
INSERT INTO actualities (id, text, header, creator_id, actuality_type_id) VALUES (2, 'INFO', 'This is a testing actuality', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 2);


INSERT INTO balloons (id, registration_number, maximum_capacity, additional_information, is_active) VALUES (1, 'BB45Z; OK6953', 6, 'This is testing info about balloon', true);
INSERT INTO balloons (id, registration_number, maximum_capacity, additional_information, is_active) VALUES (2, 'BB120P; OK6953', 20, 'This is second info about balloon', true);

INSERT INTO cars (id, name, registration_number, stk_expire, is_active, additional_information) VALUES (1, 'Land Rover: Discovery 2', 'v3457890qpn', CURRENT_TIMESTAMP, true, 'this is additional info');
INSERT INTO cars (id, name, registration_number, stk_expire, is_active, additional_information) VALUES (2, 'Peugeot: 302', 'qv0v2cyn3', CURRENT_TIMESTAMP, true, 'this is additional info');

INSERT INTO currency_types (id, currency) VALUES (1, 'CZK');
INSERT INTO currency_types (id, currency) VALUES (2, 'EURO');
INSERT INTO currency_types (id, currency) VALUES (3, 'USD');

INSERT INTO customers (id, email, phone_number, first_name, last_name) VALUES (1, 'customer1@customer.com', '+420123123111', 'Customer', 'One');
INSERT INTO customers (id, email, phone_number, first_name, last_name) VALUES (2, 'customer2@customer.com', '+420123123222', 'Customer', 'Two');
INSERT INTO customers (id, email, phone_number, first_name, last_name) VALUES (3, 'customer3@customer.com', '+420123123333', 'Customer', 'Three');

INSERT INTO expense_types (id, type) VALUES (1, 'Gas');
INSERT INTO expense_types (id, type) VALUES (2, 'Car repair');
INSERT INTO expense_types (id, type) VALUES (3, 'Sect');
INSERT INTO expense_types (id, type) VALUES (4, 'Fuel');

INSERT INTO expenses (id, price, expense_type_id, currency_type_id, additional_information) VALUES (1, 123, 1, 1, 'Gas expense');
INSERT INTO expenses (id, price, expense_type_id, currency_type_id, additional_information) VALUES (2, 456, 2, 2, 'Car repair expanse');
INSERT INTO expenses (id, price, expense_type_id, currency_type_id, additional_information) VALUES (3, 789, 3, 3, 'Sect expense');
INSERT INTO expenses (id, price, expense_type_id, currency_type_id, additional_information) VALUES (4, 237456, 4, 1, 'Fuel expense');

INSERT INTO extended_user_roles (id, role) VALUES (1, 'Admin');
INSERT INTO extended_user_roles (id, role) VALUES (2, 'Pilot');
INSERT INTO extended_user_roles (id, role) VALUES (3, 'Driver');

INSERT INTO extended_users (id, phone_number, is_active, pilots_class, pilots_licence_number, user_id, role_id, first_name, last_name) VALUES (1, '+420123321123', true, '', '', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 1, 'Admin', 'Admin');
INSERT INTO extended_users (id, phone_number, is_active, pilots_class, pilots_licence_number, user_id, role_id, first_name, last_name) VALUES (2, '+420123321123', true, '', '', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 2, 'Pilot', 'Pilot');
INSERT INTO extended_users (id, phone_number, is_active, pilots_class, pilots_licence_number, user_id, role_id, first_name, last_name) VALUES (3, '+420123321123', true, '', '', '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 3, 'Driver', 'Driver');

INSERT INTO flight_status (id, status) VALUES (1, 'Scheduled');
INSERT INTO flight_status (id, status) VALUES (2, 'Flying');
INSERT INTO flight_status (id, status) VALUES (3, 'Done');
INSERT INTO flight_status (id, status) VALUES (4, 'Canceled');

INSERT INTO flight_types (id, type) VALUES (1, 'Private');
INSERT INTO flight_types (id, type) VALUES (2, 'Public');
INSERT INTO flight_types (id, type) VALUES (3, 'Expedition tatras');
INSERT INTO flight_types (id, type) VALUES (4, 'Proposal');



INSERT INTO location_types (id, location) VALUES (1, 'Brno-Přehrada');
INSERT INTO location_types (id, location) VALUES (2, 'Brno-Vaňkovka');
INSERT INTO location_types (id, location) VALUES (3, 'Brno-Něco');
INSERT INTO location_types (id, location) VALUES (4, 'Pálava');
INSERT INTO location_types (id, location) VALUES (5, 'Olomouc');
INSERT INTO location_types (id, location) VALUES (6, 'Jihlava');


INSERT INTO flights (id, creator_id, flight_type_id, flight_status_id, balloon_id, timestamp, additional_information, driver_id, is_full, pilot_id, location_id)
VALUES (1, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 2, 3, 2, CURRENT_TIMESTAMP, 'First testing public flight', 2, false, 3, 1);
INSERT INTO flights (id, creator_id, flight_type_id, flight_status_id, balloon_id, timestamp, additional_information, driver_id, is_full, pilot_id, location_id)
VALUES (2, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 4, 1, 1, CURRENT_TIMESTAMP, 'Second testing proposal flight', 3, true, 3, 3);
INSERT INTO flights (id, creator_id, flight_type_id, flight_status_id, balloon_id, timestamp, additional_information, driver_id, is_full, pilot_id, location_id)
VALUES (3, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 2, 2, 1, CURRENT_TIMESTAMP, 'Third testing flight', 2, false, 3, 4);
INSERT INTO flights (id, creator_id, flight_type_id, flight_status_id, balloon_id, timestamp, additional_information, driver_id, is_full, pilot_id, location_id)
VALUES (4, '2a43adb1-6cbc-4fc4-ac7c-91f94845c1e4', 1, 1, 1, CURRENT_TIMESTAMP, 'Fourth testing flight', 2, true, 3, 5);

INSERT INTO marketing_types (id, type) VALUES (1, 'Google');
INSERT INTO marketing_types (id, type) VALUES (2, 'Seznam');
INSERT INTO marketing_types (id, type) VALUES (3, 'Facebook');
INSERT INTO marketing_types (id, type) VALUES (4, 'Instagram');

INSERT INTO marketing_expenses (id, expense, marketing_type_id, currency_type_id, additional_information) VALUES (1, 123, 1, 1, 'additional info 1');
INSERT INTO marketing_expenses (id, expense, marketing_type_id, currency_type_id, additional_information) VALUES (2, 456, 2, 3, 'additional info 2');
INSERT INTO marketing_expenses (id, expense, marketing_type_id, currency_type_id, additional_information) VALUES (3, 987, 3, 2, 'additional info 3');
INSERT INTO marketing_expenses (id, expense, marketing_type_id, currency_type_id, additional_information) VALUES (4, 14134, 4, 1, 'additional info 4');

INSERT INTO marketing_revenues (id, revenue, marketing_type_id, currency_type_id, additional_information) VALUES (1, 321, 1, 1, 'additional info 1');
INSERT INTO marketing_revenues (id, revenue, marketing_type_id, currency_type_id, additional_information) VALUES (2, 654, 4, 2, 'additional info 2');
INSERT INTO marketing_revenues (id, revenue, marketing_type_id, currency_type_id, additional_information) VALUES (3, 789, 3, 3, 'additional info 3');
INSERT INTO marketing_revenues (id, revenue, marketing_type_id, currency_type_id, additional_information) VALUES (4, 12451, 4, 1, 'additional info 4');


INSERT INTO orders (id, price, "isPaid")  VALUES (1, 123, true);
INSERT INTO orders (id, price, "isPaid")  VALUES (2, 567, false);

INSERT INTO flight_tickets (id, flight_type_id, with_accomodation, number_of_people, ticket_number, order_id, number_of_flights) VALUES (1, 2, true, 6, 1, 1, 2);
INSERT INTO flight_tickets (id, flight_type_id, with_accomodation, number_of_people, ticket_number, order_id, number_of_flights) VALUES (2, 4, false, 6, 2, 2, 1);

INSERT INTO reservations (id, customer_id, flight_id, is_paid) VALUES (1, 1, 1, null);
INSERT INTO reservations (id, customer_id, flight_id, is_paid) VALUES (2, 2, 2, null);

INSERT INTO time_availability (id, extended_user_id, time) VALUES (1, 2, null);
INSERT INTO time_availability (id, extended_user_id, time) VALUES (2, 2, null);
INSERT INTO time_availability (id, extended_user_id, time) VALUES (3, 3, null);
INSERT INTO time_availability (id, extended_user_id, time) VALUES (4, 3, null);

INSERT INTO voucher_status (id, status) VALUES (1, 'Valid');
INSERT INTO voucher_status (id, status) VALUES (2, 'Expired');
INSERT INTO voucher_status (id, status) VALUES (3, 'Used');

INSERT INTO vouchers (id, expiration_date, voucher_number, flight_ticket_id, voucher_status_id, timestamp_of_payment) VALUES (1, null, '1f24v1v', 1, 1, null);
INSERT INTO vouchers (id, expiration_date, voucher_number, flight_ticket_id, voucher_status_id, timestamp_of_payment) VALUES (2, null, 'sdb6sd14', 2, 2, null);
