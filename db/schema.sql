DROP TABLE IF EXISTS Departments;
DROP TABLE IF EXISTS Roles;
DROP TABLE IF EXISTS Employees;

CREATE TABLE Departments (
    Id INT PRIMARY KEY NOT NULL,
    Department_name VARCHAR(30)
);

CREATE TABLE Roles (
    Id INT PRIMARY KEY NOT NULL,
    Title VARCHAR(30),
    Salary DECIMAL,
    Department_id INT,
    FOREIGN KEY (Department_id) REFERENCES Departments(Id)
);

CREATE TABLE Employees (
    Id INT PRIMARY KEY,
    First_name VARCHAR(30),
    Last_name VARCHAR(30),
    Role_id INT,
    Manager_id INT,
    FOREIGN KEY (Role_id) REFERENCES Roles(Id),
    FOREIGN KEY (Manager_id) REFERENCES Employees(Id)
);