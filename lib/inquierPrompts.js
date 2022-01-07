const inquirer = require('inquirer');

var departmentPrompts = [
    {
        type: 'number',
        name: 'departmentId',
        message: 'What is the department ID?',
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log('Please enter the department ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the department name (limit 30 characters)?',
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log('Please enter the department name!');
                return false;
            }
        }
    }
]

var rolePrompts = [
    {
        type: 'number',
        name: 'roleId',
        message: 'What is the role ID?',
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log('Please enter the role ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'roleTitle',
        message: 'What is the role title (limit 30 characters)?',
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log('Please enter the role title!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'roleSalary',
        message: 'What is the role salary?',
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log('Please enter the role salary!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'roleDepartment',
        message: 'What department ID does the role belong to?',
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log('Please enter the role department ID!');
                return false;
            }
        }
    },
]

var employeePrompts = [
    {
        type: 'number',
        name: 'employeeId',
        message: 'What is the employee ID?',
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log('Please enter the employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name (limit 30 characters)?",
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log("Please enter the employee's first name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name (limit 30 characters)?",
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log("Please enter the employee's last name!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'employeeRole',
        message: 'What role ID does the employee belong to?',
        validate: inputField => {
            if (inputField) {
                return true;
            } else {
                console.log('Please enter the employee role ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeManager',
        message: 'What is the manager ID for this employee (leave blank if no direct manager)?'
    }
]

module.exports = { departmentPrompts, rolePrompts, employeePrompts };