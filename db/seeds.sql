INSERT INTO Departments
  (Id, Department_name)
VALUES
  (1, 'Management'),
  (2, 'Sales'),
  (3, 'Accounting'),
  (4, 'Warehouse');

INSERT INTO Roles
  (Id, Title, Salary, Department_id)
VALUES
  (11, 'Manager', 60000.00, 1),
  (21, 'Director of Sales', 50000.00, 2),
  (22, 'Sales Representative', 40000.00, 2),
  (31, 'Chief Accountant', 45000.00, 3),
  (32, 'Accountant', 41500.00, 3),
  (41, 'Warehouse Foreman', 55000.00, 4),
  (42, 'Warehouse Staff', 35000.00, 4);

INSERT INTO Employees
  (Id, First_name, Last_name, Role_id, Manager_id)
VALUES
  (101, 'Michael', 'Scott', 11, null),
  (201, 'Jim', 'Halpert', 21, 101),
  (202, 'Dwight', 'Schrute', 22, 101),
  (203, 'Phyllis', 'Vance', 22, 101),
  (301, 'Angela', 'Martin', 31, 101),
  (302, 'Oscar', 'Martinez', 32, 101),
  (303, 'Kevin', 'Malone', 32, 101),
  (401, 'Darryl', 'Philbin', 41, 101),
  (402, 'Val', 'Johnson', 42, 101),
  (403, 'Hidetoshi', 'Hasagawa', 42, 101);